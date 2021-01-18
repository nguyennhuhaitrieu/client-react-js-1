/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowMoreText from 'react-show-more-text';
import { faEllipsisH, faStar } from '@fortawesome/free-solid-svg-icons';

import { ratingMovieData, getCurrentRateData } from '../../actions/vimActions';
import RatingStarForm from '../rateStar/ratingStarForm';
import { filmCardSelector } from '../../selectors/filmCardSelector';
import '../../styles/hotFilm.css';
import '../../styles/movies.css';

type Props = {
  film: Object;
  duration: String;
  auth: Object;
  ratingMovieData: Function;
  getCurrentRateData: Function;
  currentRate: Object;
}

const FilmCard = (props: Props) => {
  const {
    film,
    duration,
    auth,
    ratingMovieData: ratingMovie,
    getCurrentRateData: getCurrentRate,
    currentRate,
  } = props;


  const [checkedStar, setCheckedStar] = useState(0);
  const [rating, setRatingMovie] = useState(film.rating);
  useEffect(() => {
    if (auth.token && film.id) {
      getCurrentRate({ movieId: film.id, token: auth.token });
    }
  }, [film, auth]);

  useEffect(() => {
    if (currentRate.rate > 0) {
      setCheckedStar(currentRate.rate);
      setRatingMovie(currentRate.movie_rating);
    }
  }, [currentRate]);


  return (
    <div className="card__cover_vim row">
      <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
        <img src={film.image_url} alt="" />
      </div>

      <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
        <div className=" card__content mt-0">
          {auth.token && (

            <div className="card__wrap mt-0">
              {currentRate && film.id && <RatingStarForm {...{ checkedStar, ratingMovie, setCheckedStar, film, auth }} />}
            </div>
          )
          }
          <div className="card__wrap">
            <span className="card__rate"><FontAwesomeIcon className="mr-1 pb-1 icon ion-ios-star star-font fa-lg" icon={faStar} />{rating}</span>
            <ul className="card__list">
              <li>HD</li>
              <li>16+</li>
            </ul>
          </div>

          <ul className="card__meta">
            <li><span>Genre:</span>
              {
                film.genres && film.genres.map(genre => <a key={genre.id} href="#0"> {genre.name}</a>)
              }
            </li>
            <li><span>Release year:</span> {(new Date(film.created_at)).getFullYear()}</li>
            <li><span>Running time:</span> {duration || 'NaN'} Min</li>
            <li><span>Country:</span> <a href="#0">USA</a> </li>
          </ul>

          <div className="card__description card__description--details b-description_readmore_ellipsis">
            <ShowMoreText
              lines={1}
              more={<FontAwesomeIcon className="star-font icon ion-ios-star" icon={faEllipsisH} />}
              less={<FontAwesomeIcon className="star-font icon ion-ios-star" icon={faEllipsisH} />}
              anchorClass="btn-showmore-less bcd"
            >
              {film.description}
            </ShowMoreText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(filmCardSelector, { ratingMovieData, getCurrentRateData })(FilmCard);
