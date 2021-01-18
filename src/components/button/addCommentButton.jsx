// @flow
import React from 'react';
import { connect } from 'react-redux';
import {
  withFormik,
  FormikBag,
  Form,
  Field,
} from 'formik';

import * as Yup from 'yup';

import { authSelector } from '../../selectors/authSelector';
import { addCommentData, saveModalSelectedData, editCommentData } from '../../actions/vimActions';
import '../../styles/comment.css';

type Props = {
  auth: Object;
  addCommentData: Function,
  values: Object,
  touched: Function,
  errors: Object,
  handleChange: Function,
  handleBlur: Function,
  handleSubmit: Function,
}

const validation = Yup.object().shape({
  content: Yup.string()
    .max(1500, 'must have max 1500 characters'),
});


const addComment = (props: Props) => {
  const {
    handleSubmit,
    touched,
    errors,
  } = props;

  return (
    <>
      <Form className="form" onSubmit={handleSubmit}>
        <Field
          name="content"
          render={({ field }) => (
            <textarea
              id="text" {...field} className="form__textarea"
              placeholder="Add Comment (1500 characters)"
            />
          )}
        />
        {errors.content && touched.content && (
          <div className="error-addComment">
            CONTENT {errors.content}
          </div>
        )}
        {
          <button type="submit" className="form__btn">Send</button>
        }

      </Form>
    </>
  );
};

const AddCommentForm = withFormik({
  enableReinitialize: true,

  mapPropsToValues: (props: Props) => {
    const {
      auth,
      commentContent,
      id,
    } = props;

    return {
      content: commentContent[0].content,
      token: auth.token,
      currentUserId: auth.user && auth.user.id,
      commentId: commentContent[0].commentId,
      movieId: id,
    };
  },

  validationSchema: validation,

  handleSubmit: (values, formikBag: FormikBag) => {
    const {
      resetForm,
      setErrors,
      props: {
        auth,
        addCommentData: addNewComment,
        saveModalSelectedData: changeModalSelected,
        editCommentData: editComment,
      },
    } = formikBag;

    if (auth.token) {
      // eslint-disable-next-line no-unused-expressions
      values.commentId ? editComment({ values, resetForm, setErrors }) : addNewComment({ values, resetForm, setErrors });
    } else {
      changeModalSelected('login');
    }
  },
})(addComment);

export default connect(authSelector, { addCommentData, saveModalSelectedData, editCommentData })(AddCommentForm);
