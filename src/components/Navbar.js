import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import scrollToElement from 'scroll-to-element';
import ButtonLink from './ButtonLink';

import Name from './Name';

import media from '../utils/style';

const Base = styled.div`
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  z-index: 10000;
  position: absolute;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
`;

const MenuBox = styled(Box)`
  ${media.xs`
    display: none;
  `}
`;

const NameBox = styled(Box)`
  ${media.xs`
    text-align:center;
  `}
`;

const MenuItem = styled(ButtonLink)`
  font-family: 'Raleway';
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-right: 32px;
  height: 62px;
  font-size: 11px;
  float: right;
  position: relative;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
  ${media.sm`
     margin-right: 15px;
   `}
`;

function NavBar(props) {
  const { noMenu, menu } = props;
  return (
    <Base>
      <Flex>
        <NameBox px={2} width={[1, 1 / 3, 2 / 6]}>
          <Name />
        </NameBox>
        {!noMenu ? (
          <MenuBox px={2} width={[0, 2 / 3, 4 / 6]}>
            <ul>
              {menu.map(({ node: item }) => (
                <li key={item.id}>
                  <MenuItem
                    onClick={() => {
                      scrollToElement(item.link);
                    }}
                    aria-label={item.title}
                  >
                    {item.title}
                  </MenuItem>
                </li>
              ))}
            </ul>
          </MenuBox>
        ) : (
          <></>
        )}
      </Flex>
    </Base>
  );
}
export default NavBar;
