import React from 'react';
import styled, { css } from 'styled-components';
import Pattern from '../images/pattern.gif';

const Base = styled.a`
  font-size: 30pt;
  font-family: 'Allura', cursive;
  color: #fff;
  margin: 20px 0;
  width: fit-content;
  white-space: nowrap;
  transition-property: transform;
  transition-duration: 0.8s;
  &:hover {
    cursor: pointer;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: url(${Pattern});
    text-decoration: none;
  }
  ${(props) => props.dark
    && css`
      color: #444;
    `}
  ${(props) => props.block
    && css`
      display: block;
    `}
  ${(props) => props.small
    && css`
      font-size: 1em;
    `}
  ${(props) => props.big
    && css`
      font-size: 2em;
    `}
`;

function Name() {
  return <Base href="/">Aileen Roncoroni</Base>;
}

export default Name;
