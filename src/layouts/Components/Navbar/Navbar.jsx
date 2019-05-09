import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
    fontSize: '15px',
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: '25px',
  },
  style: {
    textDecoration: 'none',
    color: 'white',
  },
};


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = () => {
    localStorage.removeItem('Token');
  }

  render() {
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            
            <Button color="inherit"><Link to="/Home" className={classes.style}>Home</Link></Button>
            <Button color="inherit"><Link to="/team" className={classes.style}>Team</Link></Button>
            <Button color="inherit"><Link to="/membership form" className={classes.style}>Membership Form</Link></Button>
            <Button color="inherit"><Link to="/members" className={classes.style}>Members</Link></Button>
            <Button color="inherit"><Link to="/complaints" className={classes.style}>Lodge a Complaints</Link></Button>
            <Button color="inherit"><Link to="/donate" className={classes.style}>Donate</Link></Button>
            <Button color="inherit"><Link to="/Contact" className={classes.style}>Contact Us</Link></Button>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


Navbar.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Navbar);
