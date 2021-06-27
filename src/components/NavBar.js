import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar" >
      <NavLink to="/" style={{paddingRight: '20px', paddingLeft: '20px'}} >Home</NavLink>
      <NavLink to="/recipes" style={{paddingRight: '20px'}}>Recipes</NavLink>
      <NavLink to="/recipeinput"style={{paddingRight: '20px'}}>Create New Recipe</NavLink>
    </div>
  );
};

export default NavBar;