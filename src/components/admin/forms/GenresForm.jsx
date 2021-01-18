/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Form,
  Field,
} from 'formik';

const GenresForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values: { name = '' } = {},
    buttonTitle,
  } = props;

  return (
    <Form id="signup-form" className="signup-form" onSubmit={handleSubmit}>

      <div className="form-group-field">
        <label className="title-field">Name</label>
        <Field
          type="text"
          className="form-input"
          name="name"
          id="name"
          placeholder="Your Genres"
          onChange={handleChange}
          onBlur={handleBlur}
          value={name}
        />
        {errors.name && touched.name && (
          <div className="error">
            {errors.name}
          </div>
        )}
      </div>

      <div className="form-group-field d-flex">
        <input
          type="submit" name="submit" id="submit" className="account-submit mr-2"
          value={buttonTitle}
        />

        <Link
          to="/admin/genres"
          type="button" name="close" id="close" className="account-submit"
          style={{ backgroundColor: '#5f5f5f', color: '#fff', textAlign: 'center', padding: '12px' }}
        >
        Close
        </Link>
      </div>
    </Form>
  );
};

export default GenresForm;
