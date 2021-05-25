import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GamesIcon from '@material-ui/icons/Games';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const {balance} = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <GamesIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Casino
          </Typography>
          <Chip label={`Balance: $${balance}`} />
          <IconButton aria-label="Login"  color="inherit">
              <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
