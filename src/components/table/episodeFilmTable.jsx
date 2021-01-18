import React from 'react';
import { connect } from 'react-redux';

const EpisodeFilmTable = (props) => {
  const { episodesTable, setCurrentPlayer } = props;
  const changeEpisode = (episode) => {
    setCurrentPlayer(episode);
  };
  return (
    <div className="table-container" id="style-4">
      <table className="accordion__list">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Air Date</th>
          </tr>
        </thead>

        <tbody>
          {
            episodesTable && episodesTable.map(episode => (
              <tr key={episode.id} onClick={() => changeEpisode(episode)}>
                <th>{episode.name}</th>
                <td>{episode.title}</td>
                <td>{episode.updated_at}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
export default connect(null, null)(EpisodeFilmTable);
