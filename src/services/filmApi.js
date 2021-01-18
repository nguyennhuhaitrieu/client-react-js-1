// @flow
import AxiosService from './axiosService';

class Film extends AxiosService {
  getFilm = (data: any) => {
    const { currentPage } = data;
    return this.get({ url: `http://localhost:3001/api/v1/films?page=${currentPage}`, data });
  }

  getHotFilm = (data: any) => this.get({ url: 'http://localhost:3001/api/v1/films/hotFilms', data });

  getFilmByLevel = (data: any) => {
    const { currentPage, level } = data;
    return this.get({ url: `http://localhost:3001/api/v1/films/level/${level}?page=${currentPage}`, data });
  }

  getFilmByCategory = (data: any) => {
    const { currentPage, categoryId } = data;
    return this.get({ url: `http://localhost:3001/api/v1/films/category/${categoryId}?page=${currentPage}`, data });
  }

  getSelectedFilm = (data: any) => {
    const { id } = data;
    return this.get({ url: `http://localhost:3001/api/v1/films/${id}`, data });
  }

  getCurrentRate = (data: any) => {
    const { movieId, token } = data;
    return this.getWithToken({ url: `http://localhost:3001/api/v1/films/${movieId}/rating_movies`, data, token });
  }

  ratingMovie = (data: any) => {
    const { movieId, token, rate } = data;
    const values = { movie_id: movieId, rate };
    return this.postWithToken({ url: `http://localhost:3001/api/v1/films/${movieId}/rating_movies`, values, token });
  }
}

const FilmApi = new Film();

export default FilmApi;
