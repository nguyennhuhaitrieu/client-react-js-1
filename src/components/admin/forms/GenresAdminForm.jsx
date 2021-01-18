// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getGenresAdminData, deleteGenresAdminData } from '../../../actions/adminActions';
import { genresAdminSelector } from '../../../selectors/genresAdminSelector';
import Pagination from '../../paginations/pagination';
import confirmDelete from '../../alert/confirmDelete';

type Props={
  getGenresAdminData: Function,
  deleteGenresAdminData: Function,
  genres: Object,
  meta: Obect;
}
const GenresAdminForm = (props: Props) => {
  const {
    getGenresAdminData: getGenres,
    genres,
    deleteGenresAdminData: deleteGenres,
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
      getGenres({ page: paginationState.currentPage });
    }
  }, [paginationState]);


  return (
    <div className="manager-user">

      <h3 className="title-list-user"> Manage Genres </h3>

      <div className="list-user">
        <Link to="/admin/genres/new">
          <button type="submit" className="add-user">
            <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faPlusCircle} />
              Add Genres
          </button>
        </Link>


        <div className="table-user">
          <table className="table table-striped ">
            <thead>
              <tr className="title-field">
                <th scope="col">#</th>
                <th scope="col">Genres Name</th>
                <th scope="col">Created At</th>
                <th scope="col">Updated At</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {
                genres && genres.map(genre => (
                  <tr key={genre.id}>
                    <th scope="row">{genre.id}</th>
                    <td>{genre.name}</td>
                    <td>{genre.created_at}</td>
                    <td>{genre.updated_at}</td>
                    <td>
                      <Link to={`/admin/genres/${genre.id}/edit`}>
                        <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faEdit} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => confirmDelete({ id: genre.id, actionDelete: deleteGenres, nameId: 'genresId' })
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

export default connect(genresAdminSelector, { getGenresAdminData, deleteGenresAdminData })(GenresAdminForm);
