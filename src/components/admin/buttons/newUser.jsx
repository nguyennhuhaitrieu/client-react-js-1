// @flow
import React from 'react';
import {
  withFormik,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import UserForm from '../forms/UserForm';
import { newUserData } from '../../../actions/vimActions';

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
}

const NewUserAdminForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
  } = props;

  return (
    <div className="main">
      <section className="new-user">
        <div className="container" id="form-user">

          <div className="new-user-content">
            <h2 className="form-title">Create account</h2>
            <UserForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              buttonTitle="Create Account"
            />

          </div>

        </div>
      </section>
    </div>
  );
};

const NewUser = withFormik({
  mapPropsToValues: () => ({
    full_name: '',
    email: '',
    date_of_birth: '',
    gender: '0',
    password: '',
    password_confirmation: '',
    role: '0',
  }),

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { newUserData: newUSer } } = formikBag;
    newUSer({ values, meta: { setErrors } });
  },

})(NewUserAdminForm);

export default connect(null, { newUserData })(NewUser);
