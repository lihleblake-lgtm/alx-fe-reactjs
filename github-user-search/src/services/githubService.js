import axios from "axios";
const SEARCH_URL = "https://api.github.com/search/users?q=";
export const advancedUserSearch = async (username, location, minRepos) => {
  let query = "";
  if (username) query += `${username} `;
  if (location) query += `location:"${location}" `;
  if (minRepos) query += `repos:>=${minRepos} `;
  try {
    const response = await axios.get(`${SEARCH_URL}${query}`);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};