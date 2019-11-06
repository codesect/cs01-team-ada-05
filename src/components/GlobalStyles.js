import styled, { createGlobalStyle } from 'styled-components/macro';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 1rem;
  position: relative;
`;

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
  }

  button, input {
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    padding: 0.75rem 1rem;
  }

  button {
    border-color: transparent;
    cursor: pointer;
  }

  input {
    transition: border-color ${({ theme }) => theme.transitionEase};
  }

  button:focus,
  input:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.outline};
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  svg {
    fill: currentColor;
  }

  a {
    border-bottom: 1px solid transparent;
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitionEase}, border ${({
  theme,
}) => theme.transitionEase};

    &:focus,
    &:hover {
      border-color: currentColor;
      color: ${({ theme }) => theme.linkActive};
    }
  }
`;
