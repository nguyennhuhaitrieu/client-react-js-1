// @flow
import AxiosService from './axiosService';

class Subtitles extends AxiosService {
  getSubtitles = (data: any) => {
    const { page } = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/episodes?page=${page}`, data });
  }

  createSubtitles = (data: any) => this.post({ url: 'http://localhost:3001/api/v1/admin/episodes', data })

  updateSubtitles = (data: any) => {
    const subtitlesId = data.id;
    return this.update({ url: `http://localhost:3001/api/v1/admin/episodes/${subtitlesId}`, data });
  }

  getSelectedSubtitles = (data: any) => {
    const { subtitlesId } = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/episodes/${subtitlesId}/edit` });
  }

  deleteSubtitles = (data: any) => {
    const subtitlesId = data;
    return this.delete({ url: `http://localhost:3001/api/v1/admin/episodes/${subtitlesId}`, data });
  };
}

const SubtitlesAdminApi = new Subtitles();

export default SubtitlesAdminApi;
