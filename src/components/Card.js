import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card:{
        marginLeft:"auto",
        marginRight:"auto",
    },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { text, ...other } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
