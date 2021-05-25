import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    stickToBottom: {
    backgroundColor: '#3f51b5',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 35,
    color: '#fff',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.stickToBottom} >
        <Typography variant="h6" className={classes.title}>
            &copy; Copyright 2021, Casino
        </Typography>
    </BottomNavigation>
  );
}
