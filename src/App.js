import React from 'react';
import './App.css';

class HeyMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name :'Christiam Hernandez!'
    };
  }
  render() { 
    return (
      <div>
        <h1>Hello World, <span>{this.state.name}</span></h1> 
      </div>
    );
  }
}

export default HeyMessage;
