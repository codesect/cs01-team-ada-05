import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { Wrapper } from './components/GlobalStyles';

const FullSizeWrapper = styled(Wrapper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 7.8125rem);
`;

function App() {
  return (
    <FullSizeWrapper>
      <h1>It works!</h1>
      <Link to="/test">Test page</Link>
    </FullSizeWrapper>
  );
}

export default App;
