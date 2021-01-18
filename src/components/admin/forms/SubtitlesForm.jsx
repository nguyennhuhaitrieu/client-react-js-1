/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Form,
  Field,
} from 'formik';
import SelectReact from '../../select/selectReact';
import {
  getAllMoviesAdminData,
} from '../../../actions/adminActions';

import { subtitlesAdminSelector } from '../../../selectors/subtitlesAdminSelector';
import '../../../styles/admin/user.css';
// import '../../../styles/admin/subtitle.css';

const MoviesForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    buttonTitle,
    getAllMoviesAdminData: getAllMovies,
    setFieldValue,
  } = props;

  useEffect(() => {
    getAllMovies();
  }, []);

  const option_movies = ({ movies = [] }) => movies.reduce((options, e) => {
    options.push({ id: e.id, value: e.id, label: e.title_en });
    return options;
  }, []);

  const handleChangeImage = (event) => {
    setFieldValue('subtitle', event.target.files[0]);
  };

  return (
    <Form id="signup-form" className="signup-form" onSubmit={handleSubmit}>

      <div
        className="form-group-field d-flex"
        style={{ paddingBottom: '17px' }}
      >
        <label className="title-field">Movie</label>
        <div
          className="form-control select"
          style={{ width: '85%', fontSize: '14px', color: 'hsl(0,0%,50%)' }}
        >
          <SelectReact
            name="movie_id"
            onChange={handleChange}
            onBlur={handleBlur}
            options={option_movies(props)}
            isSearchable={true}
            placeholder="choose Movie"
          />
        </div>
        {errors.movie_id && touched.movie_id && (
          <div className="error">
            {errors.movie_id}
          </div>
        )}
      </div>

      <div className="form-group-field">
        <label className="title-field">Episode</label>
        <Field
          type="number" className="form-input"
          name="name" id="name"
          placeholder="Episodes (Only Number)"
          value={values && values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && (
          <div className="error">
            {errors.name}
          </div>
        )}
      </div>

      <div className="form-group-field">
        <label className="title-field">Title Episode</label>
        <Field
          type="text" className="form-input" name="title" id="title"
          placeholder="Episodes Title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values && values.title}
        />
        {errors.title && touched.title && (
          <div className="error">
            {errors.title}
          </div>
        )}
      </div>

      <div className="form-group-field">
        <label className="title-field">Video Url</label>
        <Field
          type="text" className="form-input" name="video_url" id="video_url"
          placeholder="Video Url"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values && values.video_url}
        />
        {errors.video_url && touched.video_url && (
          <div className="error">
            {errors.video_url}
          </div>
        )}
      </div>
      <div className="form-group-field d-flex">
        <label className="title-field">Subtitle</label>
        <div className="image-picture-subtitle">
          <input
            name="subtitle"
            type="file"
            // accept="srt"
            className="btn input-file-modal"
            onChange={event => handleChangeImage(event, setFieldValue)}
            onBlur={handleBlur}
          />
          {errors.subtitle && touched.subtitle && (
            <div className="error-modal">
              {errors.subtitle}
            </div>
          )}
        </div>
      </div>

      <div className="form-group-field">
        <input
          type="submit" name="submit" id="submit" className="account-submit mr-2"
          value={buttonTitle}
        />
        <Link
          to="/admin/subtitles"
          type="button" className="account-submit"
          style={{
            backgroundColor: '#5f5f5f',
            color: '#fff',
            textAlign: 'center',
            padding: '12px',
            fontSize: 'inherit' }}
        >
        Close
        </Link>
      </div>
    </Form>
  );
};

export default connect(subtitlesAdminSelector, { getAllMoviesAdminData })(MoviesForm);
