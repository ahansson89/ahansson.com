import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

import media from '../utils/style';

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  margin: 0 auto;
  font-size: 72px;
  line-height: 80px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: 'Raleway';
  ${media.xs`
    font-size:38px;
    line-height: 44px;
    letter-spacing: 8px;
  `}
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
      <span key={2}> Create Engaging Digital Media Experiences</span>
      <Typist.Backspace count={38} delay={1000} />
      <span key={3}> Innovate in Streaming and Content Distribution</span>
      <Typist.Backspace count={42} delay={1000} />
      <span key={4}> Have Expertise in Cloud Solutions for M&E</span>
      <Typist.Backspace count={40} delay={1000} />
      <span key={5}> Understand the Dynamics of Entertainment Tech</span>
      <Typist.Delay ms={300} />
      <span key={6}>.</span>
      <Typist.Delay ms={600} />
      <span key={7}>.</span>
      <Typist.Delay ms={900} />
      <span key={8}>.</span>
      <Typist.Backspace count={47} delay={10} />
      <strong key={9}>But Mainly, I</strong>
      <span key={10}> Drive Innovation in Media & Entertainment</span>
    </StyledTypist>
  );
}

export default HeroText;
