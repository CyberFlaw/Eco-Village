import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

function Signup() {
  const history = useHistory();

  const [user, setUser] = useState("");
  const [userStat, setUserStat] = useState("");

  const [state, setState] = useState({
    role: "",
    span: "",
    name: "",
    age: "",
    mail: "",
    phone: "",
    password: "",
    location: "",
    field: "",
  });

  const handleChange = (event) => {
    setUser(event.target.value);
    setState({ ...state, role: event.target.value });
  };

  const handleUserStat = (event) => {
    setUserStat(event.target.value);
    setState({ ...state, span: event.target.value });
  };

  const handleNameChange = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const handleAge = (e) => {
    setState({ ...state, age: e.target.value });
  };

  const handleEmail = (e) => {
    setState({ ...state, mail: e.target.value });
  };

  const handlePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const handlePhone = (e) => {
    setState({ ...state, phone: e.target.value });
  };

  const handleLocation = (e) => {
    setState({ ...state, loaction: e.target.value });
  };

  const handleFieldLocation = (e) => {
    setState({ ...state, field: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(state);
    firebase
      .auth()
      .createUserWithEmailAndPassword(state.mail, state.password)
      .then((userCredential) => {
        let user = userCredential.user;
        user
          .updateProfile({
            displayName: state.name,
          })
          .then(() => {
            firebase
              .database()
              .ref("/userdetails/")
              .push(
                {
                  name: state.name,
                  role: state.role,
                  mail: state.mail,
                  span: state.span,
                  location: state.location,
                  field: state.field,
                  age: state.age,
                },
                (err) => {
                  if (!err) {
                    let data = JSON.stringify(state);
                    window.localStorage.setItem("auth-data", data);
                    let path = `/`;
                    history.push(path);
                  }
                }
              );
          });
      });
  };

  const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }))(InputBase);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: 28 }}>Choose your role: </p>

        <RadioGroup
          aria-label="role"
          name="gender1"
          value={user}
          onChange={handleChange}
        >
          <FormControlLabel value="farmer" control={<Radio />} label="Farmer" />
          <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
        </RadioGroup>
      </div>

      {user === "farmer" ? (
        <React.Fragment>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <NativeSelect
              style={{ marginTop: 10 }}
              id="farmer-stat"
              value={userStat}
              onChange={handleUserStat}
              input={<BootstrapInput />}
            >
              <option value="local">Local</option>
              <option value="marginal">Marginal</option>
              <option value="comertial">Comertial</option>
            </NativeSelect>

            <form
              noValidate
              autoComplete="off"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                id="name"
                label="Name"
                style={{ marginTop: 10 }}
                onChange={handleNameChange}
              />
              <TextField
                id="phno"
                label="Phone number"
                style={{ marginTop: 10 }}
                onChange={handlePhone}
              />
              <TextField
                id="age"
                label="Age"
                style={{ marginTop: 10 }}
                onChange={handleAge}
              />
              <TextField
                id="mail"
                label="Email"
                style={{ marginTop: 10 }}
                onChange={handleEmail}
              />
              <TextField
                id="location"
                label="Location"
                style={{ marginTop: 10 }}
                onChange={handleLocation}
              />
              <TextField
                id="filed-location"
                label="Field Location"
                style={{ marginTop: 10 }}
                onChange={handleFieldLocation}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                onClick={handlePassword}
                style={{ marginTop: 10 }}
              />
            </form>

            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: 25 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <NativeSelect
              style={{ marginTop: 10 }}
              id="buyer-stat"
              value={userStat}
              onChange={handleUserStat}
              input={<BootstrapInput />}
            >
              <option value="consumer">Consumer</option>
              <option value="retailer">Retailer</option>
              <option value="wholesaler">Wholesaler</option>
            </NativeSelect>

            <form
              noValidate
              autoComplete="off"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                id="name"
                label="Name"
                style={{ marginTop: 10 }}
                onChange={handleNameChange}
              />
              <TextField
                id="phno"
                label="Phone number"
                style={{ marginTop: 10 }}
                onChange={handlePhone}
              />
              <TextField
                id="age"
                label="Age"
                style={{ marginTop: 10 }}
                onChange={handleAge}
              />
              <TextField
                id="mail"
                label="Email"
                style={{ marginTop: 10 }}
                onChange={handleEmail}
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                style={{ marginTop: 10 }}
                onChange={handlePassword}
              />
            </form>

            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: 25 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Signup;
