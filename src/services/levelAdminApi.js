// @flow
import AxiosService from './axiosService';

class Level extends AxiosService {
  getLevel = (data: any) => {
    const { page } = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/levels?page=${page}`, data });
  }

  getAllLevel = (data: any) => this.get({ url: 'http://localhost:3001/api/v1/admin/levels/all', data })

  createLevel = (data: any) => this.post({ url: 'http://localhost:3001/api/v1/admin/levels', data })

  updateLevel = (data: any) => {
    const levelId = data.id;
    return this.update({ url: `http://localhost:3001/api/v1/admin/levels/${levelId}`, data });
  }

  getSelectedLevel = (data: any) => {
    const { levelId } = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/levels/${levelId}/edit` });
  }

  deleteLevel = (data: any) => {
    const levelId = data;
    return this.delete({ url: `http://localhost:3001/api/v1/admin/levels/${levelId}`, data });
  };
}

const LevelAdminApi = new Level();

export default LevelAdminApi;
