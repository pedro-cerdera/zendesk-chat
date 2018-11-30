'use strict';

import React, { Component } from 'react';
import CardContainer from './CardContainer';
import MessageSvg from './MessageSvg';
import ActionButton from './ActionButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import zChat from '../vendor/web-sdk';
import PropTypes from 'prop-types';

class OfflineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false
    };
    this.send = this.send.bind(this);
    this.sendAnother = this.sendAnother.bind(this);
    this.renderChild = this.renderChild.bind(this);
  }

  send(event) {
    event.preventDefault();
    zChat.sendOfflineMsg({
      name: this.refs.name.value,
      email: this.refs.email.value,
      message: this.refs.message.value
    }, (err) => {
      if (err) return;
      this.setState({
        sent: true
      });
    });
  }

  sendAnother() {
    this.setState({
      sent: false
    });
  }

  renderChild() {
    if (this.state.sent) {
      return (
        <div key="sent" className="offline-sent">
          Your message has been sent. We will get back to you as soon as possible.
          <ActionButton
            addClass="button-resend"
            label="Send another"
            onClick={this.sendAnother}
          />
        </div>
      );
    }
    else {
      return (
        <form key="not-sent" className="offline-form">
          <div className="content">
            <div className="section">
              <label className="label">Name</label>
              {!!this.props.visitor.email ?
                <input ref="name" value={this.props.visitor.email && this.props.visitor.display_name} readOnly/> :
                <input ref="name"/>
              }
            </div>
            <div className="section">
              <label className="label">Email</label>
              {!!this.props.visitor.email ?
                <input ref="email" value={this.props.visitor.email &&  this.props.visitor.email} readOnly/>:
                <input ref="email"/>
              }
            </div>
            <div className="section">
              <label className="label">Message</label>
              <textarea ref="message" />
            </div>
          </div>
          <div className="button-container">
            <ActionButton
              addClass="button-send"
              label="Send"
              onClick={this.send}
            />
          </div>
        </form>
      );
    }
  }

  render() {
    return (
      <CardContainer addClass="offline-card" contentAddClass={this.state.sent ? 'sent' : ''} icon={ <MessageSvg /> }>
        <ReactCSSTransitionGroup
          className="offline-container"
          transitionName={this.state.sent ? 'offline-shrink' : 'offline-grow'}
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
          {this.renderChild()}
        </ReactCSSTransitionGroup>
      </CardContainer>
    );
  }
}


OfflineForm.displayName = 'OfflineForm';
OfflineForm.propTypes = {
  onClick: PropTypes.func,
  addClass: PropTypes.string
};

export default OfflineForm;
