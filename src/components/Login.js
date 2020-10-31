import React, { useState } from 'react';
import styled from 'styled-components';

import { Button, Form, FormTitle } from './Form.styles';
import { FullSizeWrapper } from './GlobalStyles';
import { firebase } from '../firebase';

const FacebookButton = styled(Button)`
  background-color: ${({ theme }) => theme.buttonFacebook};
  color: #fff;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.buttonFacebookActive};
  }
`;

function Login() {
  const [authError, setAuthError] = useState(null);

  async function handleGoogleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (err) {
      setAuthError(err);
    }
  }

  async function handleFacebookSignIn() {
    const provider = new firebase.auth.FacebookAuthProvider();
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
        <Button fullwidth onClick={handleGoogleSignIn} type="button">
          Sign in using Google
        </Button>
        <FacebookButton fullwidth onClick={handleFacebookSignIn} type="button">
          Sign in using Facebook
        </FacebookButton>
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
