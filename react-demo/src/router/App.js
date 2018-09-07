import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Title from '../component/title.jsx';

class App extends Component {
  render() {
    return (
      <div >
        <Title/>
        <Link to='/index' >index</Link>
      </div>
    );
  }
}

export default App;
