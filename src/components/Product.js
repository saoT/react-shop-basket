import React, {Component} from 'react';

// declare un COMPONENT
class Product extends Component {

  render () {
    return (
      <div>
        <div>{this.props.prod.name}</div>
        <button>Ajouter</button>
        <div></div>
      </div>
    )
  }
}

export default Product;
