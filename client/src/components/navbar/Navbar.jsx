import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/hippo02.PNG';

const Menu = () => (
  <>
    <p>
      <a href="#Home">Home</a>
    </p>
    <p>
      <a href="#l">Product</a>
    </p>
    <p>
      <a href="#2">Who we are</a>
    </p>
    <p>
      <a href="#3">News</a>
    </p>
    <p>
      <a href="#4">Help</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="Hippo1_navbar">
      <div className="Hippo1_navbar-links">
        <div className="Hippo1_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="Hippo1_navbar-links_container">
          <Menu /> 
        </div>
      </div>
      <div className="Hippo1_navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="Hippo1_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="Hippo1_navbar-menu_container scale-up-center">
            <div className="Hippo1_navbar-menu_container-links"> 
              <Menu />
              <div className="Hippo1_navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
