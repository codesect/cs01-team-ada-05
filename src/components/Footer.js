import React from 'react';
import styled from 'styled-components/macro';

import { Wrapper } from './GlobalStyles';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.footerText};
  font-size: 0.75rem;
  text-align: center;

  p {
    margin: 0;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <p>Made by Zsolt Meszaros and Santhosh Balaguru for CodeSect</p>
      </Wrapper>
    </StyledFooter>
  );
}

export default Footer;
