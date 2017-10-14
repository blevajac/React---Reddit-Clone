import React from 'react';

const style = {display: 'flex', flexDirection: 'column', marginBottom: 30}

export default () => {
  return <div style={style}>
    <a href="http://google.com"> Nala mi je pojela gace </a>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <p style={{marginRight: 30}}>220 Comments</p>
      <p>Submitted 10 min ago</p>
    </div>
  </div>
}
