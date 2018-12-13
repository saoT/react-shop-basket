import React, {Component} from 'react';

class Cart extends Component {

  render () {
    return (
      <div className="Cart">
        <h3>Mon panier</h3>

        <ul>
          <li>
            Un article à acheter
          </li>
        </ul>

        <div>
          Total : 0
        </div>
      </div>
    );
  }
}

export default Cart;