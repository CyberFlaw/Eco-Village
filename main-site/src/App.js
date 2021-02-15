import "./App.css";
import Headder from "./Components/Appbar";
import firebase from "firebase/app";

firebase.initializeApp({});

function App() {
  return (
    <div className="App">
      <Headder />
    </div>
  );
}

export default App;
