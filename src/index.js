import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/Widget';
import { Provider } from 'react-redux'
import ChatStore from './stores/ChatStore';
import { styles } from 'ansi-colors';
import './styles/Widget.scss';

function initialize() {
	let widget = document.getElementById('widget');

	if (!widget) {
		widget = document.createElement('div');
		widget.id = 'widget';
		document.body.appendChild(widget);
	}

	// Render the main component into the dom
	ReactDOM.render(
		<Provider store={ChatStore}>
			<Widget />
		</Provider>,
		widget
	);
}

window.onload = initialize;
