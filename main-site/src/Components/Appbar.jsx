import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Navbar from "./Drawer";

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

export default function Headder() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Navbar />
          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: "white" }}
          >
            FarmHub
          </Typography>
          <Button color="inherit">
            <i class="fa fa-power-off" aria-hidden="true"></i>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
