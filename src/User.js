import React, { Component } from 'react';
class User extends Component {
  render() {
    return (
      <div>
        User : {this.props.username}
      </div>
    );
  }
}

export default User;