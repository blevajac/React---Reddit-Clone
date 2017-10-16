import React, { Component } from 'react';
import firebase from 'firebase';
import _ from 'lodash';
import moment from 'moment';

//components
import RedditPost from './RedditPost';
import AddPost from './AddPost';
//---------


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redditPosts: {}
    }
    firebase.database().ref('posts').on('value', (snapshot) => {
        this.setState({redditPosts: snapshot.val()})
      });
  }

  render() {
    return (
      <div className="App">
        <AddPost onAdd={(redditPost) => {
            const newRedditPost = {...redditPost, comment: 5, submitted: moment().format()}
            firebase.database().ref('posts').push(newRedditPost)
          }}
        />
        {_.map(this.state.redditPosts, redditPost => {
          return <RedditPost
            key={redditPost.title}
            title={redditPost.title}
            comment={redditPost.comment}
            submitted={redditPost.submitted}
          />
        })}
      </div>
    );
  }
}

export default App;
