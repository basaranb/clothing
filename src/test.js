// import firebase from "firebase/app";
// import "firebase/firestore";

// const firestore = firebase.firestore();

// firestore
//   .collection("users")
//   .doc("sonw7Kfks9AofKB1Bpoh")
//   .collection("cartItems")
//   .doc("vNV7runa7bkxhWPTBIZw");

// firestore.doc("/users/sonw7Kfks9AofKB1Bpoh/cartItems/vNV7runa7bkxhWPTBIZw");

// firestore.collection("/users/sonw7Kfks9AofKB1Bpoh/cartItems");
const fetch = require("node-fetch");

const myAsyncFunction = async () => {
  const userResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await userResponse.json();
  const secondUser = users[1];

  console.log(secondUser);
};

myAsyncFunction();
