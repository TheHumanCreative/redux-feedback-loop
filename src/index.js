import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//first reducer
const feelingReducer = (state = [], action) => {
    if (action.type === 'FEELING_WAY') {
    return action.payload
}
return state;
}


//second reducer
const understandingReducer = (state = [], action) => {
    if (action.type === 'UNDERSTANDING_WAY') {
        return action.payload
    }
return state;
}


//third reducer
const supportReducer = (state = [], action) => {
    if (action.type === 'SUPPORT_WAY') {
        return action.payload
    }
return state;
}


//fourth reducer
const commentReducer = (state = [], action) => {
    if (action.type === 'COMMENT_WAY') {
        return action.payload
    }
return state;
}


// reduxStore
// storing the reducers in the "store" 
const reduxStore = createStore(
    combineReducers({
        // reducers
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
