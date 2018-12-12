import React, {Component} from 'react';

import Shop from './components/Shop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>RATFOOD</h1>
        <Shop/>
      </div>
    );
  }
}

/* Pour un stateless
const App = () => {
  return (
    <div className="App">
      <h1>RATFOOD</h1>
      <Shop/>
    </div>
  )
}
*/



export default App;
