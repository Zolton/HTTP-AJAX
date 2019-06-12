import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import axios from "axios";

export default class FriendList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => console.log(res))
      // setState:({friends: res.friends})
      .catch(rej => console.log(rej));
    
  }

  render() {
    console.log("Hello from friendlist");
    return (
      <>
        <h3>hello from friendList!!</h3>
        {this.state.friends.map(friend =>{ 
          return (
            <>
            <p>Friend info:</p>
            <div>Name: {friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>
            <input 
            type="text"
            placeholder="Enter new friend here"
            name="newFriend"
            //value="this.state.newFriend"
            // creat new friend in state, changeHandler will just set name to value, nothing more
            //addNewFriend task will 1) prevent default, 2) create constant in shape of existing data item,
            //3) friends: [...this.state.friends, newFriend], newFriend
            // take existing array, pour it into a new array, add newFriend at the end, then reset the form value to zero
            />
            </>
          )}
          )}
      </>
    );
  }
}
