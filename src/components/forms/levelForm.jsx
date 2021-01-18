// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLevelData } from '../../actions/vimActions';
import { levelSelector } from '../../selectors/levelSelector';

type Props = {
  getLevelData: Function;
  listLevels: Object;
}


const LevelForm = (props: Props) => {
  const { getLevelData: getLevel, listLevels } = props;

  useEffect(() => {
    getLevel();
  }, []);

  return (
    <>
      <ul>
        {
          listLevels.levels && listLevels.levels.map(level => <li key={level.id}><Link to={`/movies/level/${level.id}`} href="#0">Movies {level.name}</Link></li>)
        }
      </ul>
    </>
  );
};

export default connect(levelSelector, { getLevelData })(LevelForm);
