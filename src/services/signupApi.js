// @flow
import AxiosService from './axiosService';

class SignUp extends AxiosService {
  signup = (data: any) => this.post({ url: 'http://localhost:3001/api/v1/users/signup', data });
}

const SignupApi = new SignUp();

export default SignupApi;
