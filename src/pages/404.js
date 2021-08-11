import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';


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
