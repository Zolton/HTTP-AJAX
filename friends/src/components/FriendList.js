import React from "react";
//import { Route } from "react-router-dom";
import axios from "axios";

export default class FriendList extends React.Component {
  state = {
    friends: [],
    newFriend: {
      name: "",
      age: "",
      email: "",
      id: "",
      goodFriend: ""
    }
  };

  componentDidMount() {
    this.axioscall();
  }

  // modularity
  axioscall = () => {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => this.setState({ friends: res.data }))
      .catch(rej => console.log(rej));
  };

  // postFriend - whatever you get, call it "friend", and post it to the server
  postFriend = friend => {
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(res => console.log(res))
      .catch(rej => console.log(rej));
  };

  putFriend = (id, friend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => console.log(res))
      .catch(rej => console.log(rej));
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      // Modularity - call axiosGET, since the server was updated and prior friend deleted,
      //  calling it won't put them back in.  And axiosget has a SETSTATE built in, which
      // forces a re-render
      .then(res => this.axioscall())
      // less sexy alternative - just copy/paste the .then->setState from axios.get
      .then(res => this.setState({ friends: res.data }))
      .catch(rej => console.log(rej));
  };

  handleChange = e => {
    //e.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <>
        <h1>Friend info:</h1>
        {/* Purpose: Map over array, spit out each object as its own item, */}
        {this.state.friends.map(friend => {
          return (
            //
            <>
              {/* Display info in each object */}
              <div className="friendDisplay">
                <div>Name: {friend.name}</div>
                <div>Age: {friend.age}</div>
                <div>Email: {friend.email}</div>
                <div>Good Friend?: {friend.goodFriend}</div>
              </div>
              {/* This was driving me nuts - Biggest/ONLY problem was I
               can't put this.deleteFriend in curlys and call it a day bc
              React sets it as the default and deletes the entire array!
              The () act as the initial state, so the function is only called onClick  */}

              <button onClick={() => this.deleteFriend(friend.id)}>
                Delete friend # {friend.id}
              </button>
              <form
                onSubmit={() => {
                  this.putFriend(friend.id, this.state.newFriend);
                }}
              >
                <p>
                  <input
                    type="text"
                    placeholder="Update friend name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.newFriend.name}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="Update friend age"
                    name="age"
                    onChange={this.handleChange}
                    value={this.state.newFriend.age}
                    /*
              whatever you put for the input name, will show up at [e.target.name]. 
              That has to be one of the already existing keys for newFriend or 
              else you are just creating new key:value pairs
              */
                  />
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="Update friend email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.newFriend.email}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="Update friend ID"
                    name="id"
                    onChange={this.handleChange}
                    value={this.state.newFriend.id}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="Are they a good friend?"
                    name="goodFriend"
                    onChange={this.handleChange}
                    value={this.state.newFriend.goodFriend}
                  />
                </p>
                <button type="submit">
                  Update info for friend # {friend.id}
                </button>
              </form>
            </>
          );
        })}

        <form
          onSubmit={() => {
            this.postFriend(this.state.newFriend);
          }}
        >
          <h2> Add new friends! </h2>
          <p>
            <input
              type="text"
              placeholder="Enter new friend name"
              name="name"
              onChange={this.handleChange}
              value={this.state.newFriend.name}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter new friend age"
              name="age"
              onChange={this.handleChange}
              value={this.state.newFriend.age}
              /*
              whatever you put for the input name, will show up at [e.target.name]. 
              That has to be one of the already existing keys for newFriend or 
              else you are just creating new key:value pairs
              */
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter new friend email"
              name="email"
              onChange={this.handleChange}
              value={this.state.newFriend.email}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Enter new friend ID"
              name="id"
              onChange={this.handleChange}
              value={this.state.newFriend.id}
            />
          </p>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

// Stretch solution:
//  axios fetches data from API, setsState, then forces a re-render of the page
//   Alternate - this.state.friends is what would be passed down to components
//   if friends were split into more pieces
//   <Route
//     path="friend"
//     render={props => {
//       <Friend
//       {...props}
//       friend={this.friends.map(friend=>return friend)}
//       />
//     }}
//     Map would just create a new card/component for each friend, change below to just use <Friend />
//     while the Friend card/function would just use props.name, props.age, etc to list everything out
