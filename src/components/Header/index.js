import React from 'react';
import coverImage from '../../assets/cover/cover-image-4.png';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1 className="pl-5">JC-Renner</h1>
      <img src={coverImage} alt="pixelated digital background"></img>
      {props.children}
    </header>
  );
}

export default Header;
