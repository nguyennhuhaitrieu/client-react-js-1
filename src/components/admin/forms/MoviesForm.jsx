/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Form,
  Field,
} from 'formik';
import { getAllCategoryAdminData, getAllGenresAdminData, getAllLevelAdminData } from '../../../actions/adminActions';

import MultiSelect from '../../select/multiSelect';
import { newMoviesFormAdminSelector } from '../../../selectors/moviesAdminSelector';
import '../../../styles/admin/user.css';
import '../../../styles/admin/movie.css';

const MoviesForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    buttonTitle,
    getAllCategoryAdminData: getAllCategory,
    getAllGenresAdminData: getAllGenres,
    getAllLevelAdminData: getAllLevel,
    setFieldValue,
  } = props;

  useEffect(() => {
    getAllCategory();
    getAllGenres();
    getAllLevel();
  }, []);

  const option_categories = ({ categories = [] }) => categories.reduce((options, e) => {
    options.push({ id: e.id, value: e.id, label: e.name });
    return options;
  }, []);

  const option_genres = ({ genres }) => (genres || []).reduce((options, e) => {
    options.push({ id: e.id, value: e.id, label: e.name });
    return options;
  }, []);

  const option_levels = ({ levels = [] }) => levels.reduce((options, e) => {
    options.push({ id: e.id, value: e.id, label: e.name });
    return options;
  }, []);

  const [file, setImageUrl] = useState();

  const handleChangeImage = (event) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]));
    setFieldValue('image_url', event.target.files[0]);
  };

  return (
    <Form id="signup-form" className="signup-form" onSubmit={handleSubmit}>
      <div className="form-group-field">
        <label className="title-field">English Title</label>
        <Field
          type="text" className="form-input" name="title_en" id="title_en"
          placeholder="English Title"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values && values.title_en}
        />
        {errors.title_en && touched.title_en && (
          <div className="error">
            {errors.title_en}
          </div>
        )}
      </div>

      <div className="form-group-field d-flex">
        <label className="title-field">Image</label>
        <div className="image-picture-movie">
          <input
            name="image_url"
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
            className="btn input-file-modal"
            onChange={event => handleChangeImage(event, setFieldValue)}
            onBlur={handleBlur}
          />
          {errors.image_url && touched.image_url && (
            <div className="error-modal">
              {errors.image_url}
            </div>
          )}
          <img
            className="img-post-modal"
            src={buttonTitle === 'Edit Movies' ? values.image_url : file}
            alt=""
          />
        </div>
      </div>


      <div className="form-group-field">
        <label className="title-field">Total Episode</label>
        <Field
          type="number" className="form-input"
          name="total_episodes" id="total_episodes"
          placeholder="Total Episodes (Only Number)"
          value={values && values.total_episodes}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.total_episodes && touched.total_episodes && (
          <div className="error">
            {errors.total_episodes}
          </div>
        )}
      </div>


      <div className="form-group-field d-flex">
        <label className="title-field">Category</label>
        <select
          className="form-control select"
          style={{ width: '85%', fontSize: '14px', color: 'hsl(0,0%,50%)' }}
          name="category_id"
          value={values.category_id}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {
            option_categories(props).map(category => (
              <option key={category.id} value={category.id}>{category.label}</option>
            ))
          }
        </select>
        {errors.level && touched.level && (
          <div className="error">
            {errors.level}
          </div>
        )}
      </div>

      <div className="form-group-field birthday">
        <label className="title-field title-birthday">Genres</label>
        <div style={{ marginLeft: '90px' }}>
          <MultiSelect
            name="genres"
            options={option_genres(props)}
            placeholder="choose genres"
            defaultValue={option_genres(values)}
          />
        </div>
        {errors.genres && touched.genres && (
          <div className="error">
            {errors.genres}
          </div>
        )}
      </div>
      <div className="forms form-group-field gender mt-3 pl-2">
        <label className="title-field mt-1">Level</label>
        <select
          className="form-control select"
          style={{ width: '75%', fontSize: '14px', color: 'hsl(0,0%,50%)', paddingLeft: '17px' }}
          name="level_id"
          value={values.level_id}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {
            option_levels(props).map(level => (
              <option key={level.id} value={level.id}>{level.label}</option>
            ))
          }
        </select>
        {errors.level_id && touched.level_id && (
          <div className="error">
            {errors.level_id}
          </div>
        )}
      </div>

      <div className="form-group-field">
        <label className="title-field">Description</label>
        <textarea
          className="form-input" name="description" id="description"
          placeholder="Description"
          style={{ width: '85%', minHeight: '300px' }}
          value={values && values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.description && touched.description && (
          <div className="error">
            {errors.description}
          </div>
        )}
      </div>

      <div className="form-group-field">
        <input
          type="submit" name="submit" id="submit" className="account-submit mr-2"
          value={buttonTitle}
        />
        <Link
          to="/admin/movies"
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

export default connect(newMoviesFormAdminSelector,
  {
    getAllCategoryAdminData,
    getAllGenresAdminData,
    getAllLevelAdminData,
  })(MoviesForm);
