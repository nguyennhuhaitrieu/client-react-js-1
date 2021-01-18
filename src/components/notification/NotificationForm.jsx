// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getNotificationData, readNotificationData, saveModalSelectedData } from '../../actions/vimActions';
import { notificationSelector } from '../../selectors/notificationSelector';
import FilmDetailForm from '../forms/FilmDetailsForm';
import Modal from '../modal/Modal';
import '../../styles/notification.css';

type Props = {
  getNotificationData: Function;
  readNotificationData: Function;
  currentUserID: Number;
  notifications: Object;
  token: String;
  saveModalSelectedData: Function;
  modalSelected: String;
}
const NotificationForm = (props: Props) => {
  const {
    getNotificationData: getNotification,
    currentUserID,
    notifications,
    token,
    readNotificationData: readNotification,
    saveModalSelectedData: changeModalSelected,
    modalSelected,
  } = props;
  const [readClass, setReadClass] = useState([]);
  const [notificationSelected, setNotificationSelected] = useState({});

  useEffect(() => {
    getNotification({ currentUserID, token });
  }, []);

  const readNotify = (data, index) => {
    if (readClass[index] === undefined) {
      readClass[index] = 'readClass';
      readNotification({ data, setReadClass, readClass });
    }
    changeModalSelected('FilmDetail');
  };

  const notificationDetail = (notification, index) => (
    <li
      key={notification.id} className={notification.read_at ? 'notify-detail readClass' : `notify-detail ${readClass[index]}`}
    >
      <a
        href="#0"
        onClick={() => {
          readNotify({ token, currentUserID, notificationId: notification.id }, index);
          setNotificationSelected(notification);
        }
        }
      >
        { notification.action }
      </a>
    </li>
  );

  return (
    <ul className="notification-contain" id="notify-scroll">
      {
        notifications && notifications.map((notification, index) => (notificationDetail(notification, index)))
      }
      {
        modalSelected === 'FilmDetail' && (
          <Modal>
            <FilmDetailForm {...{ changeModalSelected, notificationSelected }} />
          </Modal>
        )
      }
    </ul>
  );
};

export default connect(notificationSelector, { getNotificationData, readNotificationData, saveModalSelectedData })(NotificationForm);
