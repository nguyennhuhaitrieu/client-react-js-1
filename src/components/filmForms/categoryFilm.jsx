// @flow
import React, { useEffect, useState } from 'react';
import '../../styles/newFilm.css';
import { connect } from 'react-redux';
import { getCategoryFilmData } from '../../actions/vimActions';
import { categoryFilmSelector } from '../../selectors/categoryFilmSelector';
import NewFilmForm from '../forms/newFilmForm';
import '../../styles/pagination.css';

type Props= {
  filmByCategory: Object;
  meta: Object;
  categoryId: Number;
  getCategoryFilmData: Function;
  categories: Object;
  getCategoryFilmData: Function;
}

const CategoryFilm = (props: Props) => {
  const {
    filmByCategory,
    meta,
    categoryId,
    getCategoryFilmData: getCategoryFilm,
    categories,
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
      getCategoryFilm({ currentPage: allState.currentPage, categoryId });
    }
  }, [allState, categoryId]);

  return (
    <>
      {
        categories && categories.map(category => (category.id === parseInt(categoryId, 10) && (<h1 className="title-film" key={category.id}>{category.name} Movie</h1>))
        )
      }
      <NewFilmForm newFilms={filmByCategory} meta={meta} onPageChanged={onPageChanged} />
    </>
  );
};
export default connect(categoryFilmSelector, { getCategoryFilmData })(CategoryFilm);
