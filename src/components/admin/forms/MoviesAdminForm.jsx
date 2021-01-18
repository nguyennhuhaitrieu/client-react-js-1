// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { getMoviesAdminData, deleteMoviesAdminData } from '../../../actions/adminActions';
import { moviesAdminSelector } from '../../../selectors/moviesAdminSelector';
import Pagination from '../../paginations/pagination';
import confirmDelete from '../../alert/confirmDelete';

type Props={
  getMoviesAdminData: Function,
  deleteMoviesAdminData: Function,
  movies: Object,
  meta: Obect;
}

const MoviesAdminForm = (props: Props) => {
  const {
    getMoviesAdminData: getMovies,
    movies,
    deleteMoviesAdminData: deleteMovies,
    meta = { page: 1, pages: 1, count: 0 },
  } = props;

  const initState = {
    currentPage: 1,
    totalPages: null,
  };

  const [paginationState, setPaginationState] = useState(initState);

  const onPageChanged = m => {
    const { currentPage, totalPages } = m;
    setPaginationState({ currentPage, totalPages });
  };

  useEffect(() => {
    if (paginationState.currentPage >= 1) {
      getMovies({ page: paginationState.currentPage });
    }
  }, [paginationState]);

  return (
    <div className="manager-user">

      <h3 className="title-list-user"> Manage Movies </h3>

      <div className="list-user">
        <Link to="/admin/movies/new">
          <button type="submit" className="add-user">
            <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faPlusCircle} />
              Add Movies
          </button>
        </Link>


        <div className="table-user" id="style-4">
          <table className="table table-striped ">
            <thead>
              <tr className="title-field">
                <th scope="col">#</th>
                <th scope="col">English Title</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Genres</th>
                <th scope="col">Image</th>
                <th scope="col">Rating</th>
                <th scope="col">Total Episode</th>
                <th scope="col">Created At</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {
                movies && movies.map(movie => (
                  <tr key={movie.id}>
                    <th scope="row">{movie.id}</th>
                    <td>{movie.title_en}</td>
                    <td>{movie.description}</td>
                    <td> {
                      movie.category_name
                    }
                    </td>
                    <td>
                      {
                        movie.genres && movie.genres.map(genre => (
                          <div key={genre.id}>
                            <p style={{ fontFamily: "'Open Sans', sans-serif" }}>{genre.name}</p>
                          </div>
                        ))
                      }
                    </td>
                    <td>
                      <img style={{ width: '120px', height: '130px' }} alt="" src={movie.image_url} />
                    </td>
                    <td>{movie.rating}</td>
                    <td>{movie.total_episodes}</td>
                    <td>{movie.created_at}</td>
                    <td>
                      <Link to={`/admin/movies/${movie.id}/edit`}>
                        <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faEdit} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => confirmDelete({ id: movie.id, actionDelete: deleteMovies, nameId: 'moviesId' })
                        }
                      >
                        <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <Pagination
          totalRecords={meta.count}
          pageLimit={meta.items}
          pageNeighbours={2}
          currentPage={meta.page}
          onPageChanged={onPageChanged}
        />
      </div>
    </div>
  );
};

export default connect(moviesAdminSelector, { getMoviesAdminData, deleteMoviesAdminData })(MoviesAdminForm);
