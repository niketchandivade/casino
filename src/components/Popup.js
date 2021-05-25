import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
    maxWidth:"600px",
  },
  dialogTitle: {
    padding: "0px",
  },
  dialogContent: {
    borderBottom: "none",
  },
}));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      fullWidth={false}
      maxWidth={"md"}
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </div>
      </DialogTitle>
      <DialogContent dividers className={classes.dialogContent}>
        {children}
      </DialogContent>
    </Dialog>
  );
}
