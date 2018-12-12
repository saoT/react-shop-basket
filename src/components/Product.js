import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// declare du CSS
// ATTENTION : le fait du passe le CSS
// dans le className ne se fait que via Material-ui
// Ca n'appartient pas a tout projet React
const css = {
  card : {
    width: '100%',
    maxWidth: 300
  },
  media: {
    height: 240
  }
}

// class Product extends Component...

// declare un COMPONENT
function Product (props) {

  const {classes} = props;
  const img = "./assets/img/" + props.prod.img;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="carottes"
        />
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
          >
            {props.prod.name}
          </Typography>
          <Typography
            component="p"
          >
            {props.prod.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

// Normalement les proprietes sont passees
// par le parent
// withStyles permet d'en rajouter directement
// et entre autres des proprietes de styles
// props.card.maxWidth

export default withStyles(css)(Product);



