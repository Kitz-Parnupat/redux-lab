// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import {createStore} from "redux"
const reducer = (state,action)=>{
    switch (action.type) {
        case "ADD":
                state+=action.payload;
            break;
        case "SUBTRACT":
                state-=action.payload;
            break;
    
        default:
            break;
    }
    return state;
}
const store=createStore(reducer,15000);

store.subscribe(()=>{
    console.log("update store:",store.getState())
})

store.dispatch({
    type:"ADD",
    payload:500
});
store.dispatch({
    type:"SUBTRACT",
    payload:10000
});