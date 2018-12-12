// React
import React, { Component } from 'react';

// Vendors
import Grid from '@material-ui/core/Grid';

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

  componentWillMount () {
    this.state = {
      products : shopProducts
    }
  }

  handle = (index) => {
    // [{0}, {1}, {2}, {3}, {4}, {5}]
    // Si index = 3
    // var newProd = {name : pepper, img: 'jpg', price: 2}
    // UN objet du tableau, pas de S
    let newProd = this.state.products[index];
    if (!newProd.qtt) newProd.qtt = 1;
    // var newProd = {name : pepper, img: 'jpg', price: 2, qtt: 1}
    // TOUT le tableau, S
    const newProds = this.state.products;
    newProds[index] = newProd;
    this.setState({products : newProds});

    console.log(index);
  }

  render () {
    return (
      <div className="Shop">
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
                    <div>
                      {oneProduct.name}
                    </div>
                    <div>
                      <button onClick={()=>{this.handle(index)}}>ajouter</button>
                    </div>
                    <div>
                      {oneProduct.qtt}
                    </div>
                  </Grid>
            )})}
        </Grid>
      </div>
    )
  }
}

export default Shop;