import React from 'react'
import styled from 'styled-components'
import {Flex, Box} from 'grid-styled'
import scrollToElement from 'scroll-to-element'

import Name from './name'

import { media } from '../utils/style'

const Base = styled.div `
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  z-index:10000;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }

`

const MenuBox = styled(Box)`
  ${ media.xs`
    display: none;
  ` }
`

const NameBox = styled(Box)`
  ${ media.xs`
    text-align:center;
  ` }
`

const MenuItem = styled.button`
   background:none!important;
   color:inherit;
   border:none;
   padding:0!important;
   font: inherit;
   cursor: pointer;
   font-family: 'Raleway';
   text-transform: uppercase;
   font-weight: 600;
   letter-spacing: 1px;
   margin-right: 32px;
   &:active, &:focus { outline: none; }
   height: 62px;
   font-size: 11px;
   float: right;
   position: relative;
   color: #fff;
   text-decoration: none;
   cursor: pointer;
   transition: opacity .3s ease;
   ${ media.sm`
     margin-right: 15px;
   ` }
`

const NavBar = (props) => (
  <Base>
    <Flex>
      <NameBox px={2} width={[
          1,
          1 / 3,
          2 / 6
        ]}>
        <Name/>
      </NameBox>
      <MenuBox px={2} width={[
          0,
          2 / 3,
          4 / 6
        ]}>
        <ul>
          {props.menu.map(({node: item}) => (
            <li key={item.id}>
              <MenuItem onClick={() => {scrollToElement(item.link)}}>{item.title}</MenuItem>
            </li>
          ))}
        </ul>
      </MenuBox>
    </Flex>
  </Base>
)




export default NavBar
