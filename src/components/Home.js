import React, { Component } from "react";
import axios from 'axios';

class Users extends Component {
    state = {
        chickens: []
      }
    
      componentDidMount() {
        axios.get(`http://localhost:3010/home`)
          .then(results => {
            const chickens = results.data;
            this.setState({ chickens });
          })
      };

  render() {
    return (
        <div>
        <h1>Menu Items</h1>
          <h2>Chickren</h2>
          <ul>
            { this.state.chickens.map(chickens =>  <li> {chickens.title} </li>)}
          </ul>
      </div>
    );
  }
}

export default Users;