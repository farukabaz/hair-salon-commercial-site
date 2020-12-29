import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img 
            className='logo'
            src='/images/logo.jpg'
            />
            Perfetto
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Početna
              </Link>
            </li>

            <li className='nav-item'>
              <a href='https://www.google.com/maps/place/Model+Madness+Fashion/@43.8600418,18.4263345,19.17z/data=!4m18!1m12!4m11!1m3!2m2!1d18.4265015!2d43.8599829!1m6!1m2!1s0x4758c8cf27924611:0x5c29731ac6e3dbfa!2sEdhema+Mulabdi%C4%87a+2,+Sarajevo+71000!2m2!1d18.4265025!2d43.8599822!3m4!1s0x4758c923e25cacc5:0x5fa6c420e3ae2095!8m2!3d43.8599822!4d18.4265025' className='nav-links' onClick={closeMobileMenu}>
                Lokacija
              </a>
            </li>

            <li className='nav-item'>
              <Link to='/contac' className='nav-links' onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li>

          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
