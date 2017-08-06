// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import {createStore} from "redux";
const initialstate={ //กำหนด state
    result:15000,
    value:[]
}
const reducer = (state=initialstate,action)=>{
    switch (action.type) {
        case "ADD":
               state={
                //    ...state
                // หรือ 
                // result:state.result,
                // value:state.value
                ...state,
                    result:state.result += action.payload,
                    value:[...state.value,action.payload]
               }
            break;
        case "SUBTRACT":
                  state={
                ...state,
                    result:state.result -= action.payload,
                    value:[...state.value,action.payload]
               }
            break;
    
        default:
            break;
    }
    return state;
}
const store=createStore(reducer);

store.subscribe(()=>{
    console.log("update store:",store.getState())
});
store.dispatch({
    type:"ADD",
    payload:15000
});
store.dispatch({
    type:"ADD",
    payload:15000
});
store.dispatch({
    type:"SUBTRACT",
    payload:10000
});