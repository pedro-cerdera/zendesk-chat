'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatMessage from './ChatMessage';
import SystemMessage from './SystemMessage';
import Avatar from './Avatar';
import OfflineForm from './OfflineForm';
import PrechatForm from './PrechatForm';
import ChatRating from './ChatRating';
import SystemMessages from '../utils/Messages';
import PropTypes from 'prop-types';

class MessageList extends Component {
  
  constructor(props) {
    super(props);
    this.renderTyping = this.renderTyping.bind(this);
    this.renderByType = this.renderByType.bind(this);
  }

  componentDidUpdate() {
    // Scroll to bottom
    let node = ReactDOM.findDOMNode(this);
    if (node.children.length > 0) {
      node = node.children[0];
      if (node.children.length > 0) {
        setTimeout(() => {
          if (node.children.length > 0) {
            node.children[node.children.length - 1].scrollIntoView();
          }
        });
      }
    }
  }

  renderByType(msg, addClass) {
    switch (msg.type) {
      case 'chat.file':
      case 'chat.msg':
        return (
          <ChatMessage
            key={msg.type + msg.timestamp}
            message={msg}
            addClass={addClass}
            agent={this.props.agents[msg.nick]}
          />
        );
      case 'chat.memberjoin':
      case 'chat.memberleave':
      case 'chat.wait_queue':
      case 'chat.info':
      case 'typing':
        return (
          <SystemMessage
            key={msg.type + msg.timestamp}
            message={msg}
          />
        );
      case 'chat.rating':
      case 'chat.request.rating':
        return <ChatRating key={msg.type + msg.timestamp} agent="Agente" visitor = {this.props.visitor} fetchedMessage = {msg.fetchedMessage}/>;
      case 'offline':
         if (this.props.visitor.email) {
           return (
              <ChatMessage
                key={msg.type + msg.timestamp}
                message={msg}
                addClass={addClass}
                agent={this.props.agents[msg.nick]}
          />
          );
         }
         else {
           return (
              <OfflineForm key="offline" visitor = {this.props.visitor} />
           );
         }
      case 'prechat':
        return <PrechatForm key="prechat" isOffline= {this.props.isOffline} visitor = {this.props.visitor} />;
      default:
        return <div key={+new Date()}>Unhandled message: {JSON.stringify(msg)}</div>
    }
  }

  renderTyping(agents) {
    const agent_names = Object.values(agents)
      .filter((agent) => agent.typing);
    return agent_names.map((agent) => {
      return (
        <div key={agent.nick} className="chat-msg-container agent">
          <div className="avatar-container">
            <Avatar entity={this.props.agents[agent.nick]} />
          </div>
          <div className="chat-msg-wrapper">
            <div className="chat-msg">
              <div className="typing-indicator">
                <div className="typing-indicator-part">•</div>
                <div className="typing-indicator-part">•</div>
                <div className="typing-indicator-part">•</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  renderAll(isOffline, messages) {
    if (!this.props.messages.length && !this.props.isFetching ) {
      messages = [{
        type: 'prechat'
      }];
    }

    let prev = null;

    return messages.map((message,index) => {
      let addClass = '',
          currentNick = message.nick,
          prevNick = prev && prev.nick;
      
      let nextPos = ++index;
      let next = null;
      let nextNick = null;
      if (messages.length > nextPos){
         next = messages[nextPos];
         nextNick = next.nick;
      }

      if (next && next.type === message.type && nextNick && currentNick === nextNick){
          addClass = 'sibling';
          if (prev && prev.type === message.type && currentNick && currentNick === prevNick){
            addClass += ' middle-message';
          }
          else {
            addClass += ' first-message';
          } 
      } else {
        if (prev && prev.type === message.type && currentNick && currentNick === prevNick){
          addClass = 'last-message';
        }
        else {
          addClass = 'unique-message';
        } 
      }

      prev = message;

      return this.renderByType(message, addClass);
    });
  }

  render() {
    return (
      <div className="message-list-container">
        <div>{this.renderAll(this.props.isOffline, this.props.messages)}</div>
        {this.renderTyping(this.props.agents)}
      </div>
    );
  }
}

MessageList.displayName = 'MessageList';
MessageList.propTypes = {
  messages: PropTypes.array,
  agents: PropTypes.object,
  isOffline: PropTypes.bool,
  isChatting: PropTypes.bool
};
MessageList.defaultProps = {
  messages: [],
  agents: {}
};

export default MessageList;
