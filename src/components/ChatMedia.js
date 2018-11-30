'use strict';

import React, { Component } from 'react';
import ChatImage from './ChatImage';
import PropTypes from 'prop-types';

class ChatMedia extends Component {
  constructor(props) {
    super(props);
    this.renderMediaByType = this.renderMediaByType.bind(this);
  }

  renderMediaByType(message) {
    switch (true) {
      case /^image/.test(message.attachment.mime_type):
        return <ChatImage message={message} />;
      default:
        return (
          <a href={this.props.message.attachment.url} target="_blank">
            <div className="chat-msg">
              ⬇️ Download {this.props.message.attachment.name}
            </div>
          </a>
        );
    }
  }

  render() {
    return (
      <div className="">
        {this.renderMediaByType(this.props.message)}
      </div>
    );
  }
}

ChatMedia.displayName = 'ChatMedia';
ChatMedia.propTypes = {
  message: PropTypes.object
};

export default ChatMedia;
