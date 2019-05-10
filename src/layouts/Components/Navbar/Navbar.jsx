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
    margin: '0px 32px',
  },
  style: {
    textDecoration: 'none',
    color: 'white',
    transition: 'background-color 0.5s ease-out',
  },
  active: {
    
      background: '#7b88ff',
  }
};


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: 'false',
      home: 'true'
    };
  }

  handleClick = () => {
    localStorage.removeItem('Token');
  }

  onClick = () => {
    this.setState({
      isHover: 'true',
      home: 'false'
    })
  }

  render() {
    const {
      classes,
    } = this.props;
    const { 
      home, isHover
    } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <div className={classes.button}>
            <Button color="inherit"  className={home ? classes.active : ''} onClick={this.onClick}><Link to="/Home" className={classes.style}>Home</Link></Button>
            </div>
            <div  className={classes.button}>
            <Button color="inherit" className={isHover? 'active' : null} onClick={this.onClick}><Link to="/team" className={classes.style}>Team</Link></Button>
            </div>
            <div  className={classes.button}>
            <Button color="inherit" className={isHover ? 'active' : null} onClick={this.onClick}><Link to="/membership form" className={classes.style}>Membership Form</Link></Button>
            </div>
            <div  className={classes.button}>
            <Button color="inherit" className={isHover ? classes.myButtonClass : null} onClick={this.onClick}><Link to="/members" className={classes.style}>Members</Link></Button>
            </div>
            <div  className={classes.button}>
            <Button color="inherit" className={isHover ? classes.myButtonClass : null} onClick={this.onClick}><Link to="/complaints" className={classes.style}>Lodge a Complaints</Link></Button>
            </div>
            <div  className={classes.button}>
            <Button color="inherit" className={isHover ? classes.myButtonClass : null} onClick={this.onClick}><Link to="/donate" className={classes.style}>Donate</Link></Button>
            </div>
            <div  className={classes.button}>
            <Button color="inherit" className={isHover ? classes.myButtonClass : null} onClick={this.onClick}><Link to="/Contact" className={classes.style}>Contact Us</Link></Button>
            </div>
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
