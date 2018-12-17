import React, {Component} from 'react';

class Cart extends Component {

  render () {

    let total = 0;

    return (
      <div className="Cart" style={{borderBottom: '10px solid green'}}>
        <h3>Mon panier</h3>
        <ul>

        {
          this.props.products.map( (prod) => {

            if (prod.qtt > 0) {
              total += prod.qtt*prod.price;
              return (
                <li>
                  {prod.name} : {prod.qtt} | sous-total : {prod.qtt*prod.price}$
                </li>
              )
            }
          })
        }


        </ul>
        <div>
          Total : {total}$
        </div>
      </div>
    );
  }
}

export default Cart;