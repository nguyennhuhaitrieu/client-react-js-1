import React from 'react';
import '../../styles/newFilm.css';
import NewFilmCard from '../cards/NewFilmCard';
import Pagination from '../paginations/pagination';
import '../../styles/pagination.css';

const NewFilmForm = (props) => {
  const {
    newFilms = [],
    meta: { current_page = 1, total_pages, total_entries = 0 } = {},
    onPageChanged,
  } = props;

  const headerClass = [
    'text-dark py-2 pr-2 m-0',
    current_page ? 'border-gray border-right' : '',
  ];
  return (
    <div className="newfilm-container">
      <div className="row py-5">
        {
          newFilms && newFilms.map(film => <NewFilmCard film={film} key={film.id} />)
        }
        <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
          <div className="pl-5 d-flex flex-row align-items-center">
            <h2 className={headerClass}>
              <strong className="text-secondary">{total_entries}</strong>{' '}
                Films
            </h2>
            {current_page && (
              <span className="current-page d-inline-block h-100 pl-2 text-secondary">
                  Page <span className="font-weight-bold">{current_page}</span> /{' '}
                <span className="font-weight-bold">{total_pages}</span>
              </span>
            )}
          </div>
          <div className="d-flex flex-row py-4 align-items-center">
            <Pagination
              totalRecords={total_entries}
              pageLimit={newFilms.length}
              pageNeighbours={2}
              currentPage={current_page}
              onPageChanged={onPageChanged}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFilmForm;
