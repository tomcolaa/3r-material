import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  menu: {
    width: '100%',
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(4),
  }
}));

const Navigation = (props) => {
  const classes = useStyles();
  return(
    <React.Fragment>
      <Typography variant="h2">Shared State Example</Typography>
      <div className={classes.menu}>
        <Link to={props.to}>
          <Button color="primary" variant="contained" className={classes.button}>
            {`${props.name} via Router`}
          </Button>
        </Link>
        <Button
          color="primary"
          variant="contained"
          onClick={props.onClick}
          className={classes.button}
        >
          {`${props.name} via Redux`}
        </Button>
      </div>
    </React.Fragment>
  )
}

export default Navigation;
