// @flow
import React, { useEffect } from 'react';
import {
  withFormik,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import SubtitlesForm from '../forms/SubtitlesForm';

import { newSubtitlesAdminData, subtitlesAdminSelectedData, updateSubtitlesAdminData } from '../../../actions/adminActions';

import { subtitlesAdminSelector } from '../../../selectors/subtitlesAdminSelector';

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
  subtitlesAdminSelectedData: Function,
  match: Object;
}


const EditSubtitlesAdminForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    subtitlesAdminSelectedData: subtitlesAdminSelected,
  } = props;

  useEffect(() => {
    subtitlesAdminSelected({ subtitlesId: props.match.params.id });
  }, []);

  return (
    <div className="main">
      <section className="new-user">
        <div className="container" id="form-user">

          <div className="new-user-content">
            <h2 className="form-title">Edit Subtitles</h2>
            <SubtitlesForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              buttonTitle="Edit Subtitles"
            />

          </div>

        </div>
      </section>
    </div>
  );
};

const EditSubtitles = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const {
      subtitlesSelected: {
        id = '',
        movie = '',
        title = '',
        name = '',
        video_url = '',
        subtitle = '',
      },
    } = props;
    return { id, movie_id: movie, title, name, subtitle, video_url };
  },

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { updateSubtitlesAdminData: updateSubtitles } } = formikBag;
    updateSubtitles({ values, meta: { setErrors } });
  },

})(EditSubtitlesAdminForm);

export default connect(subtitlesAdminSelector, { newSubtitlesAdminData, subtitlesAdminSelectedData, updateSubtitlesAdminData })(EditSubtitles);
