import React from 'react';
import styled from 'styled-components';

import media from '../utils/style';

const Item = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 2.5em;
`;

const Program = styled.h3`
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

const School = styled.div`
  display: block;
  clear: both;
  text-align: left;
  ${media.xs`
    text-align:center;
  `}
`;

const Description = styled.div`
  display: block;
  clear: both;
  text-align: left;
  margin: 1rem 0;
  font-size: 13pt;
  width: 85%;
  ${media.xs`
    text-align:center;
    width: 100%;
  `}
`;

function Educations(props) {
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
          <Program>{item.program}</Program>
          <School><strong>{item.school}</strong> - <em>{item.location}</em></School>
          <Description>{item.description}</Description>
        </Item>
      ))}
    </>
  );
}

export default Educations;
