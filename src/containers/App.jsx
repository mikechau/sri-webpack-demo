import React, { Component } from 'react';
import photo from '../assets/images/photo1.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <img src={photo} />
        <br />
        Hello world!
      </div>
    );
  }
}

export default App;
