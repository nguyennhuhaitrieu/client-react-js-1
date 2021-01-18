// @flow
import React, { useEffect } from 'react';
import {
  withFormik,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import GenresForm from '../forms/GenresForm';
import { newGenresAdminData, genresAdminSelectedData, updateGenresAdminData } from '../../../actions/adminActions';

import { genresAdminSelector } from '../../../selectors/genresAdminSelector';

const validation = Yup.object().shape({
  name: Yup.string()
    .required('Genres name is required'),
});

type Props = {
  values: Object,
  touched: Function,
  errors: Object,
  handleChange: Function,
  handleBlur: Function,
  handleSubmit: Function,
  genresAdminSelectedData: Function,
  match: Object;
}

const EditGenresAdminForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    genresAdminSelectedData: genresAdminSelected,
  } = props;

  useEffect(() => {
    genresAdminSelected({ genresId: props.match.params.id });
  }, []);

  return (
    <div className="main">
      <section className="new-user">
        <div className="container" id="form-user">

          <div className="new-user-content">
            <h2 className="form-title">Edit Genres</h2>
            <GenresForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              buttonTitle="Edit Genres"
            />

          </div>

        </div>
      </section>
    </div>
  );
};

const EditGenres = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { genresSelected: { id, name }
    = { id: '', name: '' } } = props;
    return { id, name };
  },

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { updateGenresAdminData: updateGenres } } = formikBag;
    updateGenres({ values, meta: { setErrors } });
  },

})(EditGenresAdminForm);

export default connect(genresAdminSelector, { newGenresAdminData, genresAdminSelectedData, updateGenresAdminData })(EditGenres);
