import React from 'react'
import {graphql} from 'gatsby'
import styled, {css} from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Link from '../components/Link'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Technologies from '../components/Technologies'
import Educations from '../components/Educations'
import ContactForm from '../components/ContactForm'
import Hero from '../components/Hero'

import { media } from '../utils/style'

import Layout from '../components/layout'
import HeroText from '../components/heroText'
import Social from '../components/social'

const StyledHero = styled(Hero)`
  margin-top:-62px;
  &>div:nth-child(2) {
    width:80%;
    margin:0 auto;
  }
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;
  ${props => props.dark && css`
    background: #292929;
    h2 {
      color:#fff;
    }
    h3 {
      color:#fff;
    }
    div {
      color: #979797;
    }

  `}
`

const SectionTitle = styled.h2`
  font-size: 2em;
  margin: 0.67em 0;
  ${ media.xs`
    font-size:1.5em;
  ` }
`

const IndexPage = ({data}) => (
  <Layout>
    <StyledHero fluid={data.hero.edges[0].node.fluid}>
      <HeroText />
      <Social edges={data.allSocialJson.edges}/>
    </StyledHero>
    <Section id="about-me">
      <h1>About Me</h1>
      <Flex alignItems='center' flexDirection='column'>
        <Box px={2} width={[ 1 , 1 / 2 ]}>
          <p>Currently working as a Cloud Architect at <Link to='https://gdt.com'>GDT</Link> helping our customers with various problems related to doing business in the cloud. I am a serverless and modern application consultant and continously find ways to help my clients unlock value by switching from old school development methodology to a modern approach. Riding my mountain bike is what I do for fun.</p>
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
      <Flex alignItems='center' flexDirection='column'>
        <Box px={2} width={[ 1 , 1 / 2 ]}>
          <ContactForm />
        </Box>
      </Flex>
    </Section>
  </Layout>
)

export default IndexPage

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
    allLogos: allImageSharp(filter:{original:{src:{regex:"/logo/"}}}, sort:{fields:original___src}) {
      edges {
        node {
          id
          fixed(height: 80, grayscale:true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    hero: allImageSharp(filter:{original:{src:{regex:"/golden-gate/"}}}) {
      edges {
        node {
          id
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
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
`
