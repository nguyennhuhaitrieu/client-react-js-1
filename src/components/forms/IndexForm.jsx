import React from 'react';

import HotFilmForm from './HotFilmForm';
import SlideForm from './SlideForm';
import NewFilm from '../filmForms/NewFilm';

import FilmFollowLevelForm from './FilmFollowLevelForm';
import '../../styles/indexPage.css';

const IndexForm = () => (
  <>
    <div className="slider-container">
      <SlideForm />
    </div>
    <div className="new-film-of-season">
      <div className="container">
        <h2 className="title-film">HOT FILM OF THIS SEASON</h2>
        <HotFilmForm />
      </div>
    </div>
    <div className="new-film">
      <div className="container">
        <h2 className="title-film">NEW FILM</h2>
        <NewFilm />
      </div>
    </div>
    <div className="film-by-level-container">
      <div className="container">
        <FilmFollowLevelForm />
      </div>
    </div>

  </>
);

export default IndexForm;
