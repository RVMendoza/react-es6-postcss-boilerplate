import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Component Library</h1>  
          <p>
            This is where all your modular components will go.
          </p>
          <Link to='/app'>
            See app
          </Link>
      </div>
    );
  }
}

export default App;
