// @flow
import React from 'react';

import '../../styles/remindCard.css';

type Props = {
  vocabulary: Object;
}
const RemindCard = (props: Props) => {
  const { vocabulary } = props;
  return (
    <>
      <span className="word_en">{vocabulary.word_en}  :</span>
      <span className="word_vi">  {vocabulary.word_vi}</span>
    </>
  );
};

export default RemindCard;
