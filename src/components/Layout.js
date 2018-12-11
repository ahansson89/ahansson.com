import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import styledNormalize from 'styled-normalize'
import "typeface-pacifico"
import "typeface-raleway"
import "typeface-open-sans"

import Navbar from './Navbar'

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
    font-family: 'Open Sans';
  }

  p {
    margin-bottom: 64px;
    color: #666;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: #292929;
  }

`

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
`

const Footer = styled.footer`

  display: flex;
  flex-direction: column;
  width: 100vw;
  text-align:center;
  color:#fff;
  background-color:#000;
  img {
    margin-bottom: 0;
  }
`

const FooterText = styled.div`
  font-size:0.7em;
  padding: 3em;
`

const Layout = ({ children, noMenu }) => (
  <StaticQuery
    query={graphql`
      query layoutQuery {
        site {
          siteMetadata {
            title
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
      }
    `}
    render={data => (
      <>
        <Body>
          <GlobalStyle />
          <Helmet
            title={data.site.siteMetadata.title}
          >
            <html lang="en" />
            <meta name="description" content="I am a serverless and modern application consultant and continously find ways to help my clients unlock value by switching from old school development methodology to a modern approach!"/>
          </Helmet>
          <Navbar menu={data.allMenuJson.edges} noMenu={noMenu}/>
            {children}
          <Footer>
            <FooterText>
              ahansson.com
            </FooterText>
          </Footer>
        </Body>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
