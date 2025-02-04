# HTTP/AJAX

Topics:

* `axios` package
* AJAX
* Promises

## Instructions

x.  Run `yarn install or npm install` inside the root directory of this project1Run `yarn start or npm start` to start the server.
x.  The provided server returns a list of friends when a `GET` request is made to [`http://localhost:5000/friends`](http://localhost:5000/friends).
x.  In a separate terminal window, run `yarn create react-app friends` to create your starter React application.
x.  CD into `friends` and run `yarn add axios react-router-dom` or `npm install --save axios react-router-dom` to include those dependencies in your project. _You'll need react router for the stretch problems_
x.  Still inside your `friends` folder, run `yarn start` or `npm start` to fire up your React Dev Server.
x.  Inside your React application, create a component to display the list of friends coming from the server.
x.  Add a form to gather information about a new friend.
x.  Add a button to save the new friend by making a `POST` request to the same endpoint listed above.
x.  Each `friend` should have the properties listed below.
x.  Implement `Update` and `Delete` functionality.
    x for `update` pass the friend id as a URL parameter, and the information you want to update about the friend inside the body. You can build a new form in the UI for this, or, if you set it up correctly, reuse the form you made for the `POST` request.
    x for `delete`, add a `delete` button, or an `x` icon to each friend that will delete the friend when you click it. In the request url, pass the friend id as a URL parameter.

For reference, 
```js
{
  name: should be a string,
  age: should be a number,
  email: should be a string,
}
```

---

## Stretch Problems

1.  Separate the list of friends and the new friend form into different components, and use the appropriate React Router to build routes for the proper aspects of your components to be revealed separately.
x.  Style the friends list, the input field, and make everything look nice.
x.  Expand the number of properties that you put on each friend object.
1.  Feel free to remove the dummy data on the server or modify it in any way.