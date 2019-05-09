import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  Route, BrowserRouter as Router, Switch, Redirect,
} from 'react-router-dom';
import theme from './theme';
import PrivateRoutes, { AuthRoutes } from './routes/index';
import { Main } from './pages/index'
import SharedSnackbarProvider from './Contexts/SnackBarProvider/SnackBarProvider';


const App = () => (
  <SharedSnackbarProvider>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <PrivateRoutes exact path="/Home" component={Main} />
          
        </Switch>
      </Router>
    </MuiThemeProvider>
  </SharedSnackbarProvider>
);

export default App;