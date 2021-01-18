// @flow
import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  withFormik,
  Field,
  FormikBag,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

import { login } from '../../actions/vimActions';
import '../../styles/signup-login.css';

const validation = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have min 6 characters'),
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
          <h2 className="form-title">Login</h2>
          <ErrorMessage component="div" name="messages" />
          <div className="form-group">
            <Field
              type="email" className="form-input" name="email" id="email"
              placeholder="Your Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && (
              <div className="error">{errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <Field
              type="password" className="form-input" name="password" id="password"
              placeholder="Your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && (
              <div className="error">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <input
              type="submit" name="submit" id="submit" className="form-submit"
              value="Login"
            />
          </div>
        </Form>
        <p className="loginhere">
							Not registered ? <a href="#0" className="loginhere-link">Create an account</a>
        </p>
      </div>
    </div>
  );
};

const LoginForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { login } } = formikBag;
    login({ values, meta: { setErrors } });
  },
})(FormikForm);

export default connect(null, { login })(LoginForm);
