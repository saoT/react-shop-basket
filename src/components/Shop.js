// React
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Vendors
import Grid from '@material-ui/core/Grid';

import Cart from './Cart';
import Product from './Product';

const shopProducts = [
  {
    name: "garlic",
    img: "garlic.jpeg",
    price: 3
  },
  {
    name: "tomato",
    img: "tomato.jpeg",
    price: 1
  },
  {
    name: "pepper",
    img: "pepper.jpeg",
    price: 2
  },
  {
    name: "zucchini",
    img: "zucchini.jpeg",
    price: 2
  },
  {
    name: "eggplant",
    img: "eggplant.jpeg",
    price: 3
  },
  {
    name: "ratatouille",
    img: "ratatouille.jpeg",
    price: 10
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

  /* Ce CODE ne sert plus a rien
   Car on a separe Product de Shop*/
  handle = (index, operation) => {
    const newProducts = this.state.products;
    const newProduct = newProducts[index];

    newProduct.qtt = Math.max( (newProduct.qtt || 0 ) + operation, 0);

    // newProduct = condition? valueA : valueB;
    newProducts[index] = newProduct;
    this.setState({products : newProducts});
  }

  componentWillMount () {
    this.state = {
      products : shopProducts
    }
  }

  render () {
    return (
      <div className="Shop">
        <Cart products={this.state.products}/>
        <Grid
          container
        >
          {
            shopProducts.map(
              (oneProduct, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    style={{marginBottom: '40px'}}
                  >
                    <Product prod={oneProduct} index={index} handle={this.handle}/>

                  </Grid>
            )})}
        </Grid>
      </div>
    )
  }
}

export default Shop;