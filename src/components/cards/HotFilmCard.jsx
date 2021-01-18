// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '../../styles/hotFilm.css';

type Props = {
  film: Object;
}
const HotFilmCard = (props: Props) => {
  const { film } = props;

  return (
    <div className="card">
      <div className="card_image"> <img href="#0" alt="" src={film.image_url} /> </div>
      <Link to={`/movies/${film.id}`}><h3 title={film.title_en} className="title">{film.title_en}</h3></Link>
      <div className="bar">
        <div className="emptybar" />
        <div className="filledbar" />
      </div>
      <div className="circle">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle className="stroke" cx="60" cy="60" r="50" />
        </svg>
      </div>
      <div className="card__content">
        <span className="card__category">
          <a href="#0">Action</a>
          <a href="#0">Traler</a>
        </span>
        <span className="card__rate"><FontAwesomeIcon className="star-font icon ion-ios-star" icon={faStar} />{film.rating}</span>
      </div>
    </div>
  );
};

export default HotFilmCard;
