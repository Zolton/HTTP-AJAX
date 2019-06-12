import React from "react";
import {Route} from "react-router-dom"
import axios from "axios";

export default class FriendList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({friends: res.data}) )
      .catch(rej => console.log(rej));
  }
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
        {/* Map over array, spit out each object as its own item, */}
        {this.state.friends.map(friend =>{
          return (
            <>
            {/* Display info in each object */}
            <p>Friend info:</p>
            <div>Name: {friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>
            </>
          )}
          )}
          <form><p>
          <input 
            type="text"
            placeholder="Enter new friend name"
            name="newFriendName"
            //For tormorrow: 
            //value="this.state.newFriend"
            // creat new friend in state, changeHandler will just set name to value, nothing more
            //addNewFriend task will 1) prevent default, 2) create constant in shape of existing data item,
            //3) friends: [...this.state.friends, newFriend], newFriend
            // take existing array, pour it into a new array, add newFriend at the end, then reset the form value to zero
            // multipel fields require multiple inputs, just aggregate changes in onSubmit/addNewFriend function
            /></p>
            <p><input 
            type="text"
            placeholder="Enter new friend age"
            name="newFriendAge"
            /></p>
            <p><input 
            type="text"
            placeholder="Enter new friend email"
            name="newFriendEmail"
            /></p>
            </form>
            <button>Submit</button>
      </>
    );
  }
}


