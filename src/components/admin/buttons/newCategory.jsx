// @flow
import React from 'react';
import {
  withFormik,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import CategoryForm from '../forms/CategoryForm';
import { newCategoryAdminData } from '../../../actions/adminActions';

const validation = Yup.object().shape({
  name: Yup.string()
    .required('Category name is required'),
});

type Props = {
  values: Object,
  touched: Function,
  errors: Object,
  handleChange: Function,
  handleBlur: Function,
  handleSubmit: Function,
}

const NewCategoryAdminForm = (props: Props) => {
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
            <h2 className="form-title">Create Category</h2>
            <CategoryForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              buttonTitle="Create Category"
            />

          </div>

        </div>
      </section>
    </div>
  );
};

const NewCategory = withFormik({
  mapPropsToValues: () => ({
    name: '',
  }),

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { newCategoryAdminData: newCategory } } = formikBag;
    newCategory({ values, meta: { setErrors } });
  },

})(NewCategoryAdminForm);

export default connect(null, { newCategoryAdminData })(NewCategory);
