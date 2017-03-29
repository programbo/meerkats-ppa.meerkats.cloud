import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Anchor = styled.a`
  margin: 5px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const Nav = styled.nav`
  padding: 5px;
  background-color: #eee;
`;

export default () => (
  <Nav>
    <Link prefetch href="/"><Anchor>Home</Anchor></Link>
    <Link prefetch href="/about"><Anchor>About</Anchor></Link>
  </Nav>
);
