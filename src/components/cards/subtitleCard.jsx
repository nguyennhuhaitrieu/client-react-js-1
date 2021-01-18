// @flow
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../../styles/subtitile.css';
import SubtitleDetail from './subtitleDetail';

type Props = {
  subtitle: Object;
  currentTime: any;
  videoRef: Object;
}

const SubtitleCard = (props: Props) => {
  const { subtitle, currentTime, videoRef } = props;
  const [refSub, setRefSub] = useState({});
  const [activatedSub, setActivatedSub] = useState({});
  const [showIndex, setShow] = useState(true);

  useEffect(() => {
    let refObj = {
      container: React.createRef(),
    };

    if (subtitle) {
      subtitle.map(sub => {
        refObj = {
          ...refObj,
          [sub.id]: React.createRef(),
        };
        return null;
      });
    }
    setRefSub(refObj);
  }, [subtitle]);

  useEffect(() => {
    if (refSub['container']) {
      const { current: { offsetHeight } } = refSub['container'];
      refSub['container'].current.scrollTop = activatedSub - offsetHeight / 2.5;
    }
  }, [activatedSub]);
  const displaySubTitle = () => subtitle && subtitle.map((sub, index) => (
    <SubtitleDetail
      key={index} {...{ sub,
        index,
        currentTime,
        videoRef,
        setRefSub,
        refSub,
        setActivatedSub,
        subtitle,
        setShow,
        show: () => setShow(index),
        isShow: index === showIndex }}
    />
  ));

  return (
    <div className="subtitle-container" id="style-4" ref={refSub['container']}>
      {displaySubTitle()}
    </div>
  );
};

export default connect()(SubtitleCard);
