// @flow
import React from 'react';

import CommentForm from '../forms/commentForm';
import { CommentProvider } from '../provider/commentProvider';
import DiscoverFilmCard from '../cards/discoverFilmCard';
import '../../styles/discover.css';

type Props = {
  id: Number;
}

const Discover = (props: Props) => {
  const { id } = props;

  return (
    <>
      <nav className="nav-discover">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <ul className="menu-discover">
                <li><a href="#!">Comment</a></li>
                <li><a href="#!">Reviews</a></li>
                <li><a href="#!">Photos</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 col-xl-8 comment-container">
            <CommentProvider>
              <CommentForm {...{ id }} />
            </CommentProvider>
          </div>
          <div className="col-12 col-lg-5 col-xl-4 comment-container">
            <div className="row">
              <DiscoverFilmCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Discover;
