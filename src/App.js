import React, { Component } from 'react';

import Shop from './components/Shop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is APP</h1>
        {
          [1, 2, 3, 4].map(
            num => <Shop price={num}/>
          )
          
        }
      </div>
    );
  }
}

export default App;
