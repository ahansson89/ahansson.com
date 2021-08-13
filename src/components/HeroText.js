import React from 'react';
import styled from 'styled-components';
import Typist from 'react-text-typist';

import media from '../utils/style';

const StyledTypist = styled(Typist)`
  color: #000;
  letter-spacing: 17px;
  margin: 0 auto;
  font-size: 72px;
  line-height: 80px;
  font-weight: 200;
  text-transform: uppercase;
  font-family: 'Prompt', sans-serif;
  ${media.xs`
    font-size:38px;
    line-height: 44px;
    letter-spacing: 8px;
  `}

  color: #fff;

  strong {
    font-weight: 800;
  }
`;

function HeroText(props) {
  return (
    <StyledTypist 
    sentences={['I am a marine scientist-to-be', 
                'I am a MSc student at Utrecht University', 
                'I am based in Milan, Italy', 
                'Keep scrolling to get to know me!']} 
    loop={true}>
    </StyledTypist>
  );
}

export default HeroText;
