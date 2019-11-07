import React from 'react';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Home from './home';
import Page1 from './page1';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    minWidth: 250,
    padding: theme.spacing(4),
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.root}>
        <Route exact path="/" component={Home} />
        <Route exact path="/page1" component={Page1} />
      </Container>
    </React.Fragment>
  )
}

export default App;
