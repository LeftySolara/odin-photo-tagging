import React, { useState } from 'react';
import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';

import { withFirebase } from '../Context';
import DropdownMenu from '../DropdownMenu';

/**
 * The "Where's Waldo" image that the user interacts with.
 */
const WaldoMapBase = (props) => {
  const { firebase } = props;

  const [imageURL, setImageURL] = useState();
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });

  const menuItems = [<li>Waldo</li>, <li>Hippo</li>];

  const storageRef = firebase.storage.ref();
  const imageRef = storageRef.child('public/waldo_map_1.jpg');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const updateDropdownPosition = (position) => {
    // Don't move the dropdown if it's already open.
    if (!showDropdown) {
      setDropdownPosition(position);
    }
  };

  imageRef.getDownloadURL().then((url) => {
    setImageURL(url);
  });

  return (
    <ReactCursorPosition
      activationInteractionMouse={INTERACTIONS.CLICK}
      onActivationChanged={toggleDropdown}
      onPositionChanged={({ position }) => updateDropdownPosition(position)}
      style={{ position: 'relative' }}
    >
      <img src={imageURL} alt="" />
      {showDropdown && (
        <DropdownMenu point={dropdownPosition} menuItems={menuItems} />
      )}
    </ReactCursorPosition>
  );
};

const WaldoMap = withFirebase(WaldoMapBase);

export default WaldoMap;
