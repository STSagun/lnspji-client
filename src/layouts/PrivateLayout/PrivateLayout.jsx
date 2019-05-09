import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import SimpleAppBar from '../Components/Navbar/index';
import Navbar from '../Components/Navbar/Navbar'


const style = {
  padding: '30px',
};
const root = {
  margin: '5px 10px'
}
const PrivateLayout = ({ children }) => (
  <div style={root}>
    <CssBaseline />
    <SimpleAppBar />
    <Navbar />
    <div style={style}>{children}</div>
  </div>
);
PrivateLayout.propTypes = {
  children: PropTypes.element.isRequired,
};


export default PrivateLayout;
