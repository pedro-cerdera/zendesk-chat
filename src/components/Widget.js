import config from '../config/index';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import MessageList from '../components/MessageList';
import Input from '../components/Input';
import { log, get, set } from '../utils';
import { debounce } from 'lodash';
import zChat from '../vendor/web-sdk';
import SystemMessages from '../utils/Messages';


const { ENV, ACCOUNT_KEY, THEME } = config;

if (ENV === 'dev') {
  window.zChat = zChat;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: THEME,
      typing: false,
      visible: true,
      blockInput: false,
      agent_offline: false,
    };
    this.timer = null;
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.getVisibilityClass = this.getVisibilityClass.bind(this);
    this.minimizeOnClick = this.minimizeOnClick.bind(this);
    this.chatButtonOnClick = this.chatButtonOnClick.bind(this);
    this.mapToEntities = this.mapToEntities.bind(this);
    this.isOffline = this.isOffline.bind(this);
    this.stopTyping = debounce(this.stopTyping.bind(this), 1000);
    this.setVisible = this.setVisible.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.toggleInputVisible = this.toggleInputVisible.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.data.error !== nextProps.data.error){
      if (nextProps.data.error && nextProps.data.error.detail && nextProps.data.error.detail.extra && nextProps.data.error.detail.extra.reason === 'jwt verification error'){
        zChat.init({
          account_key: ACCOUNT_KEY
        });
        nextProps.dispatch({
          type: 'is_fetching_history',
          detail: false
        });
      }
    }
    else if ((this.props.data.connection !== nextProps.data.connection && nextProps.data.connection === 'connected') || (this.props.data.has_more_message !== nextProps.data.has_more_message && nextProps.data.has_more_message)){
      nextProps.dispatch({
        type: 'has_more_message',
        detail: false
      });
      nextProps.dispatch({
        type: 'is_fetching_history',
        detail: true
      });
      zChat.fetchChatHistory(function(err, data) {
        if (!err) {
            nextProps.dispatch({
              type: 'has_more_message',
              detail: data.has_more
            });
            if (!data.has_more){
              nextProps.dispatch({
                type: 'is_fetching_history',
                detail: false
              });
            }
        } else {
          nextProps.dispatch({
            type: 'is_fetching_history',
            detail: false
          });
        }
      });
    }
    else if (
      ((this.props.data.account_status !== nextProps.data.account_status && !this.props.data.fetching_history) 
      || (this.props.data.fetching_history !== nextProps.data.fetching_history && !nextProps.data.fetching_history))     
      && nextProps.data.account_status === 'offline'  
      
      ){
        nextProps.dispatch({
          type: 'synthetic',
          detail: {
            type: 'agent_send_msg',
            msg: SystemMessages.OFFLINEMESSAGE
          }
        });
    }
    else if (this.props.data.account_status === 'offline' && nextProps.data.account_status === 'online'  && !nextProps.data.fetching_history) 
      {
        this.setState({
          blockInput: false,
        });
        nextProps.dispatch({
          type: 'synthetic',
          detail: {
            type: 'agent_send_msg',
            msg: SystemMessages.ONLINEMESSAGE
          }
        });
      }
    else if (this.props.data.agents !== nextProps.data.agents && Object.keys(nextProps.data.agents).length===0 && !this.props.data.fetching_history){
        this.setState({
          blockInput: true,
          agent_offline: true,
        });
    } 
  }

  componentDidMount() {

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token){
      zChat.init({
        account_key: ACCOUNT_KEY,
        authentication: {
          jwt_fn: function(callback) {
            callback(token);
          }
        }
      });
    } else {
      zChat.init({
        account_key: ACCOUNT_KEY
      });
      this.props.dispatch({
        type: 'is_fetching_history',
        detail: false
      });
    }

    const events = [
      'account_status',
      'connection_update',
      'department_update',
      'visitor_update',
      'agent_update',
      'chat',
      'error',
      'history'
    ];

    events.forEach((evt) => {
      zChat.on(evt, (data) => {
        this.props.dispatch({
          type: evt,
          detail: data
        });
      });
    });

    // Expose onThemeChange to allow dynamic change of theme
    if (ENV === 'dev') {
      window.onThemeChange = this.onThemeChange.bind(this);
    }

    this.setState({
      visible: get('visible') || this.state.visible,
      theme: get('theme') || this.state.theme
    });
  }
  toggleInputVisible() {
    if (this.state.blockInput){
      let msg = SystemMessages.NEWHELP;
      this.props.dispatch({
        type: 'synthetic',
        detail: {
          type: 'agent_send_msg',
          msg
        }
      });
    }
    this.setState({
      blockInput: !this.state.blockInput,
    })
  }

  handleOnChange() {
    if (!this.state.typing) {
      zChat.sendTyping(true);
      this.setState({ typing: true });
    }
    this.stopTyping();
  }

  stopTyping() {
    if (!this.state.typing) return;

    zChat.sendTyping(false);
    this.setState({ typing: false });
  }

  handleOnSubmit(event) {
    event && event.preventDefault();

    // Don't allow visitor to send msg if not chatting
    
    let msg = this.refs.input.getRawInput().value;
    if (!msg) return;

    if (this.isOffline() && this.props.data.visitor) {
      zChat.sendOfflineMsg({
        name: this.props.data.visitor.display_name,
        email: this.props.data.visitor.email,
        message: msg
      }, (err) => {
        if (err) return;
        this.setState({
          sent: true
        });
      });
      msg = SystemMessages.TICKETSENT;
      this.props.dispatch({
        type: 'synthetic',
        detail: {
          type: 'agent_send_msg',
          msg
        }
      });
      this.setState({
        blockInput:true,
      })
    }
    else {
      this.stopTyping.flush();
      zChat.sendChatMsg(msg, (err) => {
        if (err) {
          log('Error occured >>>', err);
        }
      });
      this.props.dispatch({
        type: 'synthetic',
        detail: {
          type: 'visitor_send_msg',
          msg
        }
      });

    }
    this.refs.input.getRawInput().value = '';
    // Don't send empty messages
    

    // Immediately stop typing
    
  }

  handleFileUpload(event) {
    event.preventDefault();

    // Don't allow visitor to send file if offline
    if (this.isOffline()) return;

    // Only send the first file dropped on input
    const file = event.dataTransfer.files[0];

    // Generate attachment object for local echo
    const attachment = {
      mime_type: file.type,
      name: file.name,
      size: file.size,
      url: window.URL.createObjectURL(file)
    }

    zChat.sendFile(file, (err) => {
      if (err) {
        log('Error occured >>>', err);
        return;
      }
    });

    this.props.dispatch({
      type: 'synthetic',
      detail: {
        type: 'visitor_send_file',
        attachment
      }
    });
  }

  getVisibilityClass() {
    return this.state.visible ? 'visible' : '';
  }

  minimizeOnClick() {
    this.setVisible(false);
  }

  chatButtonOnClick() {
    this.setVisible(true);
  }

  setVisible(visible) {
    this.setState({
      visible
    });
    set('visible', visible);
  }

  mapToEntities(visitor, agents) {
    const entities = {};
    if (visitor) {
      entities[visitor.email] = {
        ...visitor,
        type: 'visitor'
      };
    }

    if (agents && Object.keys(agents).length) {
      Object.values(agents).forEach((agent) => {
        if (!agent.nick) return;

        entities[agent.nick] = {
          ...agent,
          type: 'agent'
        };
      });
    }

    if (this.props.data.account_status === 'offline' && !this.props.data.is_chatting) {
      entities['agent:offline'] = {
        type: 'agent',
        nick: 'agent:offline'
      }
    }

    return entities;
  }

  setTheme(theme) {
    this.setState({
      theme
    });
    set('theme', theme);
  }

  onThemeChange(theme) {
    if (theme !== 'docked' && theme !== 'normal') {
      theme = 'docked';
    }

    this.setTheme(theme);
  }

  getTheme() {
    return this.state.theme;
  }

  isOffline() {
    console.log(this.state.agent_offline)
    return this.props.data.account_status === 'offline';
  }

  render() {
    if (!ACCOUNT_KEY) {
      if (ENV === 'dev') {
        return (
          <div className="warning-container">
            <div className="warning">
              🚨🚨🚨&nbsp;&nbsp;&nbsp;You might have forgotten to configure the widget with your own account key.&nbsp;&nbsp;&nbsp;🚨🚨🚨
              <br/><br/>
              Check the README for more details.
            </div>
          </div>
        );
      }
      else {
        return <div/>;
      }
    }

    const entities = this.mapToEntities(this.props.data.visitor, this.props.data.agents);
    const isOffline = this.isOffline();
    console.log(this.props.data, Object.keys(this.props.data.agents).length)
    return (
      <div className="index">
        <div className={`widget-container ${this.getTheme()} ${this.getVisibilityClass()}`}>
          {/* <StatusContainer
            accountStatus={this.props.data.account_status}
            minimizeOnClick={this.minimizeOnClick}
          /> */}
          <MessageList
            isChatting={this.props.data.is_chatting}
            isOffline={isOffline}
            isFetching={this.props.data.fetching_history}
            messages={this.props.data && this.props.data.chats.toArray()}
            agents={this.props.data.agents}
            visitor={this.props.data.visitor}
            entities={entities}
          />
          <div className={`spinner-container ${this.props.data.connection !== 'connected'? 'visible' : ''}`}>
            <div className="spinner"></div>
          </div>
          <Input
            addClass={this.props.data.chats.length? 'visible' : ''}
            inputEntryVisible = {!this.state.blockInput }
            ref="input"
            onToggleVisible = {this.toggleInputVisible}
            onSubmit={this.handleOnSubmit}
            onChange={this.handleOnChange}
            onFocus={this.inputOnFocus}
            onFileUpload={this.handleFileUpload}
          />
        </div>
        {/* <ChatButton addClass={this.getVisibilityClass()} onClick={this.chatButtonOnClick} /> */}
      </div>
    );
  }
}

App.displayName = 'App';

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const WrappedApp = connect(
  mapStateToProps
)(App);

export default WrappedApp;
