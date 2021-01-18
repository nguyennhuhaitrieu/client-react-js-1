// @flow
import AxiosService from './axiosService';

class Category extends AxiosService {
  getCategory = (data: any) => this.get({ url: 'http://localhost:3001/api/v1/categories', data });
}

const CategoryApi = new Category();

export default CategoryApi;
