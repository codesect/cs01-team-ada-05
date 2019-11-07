import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { FullSizeWrapper } from './components/GlobalStyles';

const Header = styled.header`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 12vmin;
  font-weight: 100;
  letter-spacing: 1vmin;
  line-height: 1.1;
  margin: 0 0 1rem;
`;

const Subtitle = styled.h2`
  border-top: 1px solid ${({ theme }) => theme.border};
  font-size: 6vmin;
  font-weight: 300;
  margin: 0 0 2rem;
`;

function App() {
  return (
    <FullSizeWrapper>
      <Header>
        <Title>Hang on Tight!</Title>
        <Subtitle>Something Awesome Is Coming</Subtitle>
      </Header>
      <Link to="/test">Test page</Link>
    </FullSizeWrapper>
  );
}

export default App;
