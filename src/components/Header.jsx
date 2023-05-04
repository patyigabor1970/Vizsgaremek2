
import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <div className="header-container">
      <img
        className="header-background bg-fixed" style={{ backgroundImage: `url("src/images/bemutato.jpg")` }}/>
      <h1 className="header-title text-8xl text-center font-bold">PERFECT BODY <p>FITNESS CENTER</p></h1>
    </div>
  );
}

export default Header;
