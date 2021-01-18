// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faUserPlus, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { getListUserData, deleteUserData } from '../../../actions/vimActions';
import { resetPasswordAdmin } from '../../../actions/adminActions';
import { listUserSelector } from '../../../selectors/listUserSelector';
import Pagination from '../../paginations/pagination';
import confirmDelete from '../../alert/confirmDelete';

type Props = {
  getListUserData: Function,
  listUser: Object,
  meta: Object,
  deleteUserData: Function,
  resetPasswordAdmin: Function,

}

const UserAdminForm = (props: Props) => {
  const {
    getListUserData: getListUser,
    listUser,
    meta = { page: 1, items: 1, count: 0 },
    deleteUserData: deleteUser,
    resetPasswordAdmin: resetPassword,
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

  const handleResetPass = (e) => {
    resetPassword(e);
  };

  useEffect(() => {
    if (paginationState.currentPage >= 1) {
      getListUser(paginationState.currentPage);
    }
  }, [paginationState]);

  return (
    <div className="manager-user">
      <h3 className="title-list-user"> Manage users </h3>

      <div className="list-user">
        <Link to="/admin/users/new">
          <button type="submit" className="add-user">
            <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faUserPlus} />
              Add User
          </button>
        </Link>


        <div className="table-user">
          <table className="table table-striped ">
            <thead>
              <tr className="title-field">
                <th scope="col">#</th>
                <th scope="col">Full name</th>
                <th scope="col">Email</th>
                <th scope="col">Birth day</th>
                <th scope="col">Gender</th>
                <th scope="col">Role</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {
                listUser && listUser.map(user => (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.full_name}</td>
                    <td>{user.email}</td>
                    <td>{user.date_of_birth}</td>
                    <td>{user.gender}</td>
                    <td>{user.role}</td>
                    <td>
                      <Link to={`/admin/users/${user.id}/edit`}>
                        <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faEdit} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => confirmDelete({ id: user.id, actionDelete: deleteUser, nameId: 'userId' })
                        }
                      >
                        <FontAwesomeIcon className="star-font icon ion-ios-star action mr-1 ml-1" icon={faTrashAlt} />
                      </button>
                      <button
                        type="button" title="Reset Password"
                        onClick={() => handleResetPass(user.id)}
                      >
                        <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faUndoAlt} />
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

export default connect(listUserSelector, { getListUserData, deleteUserData, resetPasswordAdmin })(UserAdminForm);
