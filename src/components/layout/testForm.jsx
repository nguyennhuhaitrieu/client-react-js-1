// @flow
import React from 'react';
import QuesAnsForm from '../testForms/quesAnsForm';
import '../../styles/testVocabulary.css';

const testForm = () => (
  <div className="container ">
    <div className="test-container">
      {/* <div className="d-flex">
        <a href="#0" className="brk-btn mr-2">Test With Context</a>
        <a href="#0" className="brk-btn">Test With Vocabulary</a>

      </div> */}
      <h2 className="test-title mb-3">Vocabulary Test</h2>
      <QuesAnsForm />
    </div>
  </div>
);
export default testForm;
