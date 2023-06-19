import React from "react";
import "../styles/navbar.css";
const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='searchBar'>
        <input type='text' placeholder='Search...' className='searchInput' />
      </div>
    </nav>
  );
};

export default NavBar;
