import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4),
    padding: theme.spacing(4),
    textAlign: 'center'
  }
}));

const Incrementor = (props) => {
  const classes = useStyles();
  return(
    <Paper className={classes.root}>
      <Typography variant="h6">
        {`${props.name} says ${props.count}`}
      </Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={props.onClick}
      >
        Increment
      </Button>
    </Paper>
  )
}

export default Incrementor;
