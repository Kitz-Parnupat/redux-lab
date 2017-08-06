import React, { Component } from 'react';
import User from './User';
import {connect} from "react-redux";
class App extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.SETNAME("Redux")}>Click</button>
        <User username={this.props.user.name}/>
      </div>
    );
  }
}
const mapStatetoProp=(state)=>{
  return {
    user:state.user,
    emp:state.emp
  };
}

const mapDispatchtoProp=(dispatch)=>{
  return {
    SETNAME:(name)=>{
      dispatch({
        type:"SETNAME",
        payload:name
      })
    }
  }
}
export default connect(mapStatetoProp,mapDispatchtoProp)(App);
