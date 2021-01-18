// @flow
import React from 'react';
import { connect } from 'react-redux';
import { authSelector } from '../../../selectors/authSelector';

type Props = {
  auth: Object;
}
const HeaderForm = (props: Props) => {
  const {
    auth,
  } = props;

  return (
    <div className="templatemo-top-nav-container">
      <nav>
        <ul className="about-header-admin">
          <li className="title_account">
            <div className="icon-wrapper icon-wrapper-alt rounded-circle">
              <img alt="" className="rounded-circle" src="/images/logo.jpg" width="42" />
              <p className="name_account ">{auth.user.full_name}</p>
            </div>
            <ul className="admin-name">
              <li>
                <a href="#0">Profile</a>
              </li>
              <li><a href="#0">Settings</a></li>
              <li><a href="#0">Log Out</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default connect(authSelector, null)(HeaderForm);
