import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">React Chat Room in Meteor</a>
      </div>
    </div>
  </nav>
);

export const Header = () => (
  <div className="header-container">
    <Navbar />
  </div>
);
