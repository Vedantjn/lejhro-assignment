import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image
import hamburgerIcon from '../assets/hamburger.svg'; // Import the SVG icon

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#dd3b30', color: 'white' }}>
      <header className="d-flex flex-wrap justify-content-center py-5 "> 
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" style={{ color: 'white', paddingLeft: '170px' }}> {/* Increased left padding */}
          <img src={logo} alt="Logo" className="me-3" style={{ height: '32px', paddingRight : '25px' }} /> 
          <button type="button" className="btn btn-outline-light" style={{ padding: '1rem 2rem' }}>PROGRAMS</button> {/* Adjusted padding */}
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item me-md-4"><a href="#" className="nav-link" style={{ color: 'white', fontSize: '1.2rem' }}>Refer and Earn</a></li> {/* Adjusted margin */}
          <li className="nav-item me-md-4"><a href="#" className="nav-link" style={{ color: 'white', fontSize: '1.2rem' }}>Free Masterclass</a></li> {/* Adjusted margin */}
          <li className="nav-item me-md-4"><a href="#" className="nav-link" style={{ color: 'white', fontSize: '1.2rem' }}>Enterprise</a></li> {/* Adjusted margin */}
          <li className="nav-item"><a href="#" className="nav-link" style={{ color: 'white', paddingRight: '200px' }}><img src={hamburgerIcon} alt="Menu" width="40px" height="40px" /></a></li> {/* Decreased right padding */}
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
