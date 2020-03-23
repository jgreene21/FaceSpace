import React from 'react';
import { NavLink, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';
import { AccountConsumer } from '../providers/AccountProvider';
import styled from 'styled-components';

const Navbar = () => (
  <AccountConsumer>
    { value => (
  <StyledMenu as={Menu}>
    <NavLink to= '/'>
      <Menu.Item>
        Home
      </Menu.Item>
      </NavLink>
    <NavLink to='/account/profile'>
      <Menu.Item>
        Members
      </Menu.Item>
    </NavLink>
  </StyledMenu>
  )}
  </AccountConsumer>
)

const StyledMenu = styled.div`
  text: blue
  transition: background 0.2s ease;
  cursor: pointer;
  &:hover {
    background: #D2D3D3;
    transition: background 0.2s ease;
  }
`;

export default Navbar; 