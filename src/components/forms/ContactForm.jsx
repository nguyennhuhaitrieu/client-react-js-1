// @flow
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../../styles/contact.css';

type Props = {
  changeModalSelected: Function;
}
const ContactForm = (props: Props) => {
  const { changeModalSelected } = props;
  return (
    <div className="container-contact100">
      <div
        className="contact100-map" id="google_map" data-map-x="40.722047" data-map-y="-73.986422"
        data-pin="images/icons/map-marker.png" data-scrollwhell="0" data-draggable="1"
      />

      <div className="wrap-contact100">
        <button type="button" className="contact100-btn-hide" onClick={() => changeModalSelected('')}>
          <FontAwesomeIcon className="fa fa-close fa-3x" icon={faTimesCircle} />
        </button>

        <form className="contact100-form validate-form">
          <span className="contact100-form-title">Contact Us</span>

          <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
            <span className="label-input100">Your Name</span>
            <input className="input100" type="text" name="name" placeholder="Enter your name" />
            <span className="focus-input100" />
          </div>

          <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <span className="label-input100">Email</span>
            <input className="input100" type="text" name="email" placeholder="Enter your email addess" />
            <span className="focus-input100" />
          </div>

          <div className="wrap-input100 validate-input" data-validate="Message is required">
            <span className="label-input100">Message</span>
            <textarea className="input100" name="message" placeholder="Your message here..." />
            <span className="focus-input100" />
          </div>

          <div className="container-contact100-form-btn">
            <button type="button" className="contact100-form-btn">
              <span>Submit<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true" /></span>
            </button>
          </div>
        </form>

        <span className="contact100-more">For any question contact our 24/7 call center: <span className="contact100-more-highlight">+84 775 898786</span>
        </span>
      </div>
    </div>
  );
};

export default ContactForm;
