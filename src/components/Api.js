import React, {Component} from 'react';
import axios from 'axios';

class Api extends Component {

  constructor (props) {
    super(props);
    axios
      .get('https://swapi.co/api/people/')
      .then( (response) => {
        const results = response.data.results;
        this.setState({swCharacters : results});
      });

    this.state = {
      swCharacters :[],
    }
  }

  render () {
    return (
      <ul>
        {
          this.state.swCharacters.map(
            (character) => {
              return (<li>{character.name}</li>)
            }
          )
        }
      </ul>
    )
  }
}

export default Api;