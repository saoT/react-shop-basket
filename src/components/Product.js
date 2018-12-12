import React, {Component} from 'react';

// declare un COMPONENT
class Product extends Component {

  handleItem = (operation) => {
    // add : += 1
    // remove : += -1
    if (this.state.qtt > 0 || operation === 1 ) { 
      let newQtt = this.state.qtt += operation;
      this.setState({qtt: newQtt});
    }
  }

  componentWillMount () {
    this.state = {
      qtt : 0
    }
  }

  render () {
    return (
      <div>
        <div>{this.props.prod.name}</div>
        <button onClick={()=>{this.handleItem(1)}}>ajouter</button>
        <button onClick={()=>{this.handleItem(-1)}}>supprimer</button>
        <div>{this.state.qtt}</div>
      </div>
    )
  }
}

export default Product;
