import { log, isAgent, isTrigger } from '../utils';
import { createStore } from 'redux';
import SortedMap from 'collections/sorted-map';

const DEFAULT_STATE = {
	connection: 'closed',
	account_status: 'connecting',
	departments: {},
	visitor: {},
	agents: {},
	chats: SortedMap(),
	last_timestamp: 0,
	is_chatting: false,
	error: null,
	has_more_message: false,
	fetching_history: true
};

// IMPT: Need to return on every case
function update(state = DEFAULT_STATE, action) {
	console.log('action', action);

	if (action.detail && action.detail.timestamp && action.detail.timestamp > state.last_timestamp)
		state.last_timestamp = action.detail.timestamp;

	switch (action.type) {
		case 'has_more_message':
			return {
				...state,
				has_more_message: action.detail
			}
		case 'is_fetching_history':
			return {
				...state,
				fetching_history: action.detail
			}		
		case 'connection_update':
			return {
				...state,
				connection: action.detail
			};
		case 'account_status':
			return {
				...state,
				account_status: action.detail
			};
		case 'department_update':
			return {
				...state,
				departments: {
					...state.departments,
					[action.detail.id]: action.detail
				}
			};
		case 'visitor_update':
			return {
				...state,
				visitor: {
					...state.visitor,
					...action.detail
				}
			};
		case 'agent_update':
			if (action.detail.nick !== "agent:trigger:Customer Service")
				return {
					...state,
					agents: {
						...state.agents,
						[action.detail.nick]: {
							...action.detail,
							nick: action.detail.nick, // To be removed after standardization
							typing: (state.agents[action.detail.nick] || {typing: false}).typing
						}
					}
				};
		case 'history':
		case 'chat':
			let new_state = { ...state };
			switch (action.detail.type) {
				/* Web SDK events */
				case 'chat.memberjoin':
					if (isAgent(action.detail.nick) && !isTrigger(action.detail.nick)) {
						if (!new_state.agents[action.detail.nick]) new_state.agents[action.detail.nick] = {};
						new_state.agents[action.detail.nick].nick = action.detail.nick;
					}
					else
						new_state.visitor.nick = action.detail.nick;

					if (!isAgent(action.detail.nick) && action.type!=='history') {
						new_state.is_chatting = true;
					}

					// Concat this event to chats to be displayed
					new_state.chats = state.chats.concat({
						[action.detail.timestamp]: {
							...action.detail
						}
					});

					return new_state;
				case 'chat.memberleave':
					if (!isAgent(action.detail.nick)  && action.type!=='history') {
						new_state.is_chatting = false;
					}
					if (isAgent(action.detail.nick) && action.type!=='history') {
						if ('chat.memberleave',new_state.agents[action.detail.nick]){
							const {[action.detail.nick]:value,...change_state} = new_state.agents;
							new_state.agents =change_state;
						} 
					}

					// Concat this event to chats to be displayed
					new_state.chats = state.chats.concat({
						[action.detail.timestamp]: {
							...action.detail
						}
					});

					return new_state;
				case 'chat.file':
				case 'chat.wait_queue':
				case 'chat.request.rating':
				case 'chat.msg':
					// Ensure that triggers are uniquely identified by their display names
					if (isTrigger(action.detail.nick))
						action.detail.nick = `agent:trigger:${action.detail.display_name}`;
					if (state.fetching_history)
						action.detail.fetchedMessage = true;
					new_state.chats = state.chats.concat({
						[action.detail.timestamp]: {
							...action.detail,
							member_type: isAgent(action.detail.nick) ? 'agent' : 'visitor'
						}
					});
					return new_state;
				case 'typing':
					let agent = state.agents[action.detail.nick];
					return {
						...state,
						agents: {
							...state.agents,
							[agent.nick]: {
								...agent,
								typing: action.detail.typing
							}
						}
					};
				
				default:
					return state;
			};
		case 'error':
			return {
				...state,
				fetching_history: false,
				error: {
					detail: action.detail
				}
			};
		default:
			log('unhandled action', action);
			return state;
	}
}

function storeHandler(state = DEFAULT_STATE, action) {
	let result, new_action = {};
	if (action.type === 'synthetic') {
		log('synthetic action', action);

		/**
		 * Use last message timestamp for user-sent messages
		 * instead of new Date() since there might be huge skew
		 * between user's local computer and the server, which can
		 * cause messages to appear in the wrong order.
		 */
		const new_timestamp = state.last_timestamp + 1;

		switch (action.detail.type) {
			case 'visitor_send_msg':
				new_action = {
					type: 'chat',
					detail: {
						type: 'chat.msg',
						display_name: state.visitor.display_name,
						nick: state.visitor.nick || 'visitor:',
						timestamp: new_timestamp,
						msg: action.detail.msg,
						source: 'local'
					}
				};
				break;
			case 'visitor_send_file':
				new_action = {
					type: 'chat',
					detail: {
						type: 'chat.file',
						display_name: state.visitor.display_name,
						nick: state.visitor.nick || 'visitor:',
						timestamp: new_timestamp,
						attachment: action.detail.attachment,
						source: 'local'
					}
				}
				break;
			case 'agent_send_msg':
				new_action = {
					type: 'chat',
					detail: {
						type: 'chat.msg',
						display_name: state.visitor.display_name,
						nick: 'agent:',
						timestamp: new_timestamp,
						msg: action.detail.msg,
						source: 'local'
					}
				};
				break;
			default:
				new_action = action;
		}

		result = update(state, new_action);
	} else {
		result = update(state, action);
	}

	return result;
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// let ChatStore = createStore(update, applyMiddleware(chatMiddleware));
let ChatStore = createStore(storeHandler, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default ChatStore;
