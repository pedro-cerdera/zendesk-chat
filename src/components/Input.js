'use strict';

import React, { Component } from 'react';
import SendButton from './SendButton';
import ActionButton from './ActionButton';
import SystemMessages from '../utils/Messages';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
  }

  getRawInput() {
    return this.refs.input;
  }

  onDragOver(event) {
    this.setState({dragover: true});
    event.preventDefault();

    event.dataTransfer.dropEffect = 'copy';
  }

  onDrop(event) {
    this.setState({dragover: false});
    this.props.onFileUpload(event);
  }

  onDragLeave() {
    this.setState({dragover: false});
  }

  render() {
    const class_name = [
        'input-container',
        this.props.addClass,
        this.state.dragover ? 'drag-drop-zone' : ''
      ].join(' ');
    if (this.props.inputEntryVisible){
      return (
        <div className={class_name}
          onDrop={this.onDrop}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave} >
          <form
            className="input-form"
            onSubmit={this.props.onSubmit}>
              <input
                className="input"
                ref="input"
                placeholder="Digite sua mensagem"
                onChange={this.props.onChange}
                onFocus={this.props.onFocus} />
              <SendButton onClick={this.props.onSubmit} />
          </form>
        </div>
      );
    } else {
      return (
        <div className={"offline-sent input-form "+class_name}><ActionButton  addClass="button-resend" onClick={this.props.onToggleVisible} label={SystemMessages.NEWREQUEST}/></div>
      )
    }
  }
}


Input.displayName = 'Input';
Input.propTypes = {
  addClass: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onFileUpload: PropTypes.func
};

export default Input;
