import React, { Component } from 'react';

class Shop extends Component {
  render () {
    return (
      <div className="Shop">
        This is Shop {this.props.price}
      </div>
    )
  }
}

export default Shop;