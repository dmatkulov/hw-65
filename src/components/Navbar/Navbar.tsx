import React from 'react';
import NavLinks from "../NavLinks/NavLinks";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Static pages</span>
        <NavLinks/>
      </div>
    </nav>
  );
};

export default Navbar;