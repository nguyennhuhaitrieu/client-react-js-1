// @flow
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

import { faLanguage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { getTranslateTextData,
  markVocabularyData,
  getTextSpeechData,
} from '../../actions/vimActions';
import { translateSelector } from '../../selectors/translateSelector';
import '../../styles/subtitile.css';
import '../../styles/poup-expand.css';

type Props= {
  setShow: Function;
  toolTipStyle: Object;
  selectedFilm: Object;
  translateText: String;
  markVocabularyData: Function;
  translateSelectedText: Object;
  getTranslateTextData: Function;
  getTextSpeechData: Function;
  audioContent: String;
  currentUserId: Number;
  subText: String;
  token: String;
  videoRef: any;
};
const Translate = (props: Props) => {
  const { toolTipStyle,
    translateText,
    getTranslateTextData,
    translateSelectedText,
    markVocabularyData,
    getTextSpeechData,
    setShow,
    selectedFilm,
    videoRef,
    audioContent,
    currentUserId,
    token,
    subText,
  } = props;

  const [expandClass, setExpandClass] = useState('');
  const [text, setText] = useState('');
  const [alertVocabulary, setAlertVocabulary] = useState('');

  useEffect(() => {
    if (alertVocabulary !== '') { toast(alertVocabulary, { containerId: 'toastContainerId' }); }
  }, [alertVocabulary]);

  useEffect(() => {
    getTranslateTextData(translateText);
    getTextSpeechData(translateText);
  }, [translateText]);

  useEffect(() => {
    if (translateSelectedText) {
      setText(translateSelectedText[0]['translatedText']);
    }
  }, [translateSelectedText]);

  const markVocabulary = (vocabulary) => {
    const movie_id = selectedFilm.id;
    markVocabularyData({ vocabulary, movie_id, currentUserId, token, setAlertVocabulary, subText });
  };

  return (
    <>
      <div className="container-poup-translate">
        <div
          className={`email ${expandClass}`}
        >
          <div className="from">
            <div className="from-contents">
              <div className="name">
                <a
                  href="#0" className="popuptext button-translate" style={toolTipStyle}
                  id="myPopup"
                  onClick={() => setExpandClass('expand')}
                >
                  <FontAwesomeIcon className="icon ion-ios-language fa-2x" icon={faLanguage} />
                </a>
              </div>
            </div>
          </div>
          <div className="to">
            <div className="to-contents">
              <div className="top">
                <div className="avatar-large me">
                  <FontAwesomeIcon className="icon ion-ios-language fa-2x" icon={faLanguage} />
                </div>
                <div className="name-large">{translateText}</div>
                <div
                  className="x-touch" onClick={(event) => {
                    setShow(false);
                    event.stopPropagation();
                    setExpandClass('');
                    videoRef.current.player.player.player.playVideo();
                  }}
                >
                  <div className="x">
                    <div className="line1" />
                    <div className="line2" />
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="row-poup">
                  <audio controls src={`data:audio/ogg;base64,${audioContent}`} />
                </div>
                <div className="row-poup">
                  <div className="link mark-voca">Mark Vocabulary</div>
                  <span className="link"><FontAwesomeIcon onClick={() => markVocabulary({ translateText, text })} className="icon ion-ios-language fa-lg" icon={faPlus} /></span>
                </div>
                <div className="row-poup-translate">
                  <div id="translate-scroll" className="link text-translate">{text}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
export default connect(translateSelector, { getTranslateTextData, markVocabularyData, getTextSpeechData })(Translate);
