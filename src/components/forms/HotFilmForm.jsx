// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import '../../styles/hotFilm.css';
import { getHotFilmData } from '../../actions/vimActions';
import HotFilmCard from '../cards/HotFilmCard';
import { hotFilmSelector } from '../../selectors/hotFilmSelector';

type Props = {
  getHotFilmData: Function;
  hotFilms: Object;
}
const HotFilmForm = (props: Props) => {
  const { getHotFilmData: getHotFilm, hotFilms } = props;
  useEffect(() => {
    getHotFilm();
  }, []);
  return (
    <>
      <div className="container-hotfilm">
        {
          hotFilms && hotFilms.map(film => <HotFilmCard film={film} key={film.id} />)
        }
      </div>
    </>
  );
};

export default connect(hotFilmSelector, { getHotFilmData })(HotFilmForm);
