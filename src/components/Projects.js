import React from 'react';
import styled from 'styled-components';


import media from '../utils/style';

const Item = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100%;

  ${media.xs`
    width: 90%;
  `}
`;

const Grid = styled.section`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    margin: 0 auto;
    max-width: 1150px;
    align-items: flex-start;

    ${media.xs`
        grid-template-columns: 1fr;
    `}
`;

const Title = styled.h3`
  display: block;
  letter-spacing: 2px;
  font-weight: 700;
  float: left;
  height: 3rem;
  ${media.xs`
    float:none;
    height: auto;
  `}
`;


const Description = styled.div`
  display: block;
  clear: both;
  text-align: center;
  margin: 1rem 0;
`;

const Video = styled.iframe`
border-radius: .35em;
margin: 2rem 0;
`;


function Projects(props) {
  const { edges } = props;

  return (
    <Grid>
      {edges.map(({ node: item }) => (
        <Item key={item.id}>
            <Video 
                src={item.link} 
                width="360" 
                height="200" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen" 
                allowfullscreen/>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
        </Item>
      ))}
    </Grid>
  );
}

export default Projects;
