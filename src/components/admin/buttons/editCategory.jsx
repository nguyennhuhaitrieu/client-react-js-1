// @flow
import React, { useEffect } from 'react';
import {
  withFormik,
  FormikBag,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import CategoryForm from '../forms/CategoryForm';
import { newCategoryAdminData, categoryAdminSelectedData, updateCategoryAdminData } from '../../../actions/adminActions';

import { categoryAdminSelector } from '../../../selectors/categoryAdminSelector';

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
  categoryAdminSelectedData: Function,
  match: Object;
}

const EditCategoryAdminForm = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    categoryAdminSelectedData: categoryAdminSelected,
  } = props;

  useEffect(() => {
    categoryAdminSelected({ categoryId: props.match.params.id });
  }, []);

  return (
    <div className="main">
      <section className="new-user">
        <div className="container" id="form-user">

          <div className="new-user-content">
            <h2 className="form-title">Edit Category</h2>
            <CategoryForm
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              buttonTitle="Edit Category"
            />

          </div>

        </div>
      </section>
    </div>
  );
};

const EditCategory = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { categorySelected: { id, name }
    = { id: '', name: '' } } = props;
    return { id, name };
  },

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const { setErrors, props: { updateCategoryAdminData: updateCategory } } = formikBag;
    updateCategory({ values, meta: { setErrors } });
  },

})(EditCategoryAdminForm);

export default connect(categoryAdminSelector, { newCategoryAdminData, categoryAdminSelectedData, updateCategoryAdminData })(EditCategory);
