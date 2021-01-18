// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';


import RemindCard from '../cards/remindCard';
import { vocabulariesSelector } from '../../selectors/remindVocabularySelector';

type Props = {
  isRemind: Boolean;
  listVocabularies: Object;
}
let timeoutId = null;
const RemindNotification = (props: Props) => {
  const {
    isRemind,
    listVocabularies: data = [],
  } = props;

  const [index, setIndex] = useState(0);
  const shouldShowRemind = () => isRemind && data.length > index;
  const showRemind = () => {
    setIndex(index + 1);
    toast(<RemindCard vocabulary={data[index]} />, { containerId: 'toastContainerId' });
  };

  useEffect(() => {
    clearTimeout(timeoutId);
    setIndex(0);
  }, [data]);

  useEffect(() => () => {
    clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (shouldShowRemind()) {
      timeoutId = setTimeout(showRemind, 15000);
    } else {
      clearTimeout(timeoutId);
    }
  }, [data, isRemind, index]);

  return <React.Fragment />;
};

export default connect(vocabulariesSelector, null)(RemindNotification);
