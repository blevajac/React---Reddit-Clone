import React, { Component } from 'react';
//css - component
import Button from './css-components/Button';

export default class AddPost extends Component {
  render() {
    return <div>
      <p>Title</p>
      <input
        onChange={(event) => this.setState({title: event.target.value})}
      />
      <Button onClick={() => this.props.onAdd(this.state)}>Add</Button>
    </div>
  }
}
