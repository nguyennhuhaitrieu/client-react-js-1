// @flow
import React from 'react';
import '../../styles/signup-login.css';
import { connect } from 'react-redux';
import {
  Form,
  withFormik,
  Field,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { signup } from '../../actions/vimActions';
import validateDate from '../../validation/validateDate';

const validation = Yup.object().shape({
  full_name: Yup.string()
    .required('Full name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have min 6 characters'),
  password_confirmation: Yup.string()
    .required('Password confirmation is required')
    .min(6, 'Password confirmation must have min 6 characters')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
type Props = {
  values: Object,
  touched: Function,
  errors: Object,
  handleChange: Function,
  handleBlur: Function,
  handleSubmit: Function,
  changeModalSelected: Function,
};
const FormikForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    changeModalSelected,
  } = props;
  return (
    <div className="container-login-signup">
      <div className="signup-content">
        <button type="button" className="close-button" onClick={() => changeModalSelected('')}>X</button>
        <Form id="signup-form" className="signup-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Create account</h2>
          <div className="form-group">
            <Field
              type="text" className="form-input" name="full_name" id="name"
              placeholder="Your Name"
            />
            {errors.full_name && touched.full_name && (
              <div className="error">
                {errors.full_name}
              </div>
            )}
          </div>
          <div className="form-group">
            <Field
              type="email" className="form-input" name="email" id="email"
              placeholder="Your Email"
            />
            {errors.email && touched.email && (
              <div className="error">
                {errors.email}
              </div>
            )}
          </div>


          <div className="row row-space">
            <div className="col-6 row-space">
              {/* <div className="form-group"> */}
              <Field
                validate={validateDate}
                name="date_of_birth"
                className="inputGroup form-group-dob"
                type="date"
                placeholder="Birthday"
                value={values.date_of_birth}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.date_of_birth && touched.date_of_birth && (
                <div className="error">
                  {errors.date_of_birth}
                </div>
              )}
              {/* </div> */}
            </div>
            <div className="col-6 row-space">
              <div className="inputGroup">
                <input
                  id="radio1"
                  name="gender"
                  type="radio"
                  value="0"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked
                />
                <label htmlFor="radio1">male</label>
              </div>
              <div className="inputGroup">
                <input
                  id="radio2"
                  name="gender"
                  type="radio"
                  value="1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="radio2">female</label>
              </div>
            </div>
          </div>

          <div className="form-group">
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
            <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password" />
          </div>
          <div className="form-group">
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
          <div className="form-group">
            <input
              type="submit" name="submit" id="submit" className="form-submit"
              value="Sign up"
            />
          </div>

        </Form>
        <p className="loginhere">
								Have already an account ? <a href="#0" className="loginhere-link">Login here</a>
        </p>
      </div>
    </div>
  );
};

const SignupForm = withFormik({
  mapPropsToValues: () => ({
    full_name: '',
    email: '',
    date_of_birth: '',
    gender: '0',
    password: '',
    password_confirmation: '',
  }),

  validationSchema: validation,

  handleSubmit: async (values, formikBag: FormikBag) => {
    const { setErrors, props: { signup } } = formikBag;
    await signup({ values, meta: { setErrors } });
  },
})(FormikForm);

export default connect(null, { signup })(SignupForm);
