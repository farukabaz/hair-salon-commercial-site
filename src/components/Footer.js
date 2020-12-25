import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import ContactForm from './ContactForm'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-heading'>
        Rezervišite termin na vrijeme
      </div>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <p>Preko mobitela:</p>
            <a>+387 61 184 757</a>
            <p>Preko maila:</p>
            <ContactForm/>
          </div>
          <div className='footer-link-items'>
            <p>Ili nas posjetite</p>
            <a>Ulica Edhema Mulabdića 2, 71000 Sarajevo</a>
            <a
            href='https://www.google.com/maps/place/Model+Madness+Fashion/@43.8600418,18.4263345,19.17z/data=!4m18!1m12!4m11!1m3!2m2!1d18.4265015!2d43.8599829!1m6!1m2!1s0x4758c8cf27924611:0x5c29731ac6e3dbfa!2sEdhema+Mulabdi%C4%87a+2,+Sarajevo+71000!2m2!1d18.4265025!2d43.8599822!3m4!1s0x4758c923e25cacc5:0x5fa6c420e3ae2095!8m2!3d43.8599822!4d18.4265025'
            className='location-icon'>
              <GoLocation/>
            </a>
            <p>Radno vrijeme:</p>
            <a>Svakim danom od</a>
            <a>09:00 - 17:00</a>
          </div>
        </div>
      </div>
      
      <div className='media-header'>
        <p>ZAPRATITE NAS NA</p>
      </div>
      <div className='footer-link-wrapper'>
          <div class='footer-link-media-items'>
            <a 
            href='https://www.facebook.com/FrizerskiSalonPerfetto/'
            className='media-icons'>
              <a>Facebook</a>
              <FaFacebookF/>
            </a>
          </div>
          <div className='footer-link-media-items'>
            <a
            href='https://www.instagram.com/perfetto_perfettoo/?igshid=a60l93mj88ic&fbclid=IwAR0cia5meeXGqoNOFYUs9CF23wbnUGeYFuAlkWdyH4gM0rMxDEaj78ksiRQ'
            className='media-icons'>
              <a>Instagram</a>
              <FaInstagram/>
            </a>
          </div>
        </div>

      <Link to='/' className='social-logo'>
        Perfetto
      </Link>

    </div>
  );
}

export default Footer;
