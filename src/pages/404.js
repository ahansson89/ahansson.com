import React from 'react'
import Layout from '../components/layout'

import {graphql} from 'gatsby'
import styled, {css} from 'styled-components'
import Hero from '../components/Hero'

import { media } from '../utils/style'

import HeroText from '../components/heroText'
import Social from '../components/social'

const StyledHero = styled(Hero)`
  margin-top:-62px;
  &>div:nth-child(2) {
    width:80%;
    margin:0 auto;
  }
`

const NotFoundPage = ({data}) => (
  <Layout>
    <StyledHero fluid={data.hero.edges[0].node.fluid}>
      <HeroText text="404 Not Found"/>
      <Social edges={data.allSocialJson.edges}/>
    </StyledHero>
  </Layout>
)

export default NotFoundPage

export const pageQuery = graphql`
  query notFoundQuery {
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
    allSocialJson {
      edges {
        node {
          url
          type
        }
      }
    }
  }
`
