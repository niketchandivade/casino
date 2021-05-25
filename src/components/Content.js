import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from './Button';
import Popup from './Popup';
import Card from './Card';

const useStyles = makeStyles({
  cardContainer:{
    display:"flex",
    marginBottom:20,
  }
});

export default function Content(props) {
  const classes = useStyles();

  const {balance, setBalance} = props;
  const [openPopup, setOpenPopup] = useState(false);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);

  const tryDebug = () => {
    setFirst(7);
    setSecond(7);
    setThird(7);
  }

  const play = () => {
    setBalance(balance - 1);
    const fs = getRamdomNumber();
    const sd = getRamdomNumber();
    const tr = getRamdomNumber();
    setFirst(fs);
    setSecond(sd);
    setThird(tr);
    checkReward(fs, sd, tr);
  }

  const checkReward = (fs, sd, tr) => {
    if (fs == sd && sd == tr) {
      setBalance(balance + 5);
    }
    else if (fs == sd || sd == tr || fs == tr) {
      setBalance(balance + 0.5);
    }
  }

  const getRamdomNumber = () => {
    const min = Math.ceil(0);
    const max = Math.floor(9);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

  return (
    <>
      <Button text="Play" 
        onClick={() => {
          setOpenPopup(true);
        }}
      />
      <Popup
          title="Play"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
      > 
      <div className={classes.cardContainer}>
        <Card text={first}/>
        <Card text={second}/>
        <Card text={third}/>
      </div>
      <hr></hr>
        <Button text="Go!" onClick={play}/>
        <Button text="Try" onClick={tryDebug}/>
        <Button text="Close" onClick={() => {
          setOpenPopup(false);
        }} />
      </Popup>
    </>
  );
}
