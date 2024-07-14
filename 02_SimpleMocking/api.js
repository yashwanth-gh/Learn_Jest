const fetch = require("node-fetch");

async function fetchUser(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user = await response.json();
  return user;
}

export default fetchUser;
