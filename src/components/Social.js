import React from 'react';
import styled from 'styled-components';
import { Envelope as MailIcon } from 'styled-icons/fa-solid/Envelope.cjs';
import { LinkedinIn as LinkedinIcon } from 'styled-icons/fa-brands/LinkedinIn.cjs';
import { Twitter as TwitterIcon } from 'styled-icons/fa-brands/Twitter.cjs';
import scrollToElement from 'scroll-to-element';
import Link from './Link';
import ButtonLink from './ButtonLink';

const IconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0 auto;
  svg {
    color: white;
    width: 1em;
    height: 1em;
    padding: 1.5em;
  }

  ${({ relative }) => relative && `
    position: relative;
  `}
`;

function Social(props) {
  const { edges } = props;
  const linkedin = edges.find((o) => o.node.type === 'linkedin');
  const twitter = edges.find((o) => o.node.type === 'twitter');
  const mail = edges.find((o) => o.node.type === 'mail');

  return (
    <IconWrapper relative={props.relative}>
      <Link aria-label={linkedin.node.type} to={linkedin.node.url}>
        <LinkedinIcon />
      </Link>
      <Link aria-label={twitter.node.type} to={twitter.node.url}>
        <TwitterIcon />
      </Link>
      <ButtonLink
        aria-label={mail.node.type}
        onClick={() => {
          scrollToElement(mail.node.url);
        }}
      >
        <MailIcon />
      </ButtonLink>
    </IconWrapper>
  );
}

export default Social;
