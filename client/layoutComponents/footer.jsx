import React from 'react';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 vcenter">
          Created with Meteor & React
        </div>
        <div className="col-md-4 vcenter text-center">
          <ul className="list-inline social-buttons">
            <li><a href="https://twitter.com/Steven_Scaffidi" target="_blank"><i className="fa fa-twitter"></i></a>
            </li>
            <li><a href="https://github.com/sscaff1" target="_blank"><i className="fa fa-github"></i></a>
            </li>
            <li><a href="https://www.linkedin.com/in/sscaffid" target="_blank"><i className="fa fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 text-right vcenter">
          Created by Steven Scaffidi
        </div>
      </div>
    </div>
  </footer>
);
