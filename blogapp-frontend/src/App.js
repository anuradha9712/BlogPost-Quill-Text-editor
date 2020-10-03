import React from 'react';
import logo from './logo.svg';
import TextEditor from './components/TextEditor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Blogger App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create New Blog
        </a>
        <br/>
        <TextEditor />
      </header>
    </div>
  );
}

export default App;
