import { fetchUser } from "./api.js";

async function getUserName(userId) {
  const user = await fetchUser(userId);
  return user.name;
}

export default getUserName;
