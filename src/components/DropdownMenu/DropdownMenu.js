import React from 'react';
import styled from 'styled-components';

const StyledDropdownMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  margin: 0px;
  padding: 0px;
  left: ${(props) => props.point.x}px;
  top: ${(props) => props.point.y}px;
  list-style: none;
  background-color: rgba(87, 117, 144, 0);
  border: 1px solid rgba(87, 117, 144, 0);
  border-radius: 7px;
`;

const StyledButton = styled.button`
  width: 100%;
  margin-top: 3px;
  background-color: #f94144;
  color: white;
  border: 3px solid white;
  border-radius: 10px;
  font-weight: bold;
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

<<<<<<< HEAD
  const buttons = menuItems.map((item) => {
    return (
      <StyledButton type="button" onClick={item.onClick}>
        {item.name}
      </StyledButton>
    );
  });

  return (
    <div>
      <StyledDropdownMenu point={point}>{buttons}</StyledDropdownMenu>
=======
  return (
    <div>
      <StyledDropdownMenu point={point}>{menuItems}</StyledDropdownMenu>
>>>>>>> fbea80c5cfd18e4f790a766e78fdf0750e3b6836
    </div>
  );
};

export default DropdownMenu;
