import styled from 'styled-components/macro';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.buttonText};
  font-size: 1.25rem;
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  transition: background-color ${({ theme }) => theme.transitionEase};
  width: ${({ fullwidth }) => (fullwidth ? '100%' : 'auto')};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.buttonActive};
  }
`;

export const Hint = styled.p`
  color: ${({ error, theme }) => (error ? theme.textError : 'inherit')};
  font-size: 0.75rem;
  font-style: italic;
  margin: 0;
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.form};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  margin: 0 auto;
  max-width: 30rem;
  padding: 1.5rem;
  width: 100%;
`;

export const FormTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin: 0 0 1rem;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  margin-top: 0.5rem;

  & input,
  & + input {
    margin-top: 0.25rem;
  }
`;

export const Input = styled.input`
  border-color: ${({ error, theme }) =>
    error ? theme.borderError : theme.border};
  margin-bottom: 0.25rem;
  width: 100%;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.inputActive};
    border-color: ${({ theme }) => theme.borderActive};
  }
`;
