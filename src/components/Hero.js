import React from 'react';
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

const Video = styled.video`
  display: block;
  width: 100%;
  height: 100%;

  ${media.md`
    width: 1250px;
  `}
`;

const Content = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.11);
    border-radius: 5px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;


function BgVideo(props) {
  const { videos, poster } = props;
  return (
    <Content>
      <Video autoPlay="autoplay" loop="loop" muted poster={poster} preload="none">
          <source src={videos.first.path} type="video/webm" />
          <source src={videos.second.path} type="video/mp4" />
          Your browser does not support the video tag.
      </Video>
    </Content>
  );
}

function Hero(props) {
  const { children, videos } = props;
  return (
    <Container>
      <BgVideo videos={videos} />
      <Overlay>{children}</Overlay>
    </Container>
  );
}

export default Hero;
