import React from 'react';

import TestComponent from './components/TestComponent';

function App() {
  return (
    <div
      style={{
        color: '#353535',
        margin: '0 auto',
        maxWidth: '600px',
        padding: '1rem',
      }}
    >
      <h1>Poll App</h1>
      <TestComponent />
    </div>
  );
}

export default App;
