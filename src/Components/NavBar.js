import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../App.css";
import logo from '../logo.svg';


const ACTIVENAV={
  color : '#0000FF'
}

function NavBar(props) {

  let location = useLocation();

        return (  
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="Nav_container">
            <div>
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            </div>

            <div className="Nav__right">
              <ul className="nav nav-pills">
                <li className="nav-li">
                  <Link to="/" style={location?.pathname=="/" ? ACTIVENAV : null }>Jobs</Link>
                </li>
                <li className="nav-li">
                  <Link to="/inbox" style={location?.pathname=="/inbox" ? ACTIVENAV : null }>Inbox</Link>
                </li>
                <li className="nav-li">
                  <Link to="/calender" style={location?.pathname=="/calender" ? ACTIVENAV : null }>Calender</Link>
                </li>
                <li className="nav-li">
                  <Link to="/careerpage" style={location?.pathname=="/careerpage" ? ACTIVENAV : null }>Career Page</Link>
                </li>
                <li className="nav-li">
                  <Link to="/reports" style={location?.pathname=="/reports" ? ACTIVENAV : null }>Reports</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default NavBar