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

  const storageRef = firebase.storage.ref();
  const imageRef = storageRef.child('public/waldo_map_1.jpg');

  const targetCharacters = ['Waldo', 'Hippo'];

<<<<<<< HEAD
  const menuItems = targetCharacters.map((name) => ({
    name,
    onClick: () => {
      alert(name);
      setShowDropdown(false);
    },
  }));
=======
  const menuItems = targetCharacters.map((name) => (
    <button type="button" onClick={() => alert(name)}>
      {name}
    </button>
  ));
>>>>>>> fbea80c5cfd18e4f790a766e78fdf0750e3b6836

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
    <div>
      <ReactCursorPosition
        activationInteractionMouse={INTERACTIONS.CLICK}
        onActivationChanged={toggleDropdown}
        onPositionChanged={({ position }) => updateDropdownPosition(position)}
        style={{ position: 'relative' }}
      >
        <img src={imageURL} alt="" />
      </ReactCursorPosition>

      {showDropdown && (
        <DropdownMenu point={dropdownPosition} menuItems={menuItems} />
      )}
    </div>
  );
};

const WaldoMap = withFirebase(WaldoMapBase);

export default WaldoMap;
