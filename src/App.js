import React, { Component } from 'react';

//css
import './App.css';

//components
import RedditPost from './RedditPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> Test </p>
        <RedditPost />
        <RedditPost />
        <RedditPost />
        <RedditPost />
      </div>
    );
  }
}

export default App;
