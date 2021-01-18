import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCopy, faBook, faDiceD6, faDesktop, faEnvelopeOpenText, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';

const NavbarForm = () => (
  <div className="templatemo-sidebar">

    <header className="templatemo-site-header">
      <div className="square" />
      <h1>HPTV Admin</h1>
    </header>
    <div className="profile-photo-container">
      <img src="/images/adminLogo.jpg" alt="" className="img-responsive" style={{ width: '300px', height: '200px' }} />
      {/* <div className="profile-photo-overlay" /> */}
    </div>
    {/* <!-- Search box --> */}
    <form className="templatemo-search-form" role="search">
      <div className="input-group">
        <button type="submit" className="fa fa-search" />
        <input
          type="text" className="form-control" placeholder="Search" name="srch-term"
          id="srch-term"
        />
      </div>
    </form>
    <div className="mobile-menu-icon">
      <i className="fa fa-bars" />
    </div>
    <nav className="templatemo-left-nav">
      <ul>
        <li>
          <Link to="/admin/subtitles">
            <FontAwesomeIcon className="star-font icon ion-ios-star fa-2x mr-2" icon={faCopy} />Manage Subtitle
          </Link>
        </li>

        <li>
          <Link to="/admin/users">
            <FontAwesomeIcon className="star-font icon ion-ios-star fa-2x mr-2" icon={faUser} />Manage Users
          </Link>
        </li>

        <li>
          <Link to="/admin/categories">
            <FontAwesomeIcon className="star-font icon ion-ios-star fa-2x mr-2" icon={faBook} />Manage Categories
          </Link>
        </li>

        <li>
          <Link to="/admin/users">
            <FontAwesomeIcon className="star-font icon ion-ios-star fa-2x mr-2" icon={faEnvelopeOpenText} />Manage Notifications
          </Link>
        </li>

        <li>
          <Link to="/admin/genres">
            <FontAwesomeIcon className="star-font icon ion-ios-star fa-2x mr-2" icon={faDiceD6} />Manage Genres
          </Link>
        </li>

        <li>
          <Link to="/admin/movies">
            <FontAwesomeIcon className="star-font icon ion-ios-star fa-2x mr-2" icon={faDesktop} />Manage Movies
          </Link>
        </li>

        <li>
          <Link to="/admin/levels">
            <FontAwesomeIcon className="star-font icon ion-ios-star fa-2x mr-2" icon={faLevelUpAlt} />Manage Levels
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavbarForm;
