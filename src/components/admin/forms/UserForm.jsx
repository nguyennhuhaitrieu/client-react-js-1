/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Form,
  Field,
} from 'formik';
import validateDate from '../../../validation/validateDate';
import '../../../styles/admin/user.css';

const UserForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    buttonTitle,
  } = props;

  return (
    <Form id="signup-form" className="signup-form" onSubmit={handleSubmit}>
      <div className="form-group-field">
        <label className="title-field">Name</label>
        <Field
          type="text" className="form-input" name="full_name" id="full_name"
          placeholder="Your Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values && values.full_name}
        />
        {errors.full_name && touched.full_name && (
          <div className="error">
            {errors.full_name}
          </div>
        )}
      </div>
      <div className="form-group-field">
        <label className="title-field">Email</label>
        <Field
          type="email" className="form-input" name="email" id="email"
          placeholder="Your Email"
          value={values && values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error">
            {errors.email}
          </div>
        )}
        {errors.api && errors.api.email.map(e => <div key={e.id} className="error">{e}</div>)}
      </div>
      <div className="form-group-field birthday">
        <label className="title-field title-birthday">Birthday</label>
        <Field
          validate={validateDate}
          name="date_of_birth"
          className="form-input inputGroup form-group-field-dob"
          type="date"
          placeholder="Birthday"
          value={values && values.date_of_birth}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.date_of_birth && touched.date_of_birth && (
          <div className="error">
            {errors.date_of_birth}
          </div>
        )}
      </div>
      <div className="forms form-group-field gender">
        <label className="title-field title-gender">Gender</label>
        <label htmlFor="rdo1">
          <Field
            type="radio" id="rdo1" name="gender" value="0"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={(values && values['gender']) === '0'}
          />
          <span className="rdo" />
          <span>Male</span>
        </label>

        <label htmlFor="rdo2">
          <Field
            type="radio" id="rdo2" name="gender" value="1"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={(values && values['gender']) === '1'}
          />
          <span className="rdo" />
          <span>Female</span>
        </label>
      </div>
      {buttonTitle === 'Create Account' && (
      <>
        <div className="form-group-field">
          <label className="title-field title-password">password</label>
          <Field
            name="password"
            className="form-input"
            type="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <div className="error">
              {errors.password}
            </div>
          )}
        </div>

        <div className="form-group-field">
          <label className="title-field">Password confirmation</label>
          <Field
            name="password_confirmation"
            className="form-input"
            type="password"
            placeholder="Repeat Password"
            value={values.password_confirmation}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password_confirmation && touched.password_confirmation && (
            <div className="error">
              {errors.password_confirmation}
            </div>
          )}
        </div>
      </>
      )
      }
      <div className="forms form-role">
        <label className="title-field">Role</label>
        <label htmlFor="rdo3">
          <Field
            type="radio" id="rdo3" name="role" value="1"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={(values && values['role']) === '1'}
          />
          <span className="rdo" />
          <span>Admin</span>
        </label>

        <label htmlFor="rdo4">
          <Field
            type="radio" id="rdo4" name="role" value="0"
            onChange={handleChange}
            onBlur={handleBlur}
            checked={(values && values['role']) === '0'}
          />
          <span className="rdo" />
          <span>Member</span>
        </label>
      </div>


      <div className="form-group-field">
        <input
          type="submit" name="submit" id="submit" className="account-submit mr-2"
          value={buttonTitle}
        />
        <Link
          to="/admin/users"
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

export default UserForm;
