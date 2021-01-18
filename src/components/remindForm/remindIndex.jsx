// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShowMoreText from 'react-show-more-text';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { getVocabularyTestData, getNextRemindVocabularyData } from '../../actions/vimActions';
import { vocabularyRemindSelector } from '../../selectors/remindVocabularySelector';

import '../../styles/remind.css';


type Props = {
  auth: Object,
  listVocabularies: Object,
  getVocabularyTestData: Function,
  getNextRemindVocabularyData: Function,
}

const RemindIndex = (props: Props) => {
  const {
    auth,
    getVocabularyTestData: getVocabularytest,
    getNextRemindVocabularyData: getNextRemindVocabulary,
    listVocabularies,
  } = props;

  useEffect(() => {
    getVocabularytest({ token: auth.token, currentUserID: auth.user.id, page: 1 });
  }, []);

  const getNextVocabulary = (e) => {
    if (listVocabularies.meta.next_page) {
      getNextRemindVocabulary({ token: auth.token, currentUserID: auth.user.id, page: listVocabularies.meta.next_page });
    } else {
      e.target.innerText = 'Full';
      e.target.disabled = true;
    }
  };
  return (
    <div className="container">
      <div className="row row-remind">
        {listVocabularies.vocabularies && listVocabularies.vocabularies.map(vocabulary => (
          <div key={vocabulary.id} className="card-content-remind">
            <div
              className="my-2 p-relative bg-white shadow-1 blue-hover"
              style={{ minHeight: '418px', overflow: 'hidden', borderRadius: '1px' }}
            >
              <img
                style={{ height: '255px' }}
                src={vocabulary.movies && vocabulary.movies.image_url} alt=""
                className="d-block w-full"
              />
              <div className="px-2 py-2">
                <h1
                  className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1 word_en_remind_card"
                  style={{ lineHeight: '1.25', textAlign: '-webkit-auto' }}
                  title={vocabulary.word_en}
                >
                  {vocabulary.word_en}
                </h1>
                <p
                  className="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px word_en_remind_card"
                  title={vocabulary.word_vi}
                >
                  {vocabulary.word_vi}
                </p>

                <ShowMoreText
                  lines={1}
                  more={<FontAwesomeIcon className="star-font icon ion-ios-star" icon={faEllipsisH} />}
                  less={<FontAwesomeIcon className="star-font icon ion-ios-star" icon={faEllipsisH} />}
                  anchorClass="btn-showmore-less bcd"
                >
                  {vocabulary.sub_text}
                </ShowMoreText>
              </div>
            </div>
          </div>
        )
        )
        }
      </div>
      <div className="showmore-remind">
        <button type="button" className="form__btn showmore-btn" onClick={(e) => getNextVocabulary(e)}>Show More</button>
      </div>
    </div>
  );
};
export default connect(vocabularyRemindSelector, { getVocabularyTestData, getNextRemindVocabularyData })(RemindIndex);
