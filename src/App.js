import React from 'react';
import { Link } from '@reach/router';

import { Wrapper } from './components/GlobalStyles';

function App() {
  return (
    <Wrapper>
      <h1>It works!</h1>
      <Link to="/test">Test page</Link>
    </Wrapper>
  );
}

export default App;
