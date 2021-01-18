// @flow
import AxiosService from './axiosService';

class SignUp extends AxiosService {
  getNotification = (data: any) => {
    const { currentUserID, token } = data;
    return this.getWithToken({ url: `http://localhost:3001/api/v1/users/${currentUserID}/notifications`, data, token });
  }

  readNotification = (data: any) => {
    const { currentUserID, token, notificationId } = data.values;
    return this.putWithToken({ url: `http://localhost:3001/api/v1/users/${currentUserID}/notifications/${notificationId}`, data, token });
  }
}

const NotificationApi = new SignUp();

export default NotificationApi;
