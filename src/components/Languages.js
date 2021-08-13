import React from 'react';
import styled from 'styled-components';
import Flag from "react-world-flags";

import media from '../utils/style';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const Grid = styled.section`
    display: grid;
    padding-top: 2rem;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    margin: 0 20%;

    ${media.md`
        grid-template-columns: 1fr 1fr;
    `}
`;

const Language = styled.h3`
  display: block;
  letter-spacing: 2px;
  font-weight: 700;
  float: left;
  ${media.xs`
    float:none;
  `}
`;

const Level = styled.p`
display: block;
letter-spacing: 2px;
font-weight: 700;
float: left;
${media.xs`
  float:none;
`}
`;

function Languages(props) {
  const { edges } = props;

  return (
    <Grid>
      {edges.map(({ node: item }) => (
        <Item key={item.id}>
            <Flag code={item.code} height={48} style={{display: "block", margin: "1rem 0", borderRadius: ".35rem"}}/>
            <Language>{item.name}</Language>
            <Level>{item.level}</Level>
        </Item>
      ))}
    </Grid>
  );
}

export default Languages;
