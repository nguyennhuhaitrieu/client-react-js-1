// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { getFilmData } from '../../actions/vimActions';
import { newFilmSelector } from '../../selectors/newFilmSelector';
import '../../styles/hotFilm.css';

type Props = {
  getFilmData: Fuction;
  newFilms: Object;
}
const DiscoverFilmCard = (props: Props) => {
  const { getFilmData: getFilm, newFilms } = props;

  useEffect(() => {
    const currentPage = 1;
    getFilm(currentPage);
  }, []);

  return (
    <>
      {newFilms && newFilms.map(film => (
        <div key={film.id} className="col-6 col-sm-4 col-lg-6">
          <div className="card-discover-discover-filmcard">
            <div className="card__cover">
              <img src={film.image_url} alt="" />
              <a href="#0" className="card__play">
                <i className="icon ion-ios-play" />
              </a>
            </div>
            <div className="card__content">
              <Link to={`/movies/${film.id}`}><h3 className="title-discover-film" title={film.title_en}>{film.title_en}</h3></Link>
              <span className="card__category">
                {
                  film.genres && film.genres.map(genre => <a key={genre.id} href="#0"> {genre.name}</a>)
                }
              </span>
              <span className="card__rate"><FontAwesomeIcon className="icon ion-ios-star star-font fa-sm" icon={faStar} />{film.rating}</span>
            </div>
          </div>
        </div>
      ))
      }
    </>
  );
};
export default connect(newFilmSelector, { getFilmData })(DiscoverFilmCard);
