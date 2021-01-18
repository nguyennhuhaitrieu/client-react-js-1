// @flow
import AxiosService from './axiosService';

class Category extends AxiosService {
  getAllCategory = (data: any) => this.get({ url: 'http://localhost:3001/api/v1/admin/categories/all', data })

  getCategory = (data: any) => {
    const { page } = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/categories?page=${page}`, data });
  }

  createCategory = (data: any) => this.post({ url: 'http://localhost:3001/api/v1/admin/categories', data })

  updateCategory = (data: any) => {
    const categoryId = data.id;
    return this.update({ url: `http://localhost:3001/api/v1/admin/categories/${categoryId}`, data });
  }

  getSelectedCategory = (data: any) => {
    const { categoryId } = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/categories/${categoryId}/edit` });
  }

  deleteCategory = (data: any) => {
    const categoryId = data;
    return this.delete({ url: `http://localhost:3001/api/v1/admin/categories/${categoryId}`, data });
  };
}

const CategoryAdminApi = new Category();

export default CategoryAdminApi;
