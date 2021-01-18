// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';

import { getSubtitlesAdminData, deleteSubtitlesAdminData } from '../../../actions/adminActions';
import { subtitlesAdminSelector } from '../../../selectors/subtitlesAdminSelector';
import Pagination from '../../paginations/pagination';
import confirmDelete from '../../alert/confirmDelete';
import '../../../styles/admin/subtitles.css';

type Props={
  getSubtitlesAdminData: Function,
  deleteSubtitlesAdminData: Function,
  subtitles: Object,
  meta: Obect;
}

const SubtitlesAdminForm = (props: Props) => {
  const {
    getSubtitlesAdminData: getSubtitles,
    subtitles,
    deleteSubtitlesAdminData: deleteSubtitles,
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
      getSubtitles({ page: paginationState.currentPage });
    }
  }, [paginationState]);

  return (
    <div className="manager-user">

      <h3 className="title-list-user"> Manage Subtitles </h3>

      <div className="list-user">
        <Link to="/admin/subtitles/new">
          <button type="submit" className="add-user">
            <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faPlusCircle} />
              Add Subtitles
          </button>
        </Link>


        <div className="table-user" id="style-4">
          <table className="table table-striped ">
            <thead>
              <tr className="title-field">
                <th scope="col">#</th>
                <th scope="col">Movie</th>
                <th scope="col">Name</th>
                <th scope="col">Subtitle</th>
                <th scope="col">Video Url</th>
                <th scope="col">title</th>
                <th scope="col">Updated At</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {
                subtitles && subtitles.map(episodes => (
                  <tr key={episodes.id}>
                    <th scope="row">{episodes.id}</th>
                    <td>{episodes.movie && episodes.movie.title_en}</td>
                    <td>{episodes.name}</td>
                    <td>
                      <span
                        title={episodes.subtitle}
                      >
                        <ShowMoreText
                          lines={1}
                          more=""
                        >
                          {episodes.subtitle}
                        </ShowMoreText>
                      </span>
                    </td>
                    <td>{episodes.video_url}</td>
                    <td>{episodes.title}</td>
                    <td>{episodes.updated_at}</td>
                    <td>
                      <Link to={`/admin/subtitles/${episodes.id}/edit`}>
                        <FontAwesomeIcon className="star-font icon ion-ios-star action" icon={faEdit} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => confirmDelete({ id: episodes.id, actionDelete: deleteSubtitles, nameId: 'subtitlesId' })
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

export default connect(subtitlesAdminSelector, { getSubtitlesAdminData, deleteSubtitlesAdminData })(SubtitlesAdminForm);
