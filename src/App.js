import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header u-paddingAm u-marginBm u-flex u-flexJustifyCenter u-flexCol u-textCenter">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="u-marginBm">Welcome to my simple React app!</h1>
          <p>
            I'm excited that with <a href="https://github.com/RVMendoza/react-es6-postcss-boilerplate">this boilerplate</a>, I can finally start doing stuff. 
          </p>
        </header>

        <p className="u-marginBg u-paddingAm"> 
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h2 className="u-paddingAm">Testing to see if plugsins work...</h2>
        <ol>
          <li>
            <p className="CustomPropertiesTest u-paddingAm">
              postcss-custom-properties work if my background is teal.
            </p>
          </li>
          <li>
            <div className="NestedTest u-paddingAm">
              <p>postcss-nested works if my background is pink. </p>
            </div>
          </li>
          <li>
            <p className="u-paddingAl">
              Testing suitcss-utils space. This should have large padding around it.
            </p>
          </li>
          <li>
            <div className="u-flex u-flexJustifyCenter u-paddingAm">
              <p>Testing suitcss flex component. This should be center with flexbox.</p>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
