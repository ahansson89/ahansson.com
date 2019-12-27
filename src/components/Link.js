import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, to }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return <GatsbyLink to={to}>{children}</GatsbyLink>;
  }
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
