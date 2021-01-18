// @flow
import React, { useEffect } from 'react';
import {
  withFormik,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import MoviesForm from '../forms/MoviesForm';

import { newMoviesAdminData, moviesAdminSelectedData, updateMoviesAdminData } from '../../../actions/adminActions';

import { moviesAdminSelector } from '../../../selectors/moviesAdminSelector';

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
  moviesAdminSelectedData: Function,
  match: Object;
}


const EditMoviesAdminForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    moviesAdminSelectedData: moviesAdminSelected,
  } = props;

  useEffect(() => {
    moviesAdminSelected({ moviesId: props.match.params.id });
  }, []);

  return (
    <div className="main">
      <section className="new-user">
        <div className="container" id="form-user">

          <div className="new-user-content">
            <h2 className="form-title">Edit Movies</h2>
            <MoviesForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              buttonTitle="Edit Movies"
            />

          </div>

        </div>
      </section>
    </div>
  );
};

const EditMovies = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const {
      moviesSelected: {
        id = '',
        description = '',
        title_en = '',
        category_id = '',
        genres = [],
        level_id = '',
        total_episodes = '',
        image_url = '',
      },
    } = props;
    return { id, description, title_en, category_id, genres, level_id, total_episodes, image_url };
  },

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { updateMoviesAdminData: updateMovies } } = formikBag;
    updateMovies({ values, meta: { setErrors } });
  },

})(EditMoviesAdminForm);

export default connect(moviesAdminSelector, { newMoviesAdminData, moviesAdminSelectedData, updateMoviesAdminData })(EditMovies);
