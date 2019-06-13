import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";

export default class FriendList extends React.Component {
  state = {
    friends: [],
    newFriend: {
      name: "",
      age: "",
      email: ""
    },
    postSuccess: "",
    postError: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(rej => console.log(rej));
  }

  // postFriend - whatever you get, call it "friend", and post it to the server
  postFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => console.log(res))
      //.then(
      //  this.setState({ postSuccess: "Success! It was posted!", postError: "" })
      //)
      .catch(rej => console.log(rej)
     // this.setState({ postSuccess: "", postError: "It failed!" })
      );
  };

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  // axios fetches data from API, setsState, then forces a re-render of the page
  // Alternate - this.state.friends is what would be passed down to components
  // if friends were split into more pieces
  /* <Route 
    path="friend"
    render={props => {
      <Friend 
      {...props} 
      friend={this.friends.map(friend=>return friend)} 
      />
    }} 
    Map would just create a new card/component for each friend, change below to just use <Friend />
    while the Friend card/function would just use props.name, props.age, etc to list everything out
    */

  render() {
    console.log("Hello from friendlist");
    return (
      <>
        <h1>Friend info:</h1>
        {/* Map over array, spit out each object as its own item, */}
        {this.state.friends.map(friend => {
          return (
            <>
              {/* Display info in each object */}

              <div>Name: {friend.name}</div>
              <div>Age: {friend.age}</div>
              <div>Email: {friend.email}</div>
            </>
          );
        })}
        <form onSubmit={this.postFriend(this.state.newFriend)}>
          <p>
            <input
              type="text"
              placeholder="Enter new friend name"
              name="newFriend"
              onChange={this.handleChange}
              value={this.state.newFriend.name}
              //For tormorrow:
              //value="this.state.newFriend"
              // creat new friend in state, changeHandler will just set name to value, nothing more
              //addNewFriend task will 1) prevent default, 2) create constant in shape of existing data item,
              //3) friends: [...this.state.friends, newFriend], newFriend
              // take existing array, pour it into a new array, add newFriend at the end, then reset the form value to zero
              // multipel fields require multiple inputs, just aggregate changes in onSubmit/addNewFriend function
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter new friend age"
              name="newFriend"
              onChange={this.handleChange}
              value={this.state.newFriend.age}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter new friend email"
              name="newFriend"
              onChange={this.handleChange}
              value={this.state.newFriend.email}
            />
          </p>
        </form>
        <button type="submit">Submit</button>
      </>
    );
  }
}
