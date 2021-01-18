// @flow
import AxiosService from './axiosService';

class Level extends AxiosService {
  getLevel = (data: any) => this.get({ url: 'http://localhost:3001/api/v1/levels', data })
}

const LevelApi = new Level();

export default LevelApi;
