// @flow
import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

import SubtitleCard from './subtitleCard';
import { getFilmEpisodeData } from '../../actions/vimActions';
import { episodeSelector } from '../../selectors/episodeSelector';

type Props = {
  setDuration: any;
  film: Object;
  meta: Object;
  episodes: Object;
  setEpisodesTable: Function;
  getFilmEpisodeData: Function;
  currentPlayer: Object;

}

const parser = require('subtitles-parser');


const readSrtFile = (file) => {
  const rawFile = new XMLHttpRequest();
  rawFile.open('GET', file, false);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        // const allText = rawFile.responseText;
      }
    }
  };
  rawFile.send(null);
  const subtitle = parser.fromSrt(rawFile.response, true);
  return subtitle;
};

const PlayerCard = (props: Props) => {
  const {
    setDuration,
    setEpisodesTable,
    getFilmEpisodeData: getFilmEpisode,
    film,
    episodes,
    meta: { current_page = 1 } = {},
    // episodesTable,
    currentPlayer,
  } = props;

  const videoRef = useRef(null);
  const [sub, setSub] = useState('');
  // const [isPlaying, setPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [currentTime, setCurrentTime] = useState(0);


  // Gget current time
  const onProgress = () => {
    if (videoRef !== null) {
      setCurrentTime(videoRef.current.getCurrentTime() * 1000);
    }
  };
  // Get total time
  const onDuration = () => {
    setDuration((videoRef.current.getDuration() / 60).toFixed(2));
  };

  // Get episodes
  useEffect(() => {
    if (film && film.id >= 1) {
      getFilmEpisode({ film_id: film.id, currentPage: current_page });
    }
  }, [film]);

  // set subtitle singlefilm
  useEffect(() => {
    if (episodes) {
      setSub(readSrtFile(episodes[0].subtitle));
      setVideoUrl(episodes[0].video_url);
    }
  }, [episodes]);

  useEffect(() => {
    if (currentPlayer && currentPlayer.id >= 1) {
      setSub(readSrtFile(currentPlayer.subtitle));
      setVideoUrl(currentPlayer.video_url);
    }
  }, [currentPlayer]);

  setEpisodesTable(episodes);
  return (
    <>
      <div className="row">
        <div className="col-12 col-xl-6">
          {videoUrl ? (
            <ReactPlayer
              width="100%"
              height="100%"
              pip controls loop
              ref={videoRef}
              url={videoUrl}
              {...{ onProgress, onDuration }}
            />
          ) : (
            <div className="spiner-loader">
              <div className="loader" />
            </div>
          )}

        </div>
        <div className="col-12 col-xl-6">
          <SubtitleCard subtitle={sub} {...{ currentTime, videoRef }} />
        </div>
      </div>
    </>
  );
};
export default connect(episodeSelector, { getFilmEpisodeData })(PlayerCard);
