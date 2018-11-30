'use strict';

import React, { Component } from 'react';
import CardContainer from './CardContainer';
import MessageSvg from './MessageSvg';
import ActionButton from './ActionButton';
import { log } from '../utils';
import { connect } from 'react-redux'
import zChat from '../vendor/web-sdk';
import PropTypes from 'prop-types';

class PrechatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false
    };
    
    this.send = this.send.bind(this);
    this.renderChild = this.renderChild.bind(this);
  }

  send(event) {
    event.preventDefault();
    const msg = this.refs.message.value;

    // Don't send empty messages
    if (!msg) return;

    zChat.setVisitorInfo({
      display_name: this.refs.name.value,
      email: this.refs.email.value
    }, (err) => {
      if (err) return;
      if (this.props.isOffline){
        zChat.sendOfflineMsg({
          name: this.refs.name.value,
          email: this.refs.email.value,
          message: msg
        });
      } else {
        zChat.sendChatMsg(msg, (err) => {
          if (err) log('Error sending message');
        });
      }
    });

    this.props.dispatch({
      type: 'synthetic',
      detail: {
        type: 'visitor_send_msg',
        msg: msg
      }
    });
  }

  renderChild() {
    return (
      <form key="not-sent" className="offline-form">
        <div className="content">
          <div className="section">
            <label className="label">Nome</label>
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
            <label className="label">Mensagem</label>
            <textarea ref="message" />
          </div>
        </div>
        <div className="button-container">
          <ActionButton
            addClass="button-send"
            label="Enviar"
            onClick={this.send}
          />
        </div>
      </form>
    );
  }

  render() {
    return (
      <CardContainer title="Se apresente!" addClass="offline-card" contentAddClass={this.state.sent ? 'sent' : ''} icon={ <MessageSvg /> }>
        {this.renderChild()}
      </CardContainer>
    );
  }
}


PrechatForm.displayName = 'PrechatForm';
PrechatForm.propTypes = {
  onClick: PropTypes.func,
  addClass: PropTypes.string
};

export default connect()(PrechatForm);
