'use strict';

import React, { Component } from 'react';
import CardContainer from './CardContainer';
import ActionButton from './ActionButton';
import zChat from '../vendor/web-sdk';
import SystemMessages from '../utils/Messages';
import PropTypes from 'prop-types';

class ChatRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingSent: this.props.fetchedMessage,
    }
  }

  render() {
    if (!this.state.ratingSent){
      return (
        <CardContainer title="Avaliação" addClass="chat-rating-card">
          {this.props.agent.display_name + SystemMessages.REQUESTRATING}
          <div className="buttons-container">
            <ActionButton
              addClass="button button-rate-down"
              label="Ruim"
              onClick={()=>{
                zChat.sendChatRating('bad');
                this.setState({ratingSent:true});
              }}
            />
            <ActionButton
              addClass="button button-rate-up"
              label="Bom"
              onClick={()=>{
                zChat.sendChatRating('good');
                this.setState({ratingSent:true});
              }}
            />
          </div>
        </CardContainer>
      );
    }
    else{
      return(
        <div className="system-msg-container">
          <div  className="system-msg">
            <span className="system-msg-text">{SystemMessages.RATINGSENT}</span>
          </div>
        </div>
      );
    }
  }
}


ChatRating.displayName = 'ChatRating';
ChatRating.propTypes = {
  agent: PropTypes.object
};
ChatRating.defaultProps = {
};

export default ChatRating;
