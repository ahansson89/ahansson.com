import React from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Technologies from '../components/Technologies';
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
      background: #292929;
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

const IndexPage = ({ data }) => (
  <Layout>
    <Hero fluid={data.hero.edges[0].node.fluid}>
      <HeroText />
      <Social edges={data.allSocialJson.edges} />
    </Hero>
    <Section id="about-me">
      <h1>About Me</h1>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <p>
            As the Founder of AH2, I'm on a thrilling quest to navigate and conquer the ever-evolving challenges of the media universe. Think of me as a maestro orchestrating a symphony of cutting-edge content production technologies and ingenious monetization strategies. From the magic of cloud-based solutions that jazz up the media supply chain, to the rhythm of enhancing broadcast and live production, all the way to the crescendo of direct-to-consumer services – it's a dynamic performance that keeps getting better.
          </p>
          <p>
            Imagine me wielding serverless technologies and modern application development like a wand, conjuring new revenue streams and growth opportunities for our clients. It's not just about keeping up with the fast-paced media beat; it's about setting the tempo, leading the dance.
          </p>
          <p>
            In this grand production, I'm also the choreographer of data and analytics, DevOps, and cloud-native development. This isn't just your typical behind-the-scenes work; it's about dazzling our audience with solutions that don't just meet the industry's rhythm but groove to a whole new beat of scalability, reliability, and exceptional customer experience. Welcome to the show where media and entertainment technology takes the center stage, and where every act is more exciting than the last!
          </p>
        </Box>
      </Flex>
    </Section>
    <Section id="experience" dark>
      <SectionTitle>My Experience</SectionTitle>
      <Experience edges={data.allExperienceJson.edges} />
    </Section>
    <Section id="technologies">
      <SectionTitle>My Favorite Technologies</SectionTitle>
      <Technologies edges={data.allLogos.edges} />
    </Section>
    <Section id="certifications" dark>
      <SectionTitle>My Certifications</SectionTitle>
      <Certifications edges={data.allCertificationsJson.edges} />
    </Section>
    <Section id="education">
      <SectionTitle>My Education</SectionTitle>
      <Educations edges={data.allEducationJson.edges} />
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
        }
      }
    }
    allCertificationsJson {
      edges {
        node {
          name
          id
          start
          end
          authority
        }
      }
    }
    allLogos: allImageSharp(
      filter: { original: { src: { regex: "/logo/" } } }
      sort: { fields: original___src }
    ) {
      edges {
        node {
          id
          fixed(height: 80, grayscale: true) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
    hero: allImageSharp(
      filter: { original: { src: { regex: "/golden-gate/" } } }
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
    allEducationJson {
      edges {
        node {
          id
          school
          program
          start
          end
        }
      }
    }
  }
`;
