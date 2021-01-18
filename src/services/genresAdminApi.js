// @flow
import AxiosService from './axiosService';

class Genres extends AxiosService {
  getGenres = (data: any) => {
    const { page } = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/genres?page=${page}`, data });
  }

  createGenres = (data: any) => this.post({ url: 'http://localhost:3001/api/v1/admin/genres', data })

  updateGenres = (data: any) => {
    const genresId = data.id;
    return this.update({ url: `http://localhost:3001/api/v1/admin/genres/${genresId}`, data });
  }

  getSelectedGenres = (data: any) => {
    const { genresId } = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/genres/${genresId}/edit` });
  }

  deleteGenres = (data: any) => {
    const genresId = data;
    return this.delete({ url: `http://localhost:3001/api/v1/admin/genres/${genresId}`, data });
  };

  getAllGenres = (data: any) => this.get({ url: 'http://localhost:3001/api/v1/admin/genres/all', data })
}

const GenresAdminApi = new Genres();

export default GenresAdminApi;
