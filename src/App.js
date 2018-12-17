import React, {Component} from 'react';

import Shop from './components/Shop';
import About from './components/About';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Navbar.js
//import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>RATFOOD</h1>
        <Router>
          <div>
            <Link to="/">Shop</Link> | 
            <Link to="/about">About</Link>
            <Route path="/" exact component={Shop}/>
            <Route path="/about" component={About}/>
          </div>
        </Router>
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
