import React from 'react';
import Img from "gatsby-image"
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Languages from '../components/Languages';
import Projects from '../components/Projects';
import Educations from '../components/Educations';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import HeroText from '../components/HeroText';
import Social from '../components/Social';

import media from '../utils/style';

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;
  ${props =>
    props.dark &&
    css`
      background: #015b6d;
      h2 {
        color: #fff;
      }
      h3 {
        color: #fff;
      }
      div {
        color: #979797;
      }
    `}
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 0.67em 0;
  ${media.xs`
    font-size:1.5em;
  `}
`;

const Paragraph = styled.p`
   margin: 1rem 0;
   text-align: start;
`;

const Avatar = styled(Img)`
  flex-basis:33.33%;
  margin: 0 0 0 5rem;
  height: 350px;
  width: 350px;
`;

const About = styled.div`
   display: flex;
   flex-direction: row;
   justify-content:center;
  margin 0 auto;
  max-width: 1200px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis:66.66%;
  padding: 0 5rem;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Hero fluid={data.hero.edges[0].node.fluid}>
      <HeroText />
      <Social edges={data.allSocialJson.edges}/>
    </Hero>
    <Section id="about-me">
      <h1>About Me</h1>
      <About>
        <Avatar fluid={data.me.edges[0].node.fluid} imgStyle={{ objectFit: "contain" }}/>
        <Description>
          <Paragraph>
          After graduating in Biological Sciences I am currently doing 
          my master's degree in Marine Sciences to pursue my dream of becoming a marine biologist.
          </Paragraph>
          <Paragraph>
          My research interests are wide and include marine biology and ecology, 
          marine conservation and the effects of climate change on the marine environment. 
          </Paragraph>
          <Paragraph>
          In my future career, I would like to combine my passion for the ocean with 
          the field of science communication through video making and editing.
          </Paragraph>
          <Paragraph>
          I am moved by a strong will to learn and get involved by always giving my best. 
          Some of my distinctive skills include motivation and commitment, as well as adaptability, time management and planning.   
          </Paragraph>
        </Description>
      </About>
    </Section>
    <Section id="experience" dark>
      <SectionTitle>My Experience</SectionTitle>
      <Experience edges={data.allExperienceJson.edges} />
    </Section>
    <Section id="education">
      <SectionTitle>My Education</SectionTitle>
      <Educations edges={data.allEducationJson.edges} />
    </Section>
    <Section id="certifications" dark>
      <SectionTitle>My Certifications</SectionTitle>
      <Certifications edges={data.allCertificationsJson.edges} />
    </Section>
    <Section id="volunteering">
      <SectionTitle>My Volunteering</SectionTitle>
      <Educations edges={data.allVolunteeringJson.edges} />
    </Section>
    <Section id="projects" dark>
      <SectionTitle>My Projects</SectionTitle>
      <Projects edges={data.allProjectJson.edges} />
    </Section>
    <Section id="languages">
      <SectionTitle>My Languages</SectionTitle>
      <Languages edges={data.allLanguagesJson.edges} />
    </Section>
    <Section id="contact" dark>
      <SectionTitle>Contact Me</SectionTitle>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <ContactForm />
        </Box>
      </Flex>
    </Section>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query indexQuery {
    allSocialJson {
      edges {
        node {
          url
          type
        }
      }
    }
    allExperienceJson {
      edges {
        node {
          id
          company
          title
          start
          end
          location
          description
        }
      }
    }
    allCertificationsJson {
      edges {
        node {
          name
          id
          issued
          authority
        }
      }
    }
    allLanguagesJson {
      edges {
        node {
          code
          id
          level
          name
        }
      }
    }
    hero: allImageSharp(
      filter: { original: { src: { regex: "/seashore/" } } }
    ) {
      edges {
        node {
          id
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    me: allImageSharp(
      filter: { original: { src: { regex: "/me/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    allEducationJson {
      edges {
        node {
          id
          school
          program
          start
          end
          description
          location
        }
      }
    }
    allVolunteeringJson {
      edges {
        node {
          id
          program
          school
          location
          start
          end
          description
        }
      }
    }
    allProjectJson {
      edges {
        node {
          id
          title
          link
          description
        }
      }
    }
  }
`;
