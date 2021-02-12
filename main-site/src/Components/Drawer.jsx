import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const destinationLinks0 = [
    "/preorder",
    "/store",
    "/prices/today",
    "/sellercart",
  ];
  const destinationLinks1 = ["/news", "/articles", "/videos", "/otherinfo"];
  const destinationLinks2 = ["/accountdetails", "/contactus"];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home"].map((text, index) => (
          <ListItem button key={text}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Sell Products", "Store", "Current Prices", "Crop Details"].map(
          (text, index) => (
            <ListItem button key={text}>
              <Link
                to={destinationLinks0[index]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["News", "Articles", "Related Videos", "Other Informations"].map(
          (text, index) => (
            <ListItem button key={text}>
              <Link
                to={destinationLinks1[index]}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Account Details", "Contact Us"].map((text, index) => (
          <ListItem button key={text}>
            <Link
              to={destinationLinks2[index]}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Log Out"].map((text) => (
          <ListItem button key={text}>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "darkred" }}
            >
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 32,
              width: 32,
              marginTop: 10,
              marginLeft: 5,
              color: "white",
            }}
          >
            <i class="fa fa-bars" aria-hidden="true"></i>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
