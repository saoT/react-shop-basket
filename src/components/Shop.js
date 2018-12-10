import React, { Component } from 'react';
import Product from './Product';

const products = [
  {
    name: "manteau",
    img: "url",
    price: 20
  },
  {
    name: "bottes",
    img: "url",
    price: 30
  },
  {
    name: "tshirt",
    img: "url",
    price: 10
  },
  {
    name: "pull",
    img: "url",
    price: 20
  },
  {
    name: "cravate",
    img: "url",
    price: 10
  },
  {
    name: "chaussette",
    img: "url",
    price: 5
  }
];

class Shop extends Component {

  /*
    Un component vient toujours avec un objet vide
    this.props = {
      fruit: "tomate"
    }
    fruit est une clé d'objet (object key)
  */

  render () {
    return (
      <div className="Shop">
      {
        products.map(
          product => <Product prod={product}/>
        )
      }
      </div>
    )
  }
}

export default Shop;