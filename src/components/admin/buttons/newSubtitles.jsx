// @flow
import React from 'react';
import {
  withFormik,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import SubtitlesForm from '../forms/SubtitlesForm';
import { newSubtitlesAdminData } from '../../../actions/adminActions';

const validation = Yup.object().shape({
  title: Yup.string()
    .required('Subtitles Title is required'),
  name: Yup.string()
    .required('Episodes is required'),
  movie_id: Yup.string()
    .required('Movie is required'),
  subtitle: Yup.string()
    .required('Subtitle is required'),
  video_url: Yup.string()
    .required('Video URL is required'),
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

const NewSubtitlesAdminForm = (props: Props) => {
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
            <h2 className="form-title">Create Subtitles</h2>
            <SubtitlesForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              buttonTitle="Create Subtitles"
              {...{ setFieldValue }}
            />

          </div>

        </div>
      </section>
    </div>
  );
};

const NewSubtitles = withFormik({
  mapPropsToValues: () => ({
    movie_id: '',
    title: '',
    name: '',
    video_url: '',
    subtitle: '',
  }),

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { newSubtitlesAdminData: newSubtitlesAdmin } } = formikBag;
    const data = new FormData();
    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        data.append(key, values[key]);
      }
    }

    newSubtitlesAdmin({ values: data, meta: { setErrors } });
  },

})(NewSubtitlesAdminForm);

export default connect(null, { newSubtitlesAdminData })(NewSubtitles);
