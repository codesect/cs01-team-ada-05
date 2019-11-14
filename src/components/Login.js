import React, { useState } from 'react';

import { Button, Form, FormTitle } from './Form.styles';
import { FullSizeWrapper } from './GlobalStyles';
import { firebase } from '../firebase';

function Login() {
  const [authError, setAuthError] = useState(null);

  async function handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (err) {
      setAuthError(err);
    }
  }

  return (
    <FullSizeWrapper>
      <Form>
        <FormTitle>Login below</FormTitle>
        <Button fullwidth onClick={handleSignIn} type="button">
          Sign in using Google
        </Button>
        {authError && (
          <div>
            <p>Sorry, there was a problem.</p>
            <p>
              <em>{authError.message}</em>
            </p>
            <p>Please, try again.</p>
          </div>
        )}
      </Form>
    </FullSizeWrapper>
  );
}

export default Login;
