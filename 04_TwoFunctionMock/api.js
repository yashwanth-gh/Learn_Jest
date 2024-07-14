// api.js
const fetch = require("node-fetch");

async function fetchUser(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await response.json();
  return user;
}

async function fetchPost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await response.json();
  return post;
}

export { fetchUser, fetchPost };
