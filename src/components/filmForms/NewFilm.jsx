import React, { useEffect, useState } from 'react';
import '../../styles/newFilm.css';
import { connect } from 'react-redux';
import { getFilmData } from '../../actions/vimActions';
import { newFilmSelector } from '../../selectors/newFilmSelector';
import NewFilmForm from '../forms/newFilmForm';
import '../../styles/pagination.css';

const NewFilm = (props) => {
  const {
    getFilmData,
    newFilms,
    meta,
  } = props;


  const state = {
    currentPage: 1,
    totalPages: null,
  };

  const [allState, setAllState] = useState(state);

  const onPageChanged = meta => {
    const { currentPage, totalPages } = meta;
    setAllState({ currentPage, totalPages });
  };

  useEffect(() => {
    if (allState.currentPage >= 1) {
      getFilmData(allState.currentPage);
    }
  }, [allState]);

  return (
    <>
      <NewFilmForm newFilms={newFilms} meta={meta} onPageChanged={onPageChanged} />
    </>
  );
};
export default connect(newFilmSelector, { getFilmData })(NewFilm);
