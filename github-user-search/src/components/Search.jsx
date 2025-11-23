import React, { useState } from "react";
import { advancedUserSearch } from "../services/githubService";
const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const users = await advancedUserSearch(username, location, minRepos);
      setResults(users);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg space-y-4 max-w-xl mx-auto"
      >
        <h2 className="text-xl font-bold text-gray-800">Advanced User Search</h2>
        {/* Username */}
        <input
          type="text"
          placeholder="GitHub username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
        {/* Location */}
        <input
          type="text"
          placeholder="Location (e.g. South Africa)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
        {/* Minimum Repositories */}
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-3 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>
      {/* Loading */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {/* Error */}
      {error && (
        <p className="text-center mt-4 text-red-500">
          Looks like we cant find the user
        </p>
      )}
      {/* Results */}
      {results.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {results.map((user) => (
            <div
              key={user.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
            >
              <img
                src={user.avatar_url}
                alt="avatar"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold">{user.login}</h3>
                <p>Score: {user.score}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Search;