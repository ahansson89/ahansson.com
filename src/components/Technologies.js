import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import { media } from '../utils/style'

const Wrapper = styled.div`
    width: 60%;
    margin: 0 auto;
    ${ media.xs`
      width:100%;
    ` }
`

const Item = styled.div`
  padding: 1.5em;
  ${ media.xs`
    padding:1em;
  ` }
  display:inline-block;
`

const Name = styled.h3`
  display:block;
  letter-spacing: 2px;
  font-weight: 700;
  float: left;
`

const Duration = styled.div`
  display:block;
  float: right;
  clear:both;
`

const Authority = styled.div`
  display:block;
  clear:both;
  text-align: left;
`

class Experience extends React.Component {
  render() {
    const { edges } = this.props
    return (
      <Wrapper>
        {edges.map(({node: item}) => (
          <Item key={item.id}>
            <Img fixed={item.fixed} />
          </Item>
        ))}
      </Wrapper>
    )
  }
}

export default Experience
