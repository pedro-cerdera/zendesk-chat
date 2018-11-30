'use strict';

import React, { Component } from 'react';
import SystemMessages from '../utils/Messages'
import PropTypes from 'prop-types';

class SystemMessage extends Component {
  constructor(props) {
    super(props);
  }

  getMessageByType(msg) {
    switch (msg.type) {
      case 'chat.memberjoin':
        return this.props.message.display_name + SystemMessages.JOINCHAT;
      case 'chat.memberleave':
        return this.props.message.display_name + SystemMessages.LEFTCHAT;
      case 'chat.wait_queue':
        return SystemMessages.QUEUEMESSAGEBEFORE +  msg.wait_queue + SystemMessages.QUEUEMESSAGEAFTER ;
      default:
        return JSON.stringify(msg);
    }
  }

  render() {
    return (
      <div className="system-msg-container">
        <div className="system-msg">
          <span className="system-msg-text">{this.getMessageByType(this.props.message)}</span>
        </div>
      </div>
    );
  }
}

SystemMessage.displayName = 'SystemMessage';
SystemMessage.propTypes = {
  message: PropTypes.object
};
SystemMessage.defaultProps = {
  message: {
    msg: ''
  }
};

export default SystemMessage;
