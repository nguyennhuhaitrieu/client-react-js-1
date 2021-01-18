// @flow
import React from 'react';

import FilmFollowLevelForm from '../forms/FilmFollowLevelForm';
import CategoryFilm from '../filmForms/categoryFilm';
import '../../styles/discover.css';

type Props = {
  id: Number;
  match: Object;
}

const FilmBySTDetail = (props: Props) => {
  const { match } = props;
  const { id } = match.params;
  const { path } = match;

  return (
    <>
      <div className="container">
        {
          path === '/movies/level/:id' && (
            <FilmFollowLevelForm levelFilm={id} />
          )
        }
        {
          path === '/movies/category/:id' && (
            <CategoryFilm categoryId={id} />
          )
        }
      </div>
    </>
  );
};
export default FilmBySTDetail;
