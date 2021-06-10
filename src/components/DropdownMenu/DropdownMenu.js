import React from 'react';
import styled from 'styled-components';

const StyledDropdownMenu = styled.ul`
  position: absolute;
  left: ${(props) => props.point.x}px;
  top: ${(props) => props.point.y}px;
  list-style: none;
  background-color: white;
  color: black;
`;

/**
 * A basic list to be used in menus.
 *
 * @param {Object} props Props to pass to the component.
 * @param {Object} props.point The position on the page to display the menu.
 * @param {Integer} props.point.x The x-coordinate of the menu's position.
 * @param {integer} props.point.y The y-coordinate of the menu's position.
 * @param {Array} props.menuItems A list of items to display in the menu.
 */
const DropdownMenu = (props) => {
  const { point, menuItems } = props;

  return <StyledDropdownMenu point={point}>{menuItems}</StyledDropdownMenu>;
};

export default DropdownMenu;
