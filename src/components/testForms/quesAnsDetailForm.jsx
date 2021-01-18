/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React from 'react';
import { connect } from 'react-redux';
import {
  Field,
} from 'formik';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckDouble, faEgg } from '@fortawesome/free-solid-svg-icons';
// import objectSize from '../../utils/objectUtils';

import { getVocabularyTestData } from '../../actions/vimActions';
import { vocabularyTestSelector } from '../../selectors/vocabularyTestSelector';
import '../../styles/testVocabulary.css';

type Props = {
  index: Number;
  vocabulary: Object;
  setFieldValue: Function,
  touched: Function,
  errors: Object,
  isSubmitting: Boolean,
  result: Object;
  values: Object;
  submitCount: Number;
}

const QuesAnsDetailForm = (props: Props) => {
  const { vocabulary, index, setFieldValue, touched, errors, isSubmitting, result, values, submitCount } = props;

  const setAnswer = (event) => {
    const { value, name } = event.target;
    setFieldValue(name, value);
  };

  const inputName = `choice-${vocabulary.id}`;
  const selectedValue = values[inputName];

  return (
    <ul className="list-answer">
      {
        vocabulary.words && vocabulary.words.map((r, ii) => (
          <li key={ii} className="list-answer__item d-flex">
            <Field
              type="radio"
              name={inputName}
              onClick={setAnswer}
              value={r}
              text={r}
              id={`choice-${index}-${ii}`}
              className="radio-btn"
              checked={selectedValue === r}
            />
            <label
              htmlFor={`choice-${index}-${ii}`}
              className={isSubmitting && result[index - 1] === r && selectedValue !== r ? 'label mr-3 correct-answer' : 'label mr-3'}
            >{r}
            </label>
          </li>
        )
        )
      }
      { !touched[inputName] && submitCount > 0 && (
        <>
          <div className="error-test-form">{errors[inputName]}</div>
        </>
      )}
    </ul>
  );
};

export default connect(vocabularyTestSelector, { getVocabularyTestData })(QuesAnsDetailForm);
