import React, { useEffect, useState } from 'react';

import { db } from '../firebase';

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
    <>
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
            backgroundColor: '#2e343f',
            borderRadius: '0.375rem',
            boxShadow: '0 .75rem 3rem 0 rgba(0, 0, 0, 0.5)',
            color: '#d1d8e3',
            fontFamily:
              'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
            fontSize: '14px',
            padding: '1rem',
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </>
  );
}

export default TestComponent;
