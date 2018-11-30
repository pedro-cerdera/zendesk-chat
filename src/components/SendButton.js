'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{width:"60px", display: "flex", justifyContent: "flex-end"}}>
      <div
        className={`send-button ${ this.props.addClass || ''}`}
        onClick={this.props.onClick}>
        <svg className="sc-bdVaJa fUuvxv" fill="white" width="32px" height="32px" viewBox="0 0 1024 1024" rotate="0"><path d="M96 541.8l239.8 103.2 59.6 275 115-161.8 233.6 169.8 184-832-832 445.8zM829.8 184.8l-486.2 428.6-174-74.8 660.2-353.8zM367 638l-0.4-2.2 336.2-304.4-300.6 349.6 0.8 0.6h-1l-3.2 103.2-31.8-146.8zM429.8 816.4l3.6-113.4 51.4 36.4-0.2 0.2-54.8 76.8zM724.2 869.6l-274.2-194.6 429.8-509-155.6 703.6z"></path></svg>
      </div>
      </div>
    );
  }
}


SendButton.displayName = 'SendButton';
SendButton.propTypes = {
  onClick: PropTypes.func,
  addClass: PropTypes.string
};

export default SendButton;
