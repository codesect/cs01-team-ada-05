import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from '@reach/router';

import HamburgerIcon from './Hamburger';
import Logo from './Logo';
import { Wrapper } from './GlobalStyles';

import useEscapeOutside from '../hooks/useEscapeOutside';
import useWindowWidth from '../hooks/useWindowWidth';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.header};
`;

const HeaderWrapper = styled(Wrapper)`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: space-between;
  }
`;

const HamburgerButton = styled.button`
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.logo};
  display: flex;
  height: 3rem;
  justify-content: center;
  padding: 0;
  position: absolute;
  right: 1rem;
  top: 0.8125rem;
  transition: color ${({ theme }) => theme.transitionEase};
  width: 3rem;

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.linkActive};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const LogoLink = styled(Link)`
  color: ${({ theme }) => theme.logo};
  display: flex;

  &:focus,
  &:hover {
    border-color: transparent;
  }
`;

const Menu = styled.ul`
  align-items: center;
  background-color: ${({ theme }) => theme.mobileMenu};
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  list-style: none;
  margin: 0;
  min-width: 12rem;
  padding: 1rem;
  position: absolute;
  top: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform ${({ theme }) => theme.transitionEase};
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: initial;
    transform: none;
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.mobileMenuText};
  display: block;
  padding: 0.75rem 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    color: inherit;
    display: inline;
    padding: 1.75rem 0.5rem calc(1.75rem - 1px);
  }
`;

function Header() {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const isSmallScreen = windowWidth <= 600;
  const menuTabindex = menuOpen || !isSmallScreen ? 0 : -1;

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(open => !open);

  useEscapeOutside(navRef, closeMenu);

  return (
    <StyledHeader>
      <HeaderWrapper>
        <LogoLink to="/">
          <Logo />
        </LogoLink>
        <nav ref={navRef}>
          <HamburgerButton
            aria-controls="menu"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={toggleMenu}
            open={menuOpen}
          >
            <HamburgerIcon />
          </HamburgerButton>
          <Menu aria-hidden={!menuOpen} id="menu" open={menuOpen}>
            <MenuItem>
              <MenuLink onClick={closeMenu} tabIndex={menuTabindex} to="/">
                Home
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={closeMenu} tabIndex={menuTabindex} to="/test">
                Public Polls
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={closeMenu} tabIndex={menuTabindex} to="/">
                Create Poll
              </MenuLink>
            </MenuItem>
          </Menu>
        </nav>
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
