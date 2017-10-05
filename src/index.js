import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';
import App from './App';

let store = createStore((state = {compteur: 10}, action) => state)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
