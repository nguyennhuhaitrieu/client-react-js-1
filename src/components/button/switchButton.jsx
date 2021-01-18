/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { saveIsRemindData } from '../../actions/vimActions';
import '../../styles/switchButton.css';

type Props = {
  setRemind: Function;
  isRemind: Boolean;
  saveIsRemindData: Function;
};
const SwitchButton = (props: Props) => {
  const { isRemind, saveIsRemindData: setIsRemid } = props;

  const onChange = () => setIsRemid(!isRemind);

  return (
  // <div className="mid">

  //   <label className="rocker rocker-small">
  //     <input type="checkbox" defaultChecked={isRemind} onChange={onChange} />

  //     <span className="switch-left">Yes</span>
  //     <span className="switch-right">No</span>
  //   </label>
  // </div>
    <div className="d-flex">
      <h4 className="title-switch"><Link to="/remind">Remind</Link></h4>
      <div className="switch">
        <input type="checkbox" name="toggle" defaultChecked={isRemind} onChange={onChange} />
        <label htmlFor="toggle"><i /></label>
        <span />
      </div>
    </div>
  );
};

export default connect(null, { saveIsRemindData })(SwitchButton);
