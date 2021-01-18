// @flow
import React from 'react';
import {
  withFormik,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import GenresForm from '../forms/GenresForm';
import { newGenresAdminData } from '../../../actions/adminActions';

type Props = {
  values: Object,
  touched: Function,
  errors: Object,
  handleChange: Function,
  handleBlur: Function,
  handleSubmit: Function,
}
const validation = Yup.object().shape({
  name: Yup.string()
    .required('Genres name is required'),
});

const NewGenresAdminForm = (props: Props) => {
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
            <h2 className="form-title">Create Genres</h2>
            <GenresForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              buttonTitle="Create Genres"
            />

          </div>

        </div>
      </section>
    </div>
  );
};

const NewGenres = withFormik({
  mapPropsToValues: () => ({
    name: '',
  }),

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { newGenresAdminData: newGenres } } = formikBag;
    newGenres({ values, meta: { setErrors } });
  },

})(NewGenresAdminForm);

export default connect(null, { newGenresAdminData })(NewGenres);
