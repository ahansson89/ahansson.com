import React from 'react';
import styled from 'styled-components';

import media from '../utils/style';

const Item = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 1.5em;
`;

const Company = styled.h3`
  display: block;
  letter-spacing: 2px;
  font-weight: 700;
  float: left;
  ${media.xs`
    float:none;
  `}
`;

const Duration = styled.div`
  display: block;
  float: right;
  clear: both;
  ${media.xs`
    float:none;
  `}
`;

const Position = styled.div`
  display: block;
  clear: both;
  text-align: left;
  ${media.xs`
    text-align: center;
  `}
`;

function Experience(props) {
  const { edges } = props;
  return (
    <>
      {edges.map(({ node: item }) => (
        <Item key={item.id}>
          <Duration>
            {item.start}
            {' - '}
            {item.end}
          </Duration>
          <Company>{item.company}</Company>
          <Position>{item.title}</Position>
        </Item>
      ))}
    </>
  );
}

export default Experience;
