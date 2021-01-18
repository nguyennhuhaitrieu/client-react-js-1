// @flow
import AxiosService from './axiosService';

class User extends AxiosService {
  getUser = (data: any) => {
    const currentPage = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/users?page=${currentPage}`, data });
  }

  deleteUser = (data: any) => {
    const userId = data;

    return this.delete({ url: `http://localhost:3001/api/v1/admin/users/${userId}`, data });
  }

  postUser = (data: any) => this.post({ url: 'http://localhost:3001/api/v1/admin/users', data })

  editUser = (data: any) => {
    const userId = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/users/${userId}/edit` });
  }

  updateUser = (data: any) => {
    const userId = data.id;
    return this.update({ url: `http://localhost:3001/api/v1/admin/users/${userId}`, data });
  }
}

const UserApi = new User();

export default UserApi;
