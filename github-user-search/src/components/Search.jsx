import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    setLoading(true);
    setError(false);
    setUserData(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "10px" }}>
          Search
        </button>
      </form>
      {/* Loading state */}
      {loading && <p style={{ marginTop: "20px" }}>Loading...</p>}
      {/* Error state */}
      {error && (
        <p style={{ marginTop: "20px", color: "red" }}>
          Looks like we can’t find the user
        </p>
      )}
      {/* Success state */}
      {userData && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={userData.avatar_url}
            alt="avatar"
            width="120"
            style={{ borderRadius: "8px" }}
          />
          <h2>{userData.name || userData.login}</h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};
export default SearchBar;