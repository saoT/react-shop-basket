// React
import React, { Component } from 'react';

// Vendors
import Grid from '@material-ui/core/Grid';

// Custom
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

  render () {
    return (
      <div className="Shop">
        <Grid
          container
        >
          {
            shopProducts.map(
              oneProduct =>
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
                  <Product prod={oneProduct}/>
                </Grid>
              
              /* dans mon component 
                const prod = {
                  name: 'garlic',
                  img: 'garlic.jpeg',
                  price: 3
                }
                est accessible via props.prod
              */
            )
          }
        </Grid>
      </div>
    )
  }
}

export default Shop;