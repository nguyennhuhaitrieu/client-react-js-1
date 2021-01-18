import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitterSquare, faMandalorian } from '@fortawesome/free-brands-svg-icons';


import '../../styles/footer.css';


const FooterForm = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3">
          <h6 className="footer__title">Download Our App</h6>
          <ul className="footer__app">
            <li><a href="#0"><img src="/images/app-store.svg" alt="" /></a></li>
            <li><a href="#0"><img src="/images/google-play.png" alt="" /></a></li>
          </ul>
        </div>

        <div className="col-6 col-sm-4 col-md-3">
          <h6 className="footer__title">Resources</h6>
          <ul className="footer__list">
            <li><a href="#0">About Us</a></li>
            <li><a href="#0">Pricing Plan</a></li>
            <li><a href="#0">Help</a></li>
          </ul>
        </div>

        <div className="col-6 col-sm-4 col-md-3">
          <h6 className="footer__title">Legal</h6>
          <ul className="footer__list">
            <li><a href="#0">Terms of Use</a></li>
            <li><a href="#0">Privacy Policy</a></li>
            <li><a href="#0">Security</a></li>
          </ul>
        </div>

        <div className="col-12 col-sm-4 col-md-3">
          <h6 className="footer__title">Contact</h6>
          <ul className="footer__list">
            <li><a href="tel:+18002345678"> (+84) 775-898786</a></li>
            <li><a href="mailto:support@moviego.com">vinhtran09121997@gmail.com</a></li>
          </ul>
          <ul className="footer__social">
            <li className="facebook"><a href="#0"><FontAwesomeIcon className="star-font icon ion-ios-star" icon={faFacebookF} /></a></li>
            <li className="instagram"><a href="#0"><FontAwesomeIcon className="star-font icon ion-ios-star" icon={faInstagram} /></a></li>
            <li className="twitter"><a href="#0"><FontAwesomeIcon className="star-font icon ion-ios-star" icon={faTwitterSquare} /></a></li>
            <li className="vk"><a href="#0"><FontAwesomeIcon className="star-font icon ion-ios-star" icon={faMandalorian} /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterForm;
