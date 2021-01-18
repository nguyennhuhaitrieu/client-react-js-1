// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getCategoryAdminData, deleteCategoryAdminData } from '../../../actions/adminActions';
import { categoryAdminSelector } from '../../../selectors/categoryAdminSelector';
import Pagination from '../../paginations/pagination';

import confirmDelete from '../../alert/confirmDelete';

type Props={
  getCategoryAdminData: Function,
  deleteCategoryAdminData: Function,
  categories: Object,
  meta: Obect;
}
const CategoryAdminForm = (props: Props) => {
  const {
    getCategoryAdminData: getCategory,
    categories,
    deleteCategoryAdminData: deleteCategory,
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
      getCategory({ page: paginationState.currentPage });
    }
  }, [paginationState]);

  return (
    <div className="manager-user">

      <h3 className="title-list-user"> Manage Cateogries </h3>

      <div className="list-user">
        <Link to="/admin/category/new">
          <button type="submit" className="add-user">
            <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faPlusCircle} />
              Add Categories
          </button>
        </Link>


        <div className="table-user">
          <table className="table table-striped ">
            <thead>
              <tr className="title-field">
                <th scope="col">#</th>
                <th scope="col">Category Name</th>
                <th scope="col">Created At</th>
                <th scope="col">Updated At</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {
                categories && categories.map(category => (
                  <tr key={category.id}>
                    <th scope="row">{category.id}</th>
                    <td>{category.name}</td>
                    <td>{category.created_at}</td>
                    <td>{category.updated_at}</td>
                    <td>
                      <Link to={`/admin/category/${category.id}/edit`}>
                        <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faEdit} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => confirmDelete({ id: category.id, actionDelete: deleteCategory, nameId: 'categoryId' })
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

export default connect(categoryAdminSelector, { getCategoryAdminData, deleteCategoryAdminData })(CategoryAdminForm);
