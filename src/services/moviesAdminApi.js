// @flow
import AxiosService from './axiosService';

class Movies extends AxiosService {
  getMovies = (data: any) => {
    const { page } = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/films?page=${page}`, data });
  }

  getAllMovies = (data: any) => this.get({ url: 'http://localhost:3001/api/v1/admin/films/all', data })

  createMovies = (data: any) => this.post({ url: 'http://localhost:3001/api/v1/admin/films', data })

  updateMovies = (data: any) => {
    const moviesId = data.id;
    return this.update({ url: `http://localhost:3001/api/v1/admin/films/${moviesId}`, data });
  }

  getSelectedMovies = (data: any) => {
    const { moviesId } = data;
    return this.get({ url: `http://localhost:3001/api/v1/admin/films/${moviesId}/edit` });
  }

  deleteMovies = (data: any) => {
    const moviesId = data;
    return this.delete({ url: `http://localhost:3001/api/v1/admin/films/${moviesId}`, data });
  };
}

const MoviesAdminApi = new Movies();

export default MoviesAdminApi;
