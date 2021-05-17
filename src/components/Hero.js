import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import media from '../utils/style';

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const Overlay = styled.div`
  width: 80%;
  text-align: center;
  margin: 0px auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${(props) => props.height || '100vh'};

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${(props) => props.fit || 'cover'} !important;
    object-position: ${(props) => props.position || '50% 50%'} !important;
    font-family: 'object-fit: ${(props) => props.fit || 'cover'} !important; object-position: ${(
  props,
) => props.position || '50% 50%'} !important;'
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;

  ${media.md`
    width: 1250px;
  `}
`;


function BgVideo(props) {
  const { videos, poster } = props;
  return (
    <Video autoPlay="autoplay" loop="loop" muted poster={poster} >
        <source src={videos.first.path} type="video/webm" />
        <source src={videos.second.path} type="video/mp4" />
        Your browser does not support the video tag.
    </Video>
  );
}

function Hero(props) {
  const { children, videos } = props;
  return (
    <Container>
      {/* <BgImage fluid={fluid} /> */}
      <BgVideo videos={videos} />
      <Overlay>{children}</Overlay>
    </Container>
  );
}

export default Hero;
