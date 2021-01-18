// @flow
import React, { useEffect } from 'react';
import {
  withFormik,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import LevelForm from '../forms/LevelForm';
import { newLevelAdminData, levelAdminSelectedData, updateLevelAdminData } from '../../../actions/adminActions';

import { levelAdminSelector } from '../../../selectors/levelAdminSelector';

const validation = Yup.object().shape({
  name: Yup.string()
    .required('Level name is required'),
});

type Props = {
  values: Object,
  touched: Function,
  errors: Object,
  handleChange: Function,
  handleBlur: Function,
  handleSubmit: Function,
  levelAdminSelectedData: Function,
  match: Object;
}

const EditLevelAdminForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    levelAdminSelectedData: levelAdminSelected,
  } = props;

  useEffect(() => {
    levelAdminSelected({ levelId: props.match.params.id });
  }, []);

  return (
    <div className="main">
      <section className="new-user">
        <div className="container" id="form-user">

          <div className="new-user-content">
            <h2 className="form-title">Edit Level</h2>
            <LevelForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              buttonTitle="Edit Level"
            />

          </div>

        </div>
      </section>
    </div>
  );
};

const EditLevel = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { levelSelected: { id, name }
    = { id: '', name: '' } } = props;
    return { id, name };
  },

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { updateLevelAdminData: updateLevel } } = formikBag;
    updateLevel({ values, meta: { setErrors } });
  },

})(EditLevelAdminForm);

export default connect(levelAdminSelector, { newLevelAdminData, levelAdminSelectedData, updateLevelAdminData })(EditLevel);
