import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/recipeinput">Create New Recipe</NavLink>
    </div>
  );
};

export default NavBar;