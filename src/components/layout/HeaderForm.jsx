/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBell } from '@fortawesome/free-solid-svg-icons';
import SignupForm from '../forms/SignupForm';
import LoginForm from '../forms/LoginForm';
import ContactForm from '../forms/ContactForm';
import SwitchButton from '../button/switchButton';
import LevelForm from '../forms/levelForm';
import Modal from '../modal/Modal';
import {
  getLevelData,
  getRemindVocabularyData,
  saveModalSelectedData,
  logout,
} from '../../actions/vimActions';
import { headerSelector } from '../../selectors/headerSelector';
import NotificationForm from '../notification/NotificationForm';
import CategoryForm from '../forms/categoryForm';
import '../../styles/header.css';

type Props ={
  getLevelData: Function;
  listLevels: Object,
  currentUserID: Number;
  currentUserName: String;
  getRemindVocabularyData: Function;
  token: String;
  listVocabularies: Object;
  saveIsRemindData: Function;
  isRemind: Boolean;
  modalSelected: Object;
  saveModalSelectedData: Function;
  getLevelData: Function;
  getRemindVocabularyData: Function;
  role: String;
  logout: Function;
}

const HeaderForm = (props: Props) => {
  const {
    isRemind,
    token,
    currentUserID,
    currentUserName,
    modalSelected,
    getRemindVocabularyData: getRemindVocabulary,
    getLevelData: getLevel,
    saveModalSelectedData: changeModalSelected,
    role,
    logout,
  } = props;

  const [showNotify, setShowNotify] = useState(false);
  useEffect(() => {
    getLevel();
  });

  useEffect(() => {
    changeModalSelected('');
  }, []);

  useEffect(() => {
    if (currentUserID >= 1) {
      getRemindVocabulary({ currentUserID, token, page: 1 });
    }
  }, [currentUserID]);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div id="logo">
              <Link className="p-0" to="/home">
                <img className="header__logo" src="/images/logo.jpg" alt="" />
              </Link>
            </div>

            <label htmlFor="drop" className="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
              <li>
                <label htmlFor="drop-1" className="toggle">CATELOG</label>
                <a href="#0">CATELOG</a>
                <input type="checkbox" id="drop-1" />
                <LevelForm />
              </li>
              <li>
                <label htmlFor="drop-1" className="toggle">CATEGORIES</label>
                <a href="#0">CATEGORIES</a>
                <input type="checkbox" id="drop-1" />
                <CategoryForm />
              </li>

              {
                role === 'administrator' && (
                  <li><Link to="/admin">admin</Link></li>
                )
              }
              {
                modalSelected === 'contact' && (
                  <Modal>
                    <ContactForm {...{ changeModalSelected }} />
                  </Modal>
                )
              }
              {currentUserID ? (
                <>
                  <li><Link to="/testVocabulary">Test</Link></li>
                  <li>
                    <label htmlFor="drop-1" className="toggle">{currentUserName}</label>
                    <a className="Currentuser-name" href="#0">{currentUserName}</a>
                    <input type="checkbox" id="drop-1" />
                    <ul>
                      <li><a href="#0">Profile</a></li>
                      <li><a href="#0" onClick={() => logout()}>Logout</a></li>
                    </ul>
                  </li>
                  <li>
                    <SwitchButton {...{ isRemind }} />
                  </li>
                  <li>
                    <a href="#0" onClick={() => setShowNotify(!showNotify)}><FontAwesomeIcon className="bell ion-ios-bell fa-lg" icon={faBell} /></a>
                    <input type="checkbox" id="drop-1" />
                    {showNotify
                    && <NotificationForm {...{ currentUserID, token }} />
                    }
                  </li>
                </>
              )
                : (
                  <>
                    <li>
                      <label htmlFor="drop-2" className="toggle">About</label>
                      <a href="#0">About</a>
                      <input type="checkbox" id="drop-2" />
                      <ul>
                        <li>
                          <a
                            href="#0" onClick={() => {
                              changeModalSelected('login');
                            }}
                            className="login-button"
                          >Login
                          </a>
                        </li>
                        {
                          modalSelected === 'login' && (
                            <Modal>
                              <LoginForm {...{ changeModalSelected }} />
                            </Modal>
                          )
                        }
                        <li>
                          <a
                            href="#0" onClick={() => {
                              changeModalSelected('signup');
                            }}
                            className="login-button"
                          >Signup
                          </a>
                        </li>
                        {
                          modalSelected === 'signup' && (
                            <Modal>
                              <SignupForm {...{ changeModalSelected }} />
                            </Modal>
                          )
                        }
                      </ul>
                    </li>
                  </>
                )
              }
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default connect(headerSelector, { getLevelData, getRemindVocabularyData, saveModalSelectedData, logout })(HeaderForm);
