import React from "react";
import "./App.css";
import {Route} from "react-router-dom"
import FriendList from "./components/FriendList";

class App extends React.Component {
  render() {
    return (
      // Set home as friendlist since it's where most of the action will be happening
      <div className="App">
        <Route exact path="/" component={FriendList} />
      </div>
    );
  }
}

export default App;
