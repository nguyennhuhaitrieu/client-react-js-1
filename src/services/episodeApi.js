// @flow
import AxiosService from './axiosService';

class Episode extends AxiosService {
  getEpisode = (data: any) => {
    const { currentPage, film_id } = data;
    return this.get({ url: `http://localhost:3001/api/v1/films/${film_id}/episodes/?page=${currentPage}`, data });
  }
}

const EpisodeApi = new Episode();

export default EpisodeApi;
