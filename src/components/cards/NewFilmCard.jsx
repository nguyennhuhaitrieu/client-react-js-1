// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '../../styles/newFilm.css';
import { newFilmSelector } from '../../selectors/newFilmSelector';

type Props = {
  film: Object;
}

const NewFilmCard = (props: Props) => {
  const { film } = props;
  return (
    <div className="col-6 col-sm-12 col-lg-6 pt-4">
      <div className="card-new-film card-new-film--list">
        <div className="row">
          <div className="col-12 col-sm-4">
            <div className="card__cover">
              <img src={film.image_url} alt="" />
              <Link className="card__play" to={`/movies/${film.id}`}>
                <i className="icon ion-ios-play" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-8">
            <div className="card__content">
              <h3 className="card__title"><Link to={`/movies/${film.id}`}>{film.title_en}</Link></h3>
              <span className="card__category">
                {
                  film.genres && film.genres.map(genre => <a key={genre.id} href="#0"> {genre.name}</a>)
                }
              </span>

              <div className="card__wrap">
                <span className="card__rate">
                  <FontAwesomeIcon className="mr-1 pb-1 icon ion-ios-star star-font fa-lg" icon={faStar} />{film.rating}
                </span>
                <ul className="card__list">
                  <li>HD</li>
                  <li>16+</li>
                </ul>
              </div>

              <div className="card__description">
                <p>{film.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(newFilmSelector, null)(NewFilmCard);
