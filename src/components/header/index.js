import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";

function header() {
  return (
    <nav className='navbar flex container-fluid header'>
      <div className=' justify-between mx-auto cont' >
        <span className="navbar-brand navbrand">Heil Park</span>
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="projectgallery"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
        <div>
        <span className="navbar-brand">
            <NavLink
              to="contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default header;
