import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';

import { COLORS } from '../constants';
import { VisuallyHidden } from './GlobalStyles';

function createButtonColors() {
  const styles = COLORS.map(
    (color, i) => `
      [data-reach-menu-item]:nth-child(${i + 1}) {
        background-color: ${color.value};
      }
    `
  );

  return css`
    ${styles.join('')}
  `;
}

const StyledMenuButton = styled(MenuButton)`
  background-color: ${({ color }) => color};
  height: 1.5rem;
  padding: 0;
  position: absolute;
  right: 1rem;
  top: calc(2.5rem + 1px);
  width: 1.5rem;

  &::before {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
    content: '';
    height: 1.5rem;
    left: -2.5rem;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 2rem;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: scale(0.25) translateY(-50%);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }`;

const StyledMenuList = styled(MenuList)`
  animation: ${slideDown} ${({ theme }) => theme.transitionEaseOut};

  &[data-reach-menu-items] {
    background-color: ${({ theme }) => theme.form};
    box-shadow: ${({ theme }) => theme.boxShadow.md};
    display: flex;
    flex-wrap: wrap;
    margin: -0.5rem;
    outline: none;
    width: 10rem;
  }

  [data-reach-menu-item] {
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
    height: 1.5rem;
    margin: 0.5rem;
    transition: opacity ${({ theme }) => theme.transitionEase},
      transform ${({ theme }) => theme.transitionEase};
    width: 1.5rem;

    &[data-selected] {
      border: 2px solid rgba(0, 0, 0, 0.2);
      opacity: 0.9;
      outline: none;
      transform: scale(1.25);
    }
  }

  ${createButtonColors()}
`;

function ColorPicker({ onSelect, selectedColor }) {
  return (
    <Menu>
      <StyledMenuButton color={selectedColor}>
        <VisuallyHidden>Colour options</VisuallyHidden>
      </StyledMenuButton>
      <StyledMenuList>
        {COLORS.map(color => (
          <MenuItem key={color.name} onSelect={() => onSelect(color)}>
            <VisuallyHidden>{color.name}</VisuallyHidden>
          </MenuItem>
        ))}
      </StyledMenuList>
    </Menu>
  );
}

ColorPicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
};

export default ColorPicker;
