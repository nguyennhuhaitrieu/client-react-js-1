// @flow
import AxiosService from './axiosService';

class Auth extends AxiosService {
  login = (data: any) => this.post({ url: 'http://localhost:3001/api/v1/users/login', data });
}

const AuthApi = new Auth();

export default AuthApi;
