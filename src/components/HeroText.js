import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

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
  const { text } = props;
  if (text) {
    return (
      <StyledTypist cursor={{ show: false }}>
        <strong>{text.split(' ').slice(0, 1)}</strong>
        <br />
        {text
          .split(' ')
          .slice(1)
          .join(' ')}
      </StyledTypist>
    );
  }
  return (
    <StyledTypist cursor={{ show: false }}>
      <strong key={1}>I</strong>
      <span key={2}> am a marine scientist-to-be</span>
      <Typist.Backspace count={28} delay={1000} />
      <span key={3}> am a MSc student at Utrecht University</span>
      <Typist.Backspace count={39} delay={1000} />
      <span key={4}> am based in Milan, Italy</span>
      <Typist.Backspace count={26} delay={1000} />
      <strong key={5}>Keep scrolling</strong>
      <span key={6}> to get to know me!</span>
    </StyledTypist>
  );
}

export default HeroText;
