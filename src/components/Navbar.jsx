import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg" id='Navbar'>
      <div className="container-fluid">
        <div className="custom-navbar">
          <div className='title-container'>
            <h5 className="title1">~the~</h5>
            <Link to="/" className="title2" style={{ textDecoration: "none" }}>
              FASHION
            </Link>
            <h5 className="title3">STORE</h5>
          </div>
        </div>        

       
        <div className="items text-center" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/men" className="nav-link text-white">MEN</Link>
          </li>
          <li className="nav-item">
            <Link to="/women" className="nav-link text-white">WOMEN</Link>
          </li>
          <li className="nav-item">
            <Link to="/footwear" className="nav-link text-white">FOOTWEAR</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link text-white">CART</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle dr" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              SETTINGS
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/Profile">My Profile</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/notifications">Notifications</Link></li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <Link className="dropdown-item" to="/login">Log out</Link>
              </li>
            </ul>
          </li>

        </ul>
        </div>
        
         
      </div>
    </nav>
  );
}

export default Navbar;