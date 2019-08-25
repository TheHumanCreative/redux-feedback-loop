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
    switch (action.type) { 
    case 'FEELING_WAY':
    return action.payload;
    case 'CLEAR_WAY':
    return [];
    default:return state;
}
}
// targets the value from the feeling component
// holds onto the value and returns the payload 
// value and appends it to the DOM upon calling
// the reducer and the state of the component. 

//second reducer
const understandingReducer = (state = [], action) => {
    switch (action.type) {
    case 'UNDERSTANDING_WAY':
    return action.payload;
    case 'CLEAR_WAY':
    return [];
    default: return state;
}
}
// targets the value from the understand component
// holds onto the value and returns the payload 
// value and appends it to the DOM upon calling
// the reducer and the state of the component. 

//third reducer
const supportReducer = (state = [], action) => {
    switch (action.type) {
    case 'SUPPORT_WAY':
    return action.payload;
    case 'CLEAR_WAY':
    return [];
    default: return state;
}
}
// targets the value from the support component
// holds onto the value and returns the payload 
// value and appends it to the DOM upon calling
// the reducer and the state of the component. 

//fourth reducer
const commentReducer = (state = [], action) => {
    switch (action.type) {
    case 'COMMENT_WAY':
    return action.payload;
    case 'CLEAR_WAY':
    return [];
    default: return state;
}
}
// targets the value from the comment component
// holds onto the value and returns the payload 
// value and appends it to the DOM upon calling
// the reducer and the state of the component. 

// fifth reducer
const reviewReducer = (state = [], action) => {
    switch (action.type) {
    case 'REVIEW_WAY':
    return action.payload;
    case 'CLEAR_WAY':
    return [];
    default: return state;
}
}
// targets the value from the review component
// holds onto the value and returns the payload 
// value and appends it to the DOM upon calling
// the reducer and the state of the component. 

// sixth reducer 
// const addFeedBackReducer = (state = [], action) => {
//     if (action.type === 'CLEAR_WAY') {
//         return {}
//     }
// return reduxStore 
// }
// targets the value from the WHOLE LIST component
// holds onto the value and returns the payload 
// value and appends it to the DOM upon calling
// the reducer and the state of the component. 

// reduxStore
// storing the reducers in the "store" 
const reduxStore = createStore(
    combineReducers({
        // reducers
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer,
        reviewReducer,
        // addFeedBackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
