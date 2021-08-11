import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const StyledHero = styled(Hero)`
  margin-top: -62px;
`;

const NotFoundPage = ({ data }) => (
  <Layout noMenu>
    Sorry, there's nothing here
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query notFoundQuery {
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
