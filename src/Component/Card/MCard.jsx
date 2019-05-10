import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { DEFAULT_BANNER_IMAGE } from '../../config/constant';

const styles = {
  card: {
    maxWidth: 300,
  },
  media: {
    height: 80,
  },
};
const propTypes = {
  defaultBanner: PropTypes.string,
};
const defaultTypes = {
  defaultBanner: DEFAULT_BANNER_IMAGE,
};

class MCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
  const { classes, defaultBanner } = this.props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={defaultBanner}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of s
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
}

MCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MCard);