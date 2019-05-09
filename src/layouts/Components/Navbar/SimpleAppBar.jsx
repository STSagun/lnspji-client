import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NAVBAR_IMAGE } from '../../../config/constant';

const styles = {
  root: {
    flexGrow: 1,
  },
  logo: {
    margin: '10px',
  },
  logoText: {
    margin : '10px'
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
        <div className={classes.logo} >
          <img src={NAVBAR_IMAGE} alt={'logo'} height={100} />
          </div>
          <Typography variant="h6" color="inherit">
          <div className={classes.logoText} >
          लोक न्याय संस्थान <br/>
PUBLIC JUSTICE INSTITUTION<br/>
नई दिल्ली/NEW DELHI
</div>
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);