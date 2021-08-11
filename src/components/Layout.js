import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styledNormalize from 'styled-normalize';
import Social from '../components/Social';
import 'typeface-pacifico';
import 'typeface-raleway';
import 'typeface-open-sans';

import Navbar from './Navbar';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${styledNormalize}

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  body, input, select, textarea {
    font-size: 14pt;
    line-height: 1.5;
    font-family: 'Oxygen';
  }

  p {
    margin-bottom: 64px;
    color: #666;
    font-family: 'Oxygen';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Prompt';
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: #292929;
  }

  @media only screen and (max-width: 800px) {
    .parallax-img {
      left: 0% !important;
    }
  }

  em {
    font-style: italic;
  }


`;

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100vw;
  text-align: center;
  color: #fff;
  background-color: rgb(77, 172, 191);
  img {
    margin-bottom: 0;
  }
`;

const FooterText = styled.div`
  font-size: 0.7em;
  padding: 3em;
`;

const Layout = ({ children, noMenu }) => (
  <StaticQuery
    query={graphql`
      query layoutQuery {
        site {
          siteMetadata {
            title
            name
            url
          }
        }
        allMenuJson {
          edges {
            node {
              title
              link
              id
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
    `}
    render={(data) => (
      <>
        <Body>
          <GlobalStyle />
          <Helmet title={data.site.siteMetadata.name}>
            <html lang="en" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,200;0,300;1,300&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap" rel="stylesheet"></link>
            <meta
              name="description"
              content="After graduating in Biological Sciences I am currently doing 
              my master's degree in Marine Sciences to pursue my dream of becoming a marine biologist. 
              My research interests are wide and include marine biology and ecology, 
              marine conservation and the effects of climate change on the marine environment."
            />
          </Helmet>
          <Navbar menu={data.allMenuJson.edges} noMenu={noMenu} />
          {children}
          <Footer>
            <Social edges={data.allSocialJson.edges} relative={true}/>
            <FooterText>&copy; Copyright {new Date().getFullYear()} {data.site.siteMetadata.name} - {data.site.siteMetadata.url}</FooterText>
          </Footer>
        </Body>
      </>
    )}
  />
);

export default Layout;
