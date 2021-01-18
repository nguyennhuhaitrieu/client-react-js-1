// @flow
import React, { useEffect } from 'react';
import {
  withFormik,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import UserForm from '../forms/UserForm';
import { editUserData, updateUserData } from '../../../actions/vimActions';
import { getUserSelector } from '../../../selectors/userSelector';

const validation = Yup.object().shape({
  full_name: Yup.string()
    .required('Full name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    // .required('Password is required')
    .min(6, 'Password must have min 6 characters'),
  password_confirmation: Yup.string()
    // .required('Password confirmation is required')
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
  editUserData: Function,
  match: Object;
}

const EditUserAdminForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    editUserData: editUser,
  } = props;

  useEffect(() => {
    editUser(props.match.params.id);
  }, []);

  return (
    <div className="main">
      <section className="new-user">
        <div className="container" id="form-user">
          <div className="new-user-content">
            <h2 className="form-title">Edit account</h2>
            <UserForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              buttonTitle="Update Account"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const EditUser = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { user: { id, full_name, email, date_of_birth, gender, role }
    = { id: '', full_name: '', email: '', date_of_birth: '', gender: '0', role: '0' } } = props;

    return {
      id,
      full_name,
      email,
      date_of_birth,
      gender: gender === 'male' ? '0' : '1',
      role: role === 'member' ? '0' : '1',
    };
  },
  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { updateUserData: updateUser } } = formikBag;

    updateUser({ values, meta: { setErrors } });
  },
})(EditUserAdminForm);

export default connect(getUserSelector, { editUserData, updateUserData })(EditUser);
