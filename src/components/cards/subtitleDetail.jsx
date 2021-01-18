/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Translate from '../translate/translate';
import '../../styles/subtitile.css';

type Props={
  sub: Object;
  index: Number;
  videoRef: Object;
  refSub: Object;
  currentTime: any;
  subtitle: Object;
  isShow: Function;
  show: any;
  setActivatedSub: Function;
  setShow: Function;
}

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const SubtitleDetail = (props: Props) => {
  const [locationX, setX] = useState(null);
  const [locationY, setY] = useState(null);
  const [translateText, setTranslateText] = useState('');
  const {
    sub,
    index,
    subtitle,
    currentTime,
    videoRef,
    refSub,
    isShow,
    show,
    setActivatedSub,
    setShow,
  } = props;

  const { startTime, endTime } = sub;

  const handleBound = (time) => {
    const changeTime = time / 1000;
    videoRef.current.seekTo(changeTime, 'seconds');
  };

  const selectedText = (event) => {
    // pause Video
    videoRef.current.player.player.player.pauseVideo();
    const text = window.getSelection().toString();
    setTranslateText(text);
    setX(event.nativeEvent.offsetX);
    setY(event.nativeEvent.offsetY);
    show();
  };


  const toolTipStyle = {
    left: locationX,
    top: locationY - 24,
    position: 'absolute',
    zIndex: 10,
  };


  let activeClass = 'sub-default';
  const { current: ref } = refSub[sub.id] || {};
  if (ref) {
    if (currentTime >= startTime && currentTime < (subtitle[index + 1] || {}).startTime) {
      activeClass = 'sub-activated';
      setActivatedSub(ref.offsetParent.offsetTop);
    }
  }

  return (
    <div
      className="sub-detail-container"
    >
      <p
        onClick={() => handleBound(startTime)}
        ref={refSub[sub.id]}
        className={activeClass}
      >
        { millisToMinutesAndSeconds(startTime)} --> {millisToMinutesAndSeconds(endTime)}
      </p>
      <span onMouseUp={(event) => selectedText(event)}>{sub.text}</span>
      {isShow && (
        <Translate {...{ toolTipStyle, translateText, setShow, videoRef, subText: sub.text }} />
      )}
    </div>
  );
};

export default connect(null, null)(SubtitleDetail);
