import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import HeroText from '../components/HeroText';
import Social from '../components/Social';

const StyledHero = styled(Hero)`
  margin-top: -62px;
`;

const NotFoundPage = ({ data }) => (
  <Layout noMenu>
    <StyledHero fluid={data.hero.edges[0].node.fluid}>
      <HeroText text="404 Not Found" />
      <Social edges={data.allSocialJson.edges} />
    </StyledHero>
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query notFoundQuery {
    hero: allImageSharp(filter: { original: { src: { regex: "/golden-gate/" } } }) {
      edges {
        node {
          id
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
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
`;
