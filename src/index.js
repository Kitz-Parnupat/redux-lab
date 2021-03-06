import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";



const initialstate={ //กำหนด state
    result:15000,
    value:[]
}
const userReducer = (
    state = {name:"ss",age:22},action)=>{
        switch (action.type) {
        case "SETNAME":
               state={
                ...state,
                    name:action.payload
               }
            break;
        case "SETAGE":
                  state={
                ...state,
                  age:action.payload
               }
            break;
    
        default:
            break;
    }
    return state;
}
const employeeReducer = (state=initialstate,action)=>{
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
const store=createStore(combineReducers({emp:employeeReducer,user:userReducer}));

store.subscribe(()=>{
    console.log("update store:",store.getState())
});
// store.dispatch({
//     type:"ADD",
//     payload:15000
// });



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
,
document.getElementById('root'));