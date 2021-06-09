import React, { useState } from 'react';
import { withFirebase } from '../Context';

const WaldoMapBase = (props) => {
  const { firebase } = props;
  const [imageURL, setImageURL] = useState();

  const storageRef = firebase.storage.ref();
  const imageRef = storageRef.child('public/waldo_map_1.jpg');

  imageRef.getDownloadURL().then((url) => {
    setImageURL(url);
  });

  return <img src={imageURL} alt="" />;
};

const WaldoMap = withFirebase(WaldoMapBase);

export default WaldoMap;
