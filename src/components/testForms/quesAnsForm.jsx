/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React, { useEffect, useState } from 'react';
import {
  withFormik,
  FormikBag,
  Form,
  ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCannabis, faExclamationTriangle, faCheckDouble, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import history from '../../utils/history';

import { getVocabularyTestData } from '../../actions/vimActions';
import { vocabularyTestSelector } from '../../selectors/vocabularyTestSelector';
import '../../styles/testVocabulary.css';
import QuesAnsDetailForm from './quesAnsDetailForm';

type Props = {
  getVocabularyTestData: Function;
  auth: Object;
  vocabularyTest: Object;
  handleSubmit: Function;
  setFieldValue: Function;
  touched: Function;
  errors: Object;
  isSubmitting: Boolean;
  result: Object;
  values: Object;
  submitCount: Object;
  setSubmitting: Function;
}

const QuesAns = (props: Props) => {
  const {
    handleSubmit,
    getVocabularyTestData: getVocabularytest,
    auth,
    vocabularyTest,
    setFieldValue,
    touched,
    errors,
    isSubmitting,
    values,
    submitCount,
    setSubmitting,
  } = props;
  const { result } =  vocabularyTest;

  useEffect(() => {
    getVocabularytest({ token: auth.token, currentUserID: auth.user.id, page: 1 });
  }, []);

  const [status, setSubmitStatus] = useState('submit');

  const getNextTest = () => {
    const page = vocabularyTest.meta.next_page;
    if (page) {
      setSubmitStatus('submit');
      getVocabularytest({ token: auth.token, currentUserID: auth.user.id, page });
      setSubmitting(false);
    } else {
      setSubmitStatus('full');
    }
  };

  const fullClick = () => {
    history.push('/home');
  };

  useEffect(() => {
    if (isSubmitting) {
      setSubmitStatus('next');
    }
  }, [isSubmitting]);

  return (
    <Form onSubmit={handleSubmit}>
      {isSubmitting && status === 'next' && <h3 className="test-title-remind">Choose the vocabulary you want to keep reminding</h3>}
      <ErrorMessage component="div" name="messages" id="messages" />
      {
        vocabularyTest.vocabularies && vocabularyTest.vocabularies.map((vocabulary, i) => {
          const index = i + 1;
          const { sub_text } = vocabulary;
          const newText = sub_text.replace(`${vocabulary.word_en}`, '__________');

          return (
            <div key={vocabulary.id} className="row">
              <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-11">
                <span className="question-title mr-1">
                  {
                    isSubmitting && values[`choice-${vocabulary.id}`] === result[i]
                        && <FontAwesomeIcon className="star-font icon ion-ios-star icon-question" icon={faCheckDouble} />
                  }
                  {
                    isSubmitting && values[`choice-${vocabulary.id}`] !== result[i]
                        && <FontAwesomeIcon className="star-font icon ion-ios-star icon-question" icon={faExclamationTriangle} />
                  }
                  {
                    !isSubmitting && <FontAwesomeIcon className="star-font icon ion-ios-star icon-question" icon={faCannabis} />
                  }
      Question {index}:
                </span>
                <span className="answer-title">
                  {newText}
                </span>
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-1">
                {
                  isSubmitting && <FontAwesomeIcon className="star-font icon ion-ios-star icon-question fa-2x" icon={faCalendarCheck} />
                }
              </div>
              <QuesAnsDetailForm {...{ vocabulary, index, setFieldValue, touched, errors, isSubmitting, result, values, submitCount, status }} />
            </div>
          );
        })
      }

      {isSubmitting === false && <button type="submit" className="btn--submit btn--future mb-4">Submit</button>}
      {isSubmitting === true && status === 'next' && <button type="button" className="btn--submit btn--future mb-4" onClick={() => getNextTest()}>Next</button>}
      {status === 'full' && <button onClick={() => fullClick()} type="button" className="btn--submit btn--future mb-4">Full</button>}

    </Form>
  );
};

const QuesAnsForm = withFormik({
  validationSchema: (props) => {
    const { vocabularyTest: { vocabularies = [] } = {} } = props;
    const schema = vocabularies.reduce((validations, vocabulary) => {
      const { id } = vocabulary;
      return {
        ...validations,
        [`choice-${id}`]: Yup.string().required('You must Choice Answer !'),
      };
    }, {});
    return Yup.object().shape(schema);
  },
  mapPropsToValues: () => {},
  handleSubmit: () => {
    // const { props: { vocabularyTest }, resetForm } = formikBag;
    // resetForm({});
    // const objChoice = {};
    // vocabularyTest.vocabularies.map((vocabulary, index) => {
    //   const choice = `choice-${index + 1}`;
    //   if (objectSize(values) < 5 && !values[choice]) {
    //     objChoice[choice] = 'You must Choice Answer !';
    //   }
    // return setErrors({ objChoice });
  },
})(QuesAns);

export default connect(vocabularyTestSelector, { getVocabularyTestData })(QuesAnsForm);
