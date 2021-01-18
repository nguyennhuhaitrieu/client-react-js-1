// @flow
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowMoreText from 'react-show-more-text';
import { faTimesCircle, faEllipsisH, faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/contact.css';
import '../../styles/filmDetail.css';
import '../../styles/movies.css';

type Props = {
  changeModalSelected: Function;
  notificationSelected: Object;
}
const FilmDetailForm = (props: Props) => {
  const { changeModalSelected, notificationSelected: notification } = props;

  return (
    <div className="container-film-detail">
      <div className="wrap-film-detail">
        <button type="button" className="contact100-btn-hide btn-hide-film-detail" onClick={() => changeModalSelected('')}>
          <FontAwesomeIcon className="fa fa-close fa-3x" icon={faTimesCircle} />
        </button>

        <form className="film-detail-form validate-form">
          <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
            <img src={notification.movie.image_url} alt="" />
          </div>

          <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
            <div className=" card__content">
              <div className="card__wrap">
                <span className="card__rate"><FontAwesomeIcon className="pr-1 pb-1 icon ion-ios-star star-font fa-lg" icon={faStar} />8.4</span>

                <ul className="card__list">
                  <li>HD</li>
                  <li>16+</li>
                </ul>
              </div>

              <ul className="card__meta__details">
                <li><span>Genre:</span>
                  {
                    notification.movie.genres && notification.movie.genres.map(genre => <a key={genre.id} href="#0"> {genre.name}</a>)
                  }
                </li>
                <li><span>Release year:</span> {(new Date(notification.movie.created_at)).getFullYear()}</li>
                <li><span>Country:</span> <a href="#0">USA</a> </li>
              </ul>

              <div className="card__description card__description--details b-description_readmore_ellipsis">
                <ShowMoreText
                  lines={2}
                  more={<FontAwesomeIcon className="star-font icon ion-ios-star" icon={faEllipsisH} />}
                  less={<FontAwesomeIcon className="star-font icon ion-ios-star" icon={faEllipsisH} />}
                  anchorClass="btn-showmore-less bcd"
                >
                  {notification.movie.description}
                </ShowMoreText>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilmDetailForm;
