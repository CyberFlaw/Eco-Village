import React from "react";
import { Link } from "react-router-dom";

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
      <AppBar position="static" style={{ background: "green" }}>
        <Toolbar>
          <Navbar />
          <Typography
            variant="h6"
            className={classes.title}
            style={{ color: "white" }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              FarmHub
            </Link>
          </Typography>
          <Button color="inherit">
            <i class="fa fa-bell" aria-hidden="true"></i>
          </Button>
          <Button color="inherit">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa fa-power-off" aria-hidden="true"></i>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
