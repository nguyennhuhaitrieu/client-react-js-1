// @flow
import React from 'react';
import {
  withFormik,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import MoviesForm from '../forms/MoviesForm';
import { newMoviesAdminData } from '../../../actions/adminActions';

const validation = Yup.object().shape({
  title_en: Yup.string()
    .required('Movies Title is required'),
  description: Yup.string()
    .required('Description is required'),
  genres: Yup.array()
    .nullable('Genres is required')
    .required('Genres is required'),
  category_id: Yup.string()
    .required('Genres is required'),
  total_episodes: Yup.string()
    .required('Total Episodes is required'),
  level_id: Yup.string()
    .required('Level is required'),
  image_url: Yup.string()
    .required('Image is required'),
});

type Props = {
  values: Object,
  touched: Function,
  errors: Object,
  handleChange: Function,
  handleBlur: Function,
  handleSubmit: Function,
  setFieldValue: Function,
}

const NewMoviesAdminForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    setFieldValue,
  } = props;

  return (
    <div className="main">
      <section className="new-user">
        <div className="container" id="form-user">

          <div className="new-user-content">
            <h2 className="form-title">Create Movies</h2>
            <MoviesForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              buttonTitle="Create Movies"
              {...{ setFieldValue }}
            />

          </div>

        </div>
      </section>
    </div>
  );
};

const NewMovies = withFormik({
  mapPropsToValues: () => ({
    description: '',
    title_en: '',
    category_id: 1,
    genres: [],
    level_id: 1,
    total_episodes: '',
    views: 0,
    image_url: '',
  }),

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { newMoviesAdminData: newMoviesAdmin } } = formikBag;
    const data = new FormData();
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        data.append(key, values[key]);
      }
    }

    newMoviesAdmin({ values: data, meta: { setErrors } });
  },

})(NewMoviesAdminForm);

export default connect(null, { newMoviesAdminData })(NewMovies);
