import React from 'react';
import moment from 'moment';
//css
import './css/RedditPost.css';

export default (props) => {
  console.log(props);
  return <div className="redditPostContainer">
    <a href="http://google.com"> { props.title } </a>

    <div className="redditPostBottomContainer">
      <p className="comment">{ props.comment } Comments</p>
      <p>Submitted {moment(props.submitted).fromNow()}</p>
    </div>

  </div>
}
