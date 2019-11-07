import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { db } from '../firebase';
import { Wrapper } from './GlobalStyles';

const FullSizeWrapper = styled(Wrapper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 7.8125rem);
`;

function TestComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = db.doc('test/testData').onSnapshot(snapshot => {
      setData({
        ...snapshot.data(),
        id: snapshot.id,
      });

      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <FullSizeWrapper>
      <h2>Data Coming from Firebase Cloud Firestore</h2>
      {isLoading && (
        <div
          style={{
            backgroundColor: '#f3f8ff',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          Loading data from Firebase...
        </div>
      )}

      {data && (
        <pre
          style={{
            backgroundColor: '#2d3545',
            borderRadius: '0.375rem',
            boxShadow: '0 .75rem 3rem 0 rgba(0, 0, 0, 0.5)',
            color: '#d1d8e3',
            fontFamily:
              'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
            fontSize: '14px',
            maxWidth: '100%',
            overflowX: 'auto',
            padding: '1rem',
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </FullSizeWrapper>
  );
}

export default TestComponent;
