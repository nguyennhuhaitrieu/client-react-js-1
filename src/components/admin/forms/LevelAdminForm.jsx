// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { getLevelAdminData, deleteLevelAdminData } from '../../../actions/adminActions';
import { levelAdminSelector } from '../../../selectors/levelAdminSelector';
import Pagination from '../../paginations/pagination';
import confirmDelete from '../../alert/confirmDelete';

type Props={
  getLevelAdminData: Function,
  deleteLevelAdminData: Function,
  levels: Object,
  meta: Obect;
}
const LevelAdminForm = (props: Props) => {
  const {
    getLevelAdminData: getLevel,
    levels,
    deleteLevelAdminData: deleteLevel,
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
      getLevel({ page: paginationState.currentPage });
    }
  }, [paginationState]);

  return (
    <div className="manager-user">

      <h3 className="title-list-user"> Manage Levels </h3>

      <div className="list-user">
        <Link to="/admin/levels/new">
          <button type="submit" className="add-user">
            <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faPlusCircle} />
              Add Levels
          </button>
        </Link>


        <div className="table-user">
          <table className="table table-striped ">
            <thead>
              <tr className="title-field">
                <th scope="col">#</th>
                <th scope="col">Level Name</th>
                <th scope="col">Created At</th>
                <th scope="col">Updated At</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {
                levels && levels.map(level => (
                  <tr key={level.id}>
                    <th scope="row">{level.id}</th>
                    <td>{level.name}</td>
                    <td>{level.created_at}</td>
                    <td>{level.updated_at}</td>
                    <td>
                      <Link to={`/admin/level/${level.id}/edit`}>
                        <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faEdit} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => confirmDelete({ id: level.id, actionDelete: deleteLevel, nameId: 'levelId' })
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

export default connect(levelAdminSelector, { getLevelAdminData, deleteLevelAdminData })(LevelAdminForm);
