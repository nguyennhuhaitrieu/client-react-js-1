// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFighterJet } from '@fortawesome/free-solid-svg-icons';

import NewFilmForm from './newFilmForm';
import { getFilmByLevelData } from '../../actions/vimActions';
import '../../styles/filmsLevel.css';
import { filmByLevelSelector } from '../../selectors/filmByLevelSelector';

type Props = {
  getFilmByLevelData: Function,
  filmByLevels: Function,
  listLevels: Object;
  levelFilm: Number;
}

const FilmFollowLevelForm = (props: Props) => {
  const initState = {
    currentPage: 1,
    totalPages: null,
  };

  const [paginateState, setPaginateState] = useState(initState);
  const [level, setLevel] = useState(1);

  const onPageChanged = meta => {
    const { currentPage, totalPages } = meta;
    setPaginateState({ currentPage, totalPages });
  };

  const setFilmLevel = data => {
    setPaginateState({ currentPage: 1, totalPages: null });
    setLevel(data);
  };

  const {
    getFilmByLevelData: getFilmLevel,
    filmByLevels,
    listLevels,
    levelFilm,
  } = props;


  useEffect(() => {
    if (paginateState.currentPage >= 1) {
      getFilmLevel({ currentPage: paginateState.currentPage, level });
    }
  }, [paginateState, level]);

  useEffect(() => {
    if (levelFilm) {
      getFilmLevel({ currentPage: paginateState.currentPage, level: levelFilm });
      setLevel(levelFilm);
    }
  }, [levelFilm]);
  return (
    <>
      <div className="container-film-by-level">

        <div className="menu-level">
          <div className="label">Film BY LEVEL { level } <FontAwesomeIcon className="star-font icon ion-ios-star" icon={faFighterJet} /></div>
          <div className="spacer" />
          {
            listLevels.levels && listLevels.levels.map(l => <div className="item" key={l.id}><a href="#0" onClick={() => setFilmLevel(l.id)}>{l.name}</a></div>)
          }
        </div>
        <NewFilmForm newFilms={filmByLevels.filmByLevels} meta={filmByLevels.meta} onPageChanged={onPageChanged} />
      </div>
    </>
  );
};
export default connect(filmByLevelSelector, { getFilmByLevelData })(FilmFollowLevelForm);
