import React from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Parallax, Background } from 'react-parallax';

import Experience from '../components/Experience';
import About from '../components/About';
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

const ParallaxImage = styled.img`
  ${media.xs`
    left: 0%;
  `}
`;

const IndexPage = ({ data }) => {

  return (<Layout>
    <Hero fluid={data.hero.edges[0].node.fluid}>
      <HeroText />
      <Social edges={data.allSocialJson.edges}/>
    </Hero>
    <Section id="about-me">
      <h1>About Me</h1>
      <About fluid={data.me.edges[0].node.fluid}/>
    </Section>
    <Section id="experience" dark>
      <SectionTitle>My Experience</SectionTitle>
      <Experience edges={data.allExperienceJson.edges} />
    </Section>
    <Parallax bgImage={data.fieldwork.edges[0].node.fluid.srcWebp} strength={200} bgClassName={"parallax-img"}>
      <div style={{ height: '750px' }} />
    </Parallax>
    <Section id="education">
      <SectionTitle>My Education</SectionTitle>
      <Educations edges={data.allEducationJson.edges} />
    </Section>
    <Section id="certifications" dark>
      <SectionTitle>My Certifications</SectionTitle>
      <Certifications edges={data.allCertificationsJson.edges} />
    </Section>
    <Parallax bgImage={data.snorkeling.edges[0].node.fluid.srcWebp} strength={200} bgClassName={"parallax-img"}>
      <div style={{ height: '750px' }} />
    </Parallax>
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
  )
}
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
    fieldwork: allImageSharp(
      filter: { original: { src: { regex: "/fieldwork/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    snorkeling: allImageSharp(
      filter: { original: { src: { regex: "/snorkeling/" } } }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1280) {
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
