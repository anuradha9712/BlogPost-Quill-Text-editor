import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import TextEditor from './components/TextEditor';
import { Grid, Divider } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import readingtime from 'reading-time';
import Sentiment from 'sentiment';
import './App.css';
import positiveGIF from './images/positive.gif';
import negativeGIF from './images/negative.gif';
import neutralGIF from './images/neutral.gif';


const sentiment = new Sentiment();

function App() {

  const [content, setContent] = useState('');
  const [sentimentScore, setSentimentScore] = useState(0);


  const removeTags = (str) => {
    if ((str === null) || (str === ''))
      return '';
    else
      str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
  }

  const handleContentChange = (value) => {
    setContent(value);
    // console.log("reaing->", readingtime(value));
    var text = removeTags(value);
    // console.log('sentiment score--> ',text ,sentiment.analyze(text));
    setSentimentScore(sentiment.analyze(text));

  }


  return (
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

      <Grid container xs={12} md={12} spacing={2} className="description"  >
        <Grid item container xs={12} md={3}>
          <div className="card para ">
            <p>{readingtime(content).minutes + ' ' + 'minutes'}</p>
            <h3>Reading Time</h3>
          </div>
        </Grid>
        <Grid item container xs={12} md={3}>
          <div className="card para">
            <p>{readingtime(content).words + ' ' + 'words'}</p>
            <h3>Words</h3>
          </div>
        </Grid>
        <Grid item container xs={12} md={3}>
          <div className="card para">
            <p>{sentimentScore ? sentimentScore.score : ''}</p>
            <h3>Sentiment Score</h3>
          </div>
        </Grid>
        <Grid item container xs={12} md={3}>
          <div className="card ">
            {sentimentScore.score === 0 ?
              <div>
                <img src={neutralGIF} alt='neutral' />
                <p>Neutral</p>
              </div>
              :
              sentimentScore.score > 1 ?
                <div>
                  <img src={positiveGIF} alt='positive' />
                  <p>Positive</p>
                </div> :
                <div>
                  <img src={negativeGIF} alt='negative' />
                  <p>Negative</p>
                </div>}
            <h3>General Sentiment</h3>
          </div>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
