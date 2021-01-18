// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import FilmCard from '../cards/filmCard';
import PlayerCard from '../cards/playerCard';
import Discover from '../layout/discover';
import EpisodeFilmTable from '../table/episodeFilmTable';
import '../../styles/movies.css';
import '../../styles/indexPage.css';
import { getSelectedFilmData } from '../../actions/vimActions';
import { filmSelectedSelector } from '../../selectors/filmSelectedSelector';

type Props = {
  getSelectedFilmData: Function;
  selectedFilm: any;
  match: any;
}
const MoviesForm = (props: Props) => {
  const { getSelectedFilmData: getSelectedFilm, selectedFilm, match } = props;

  const { id } = match.params;
  const [duration, setDuration] = useState(null);
  const [episodesTable, setEpisodesTable] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('');

  useEffect(() => {
    getSelectedFilm(id);
  }, []);

  const singleFilm = () => (
    <div className="singleFilm-container">
      <FilmCard film={selectedFilm} {...{ duration }} />
    </div>
  );

  const seriesFilm = () => (
    <div className="pb-2 row">
      <div className="col-xl-8">
        <FilmCard film={selectedFilm} {...{ duration }} />
      </div>
      <div className="col-xl-4">
        <EpisodeFilmTable {...{ episodesTable, setCurrentPlayer }} />
      </div>
    </div>
  );
  return (
    <>
      <div className="container">
        <h1 className="details-title">{selectedFilm.title_en}</h1>

        <div className="movies-container row">
          <div className="col-xl-12 pb-2">
            {
              (selectedFilm.total_episodes > 1) ? seriesFilm() : singleFilm()
            }
          </div>
          <div className="col-xl-12 pb-3" style={{ display: 'flex' }}>
            <PlayerCard
              film={selectedFilm}
              {...{ setDuration, setEpisodesTable, episodesTable, setCurrentPlayer, currentPlayer }}
            />
          </div>
        </div>
      </div>

      <div className="discover-container">
        <Discover {...{ id }} />
      </div>
    </>
  );
};

export default connect(filmSelectedSelector, { getSelectedFilmData })(MoviesForm);
