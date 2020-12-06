import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import TextEditor from './components/TextEditor';
import { Grid, Divider } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
// import Parser from 'html-react-parser';


import './App.css';

function App() {

  const [content, setContent] = useState('');

  const handleContentChange = (value) =>{
    setContent(value);
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Blogger App
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Create New Blog
    //     </a>
    //     <br/>
    //     <TextEditor />
    //   </header>
    // </div>

    <div className="main-div">
      <h1>Blogger App</h1>
      <Grid container xs={12} md={12} spacing={2}>
        <Grid item container xs={12} md={6}>
            <TextEditor handleContentChange={handleContentChange} />
        </Grid>
        <Grid item container xs={12} md={6}  >
            <div className="card ql-editor">
              {/* preview */}
               {ReactHtmlParser(content)}

               {/* Html code */}
               {/* {content} */}

            </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
