import React, { useEffect, useState } from "react";
import axios from "axios";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  // Fetch users data from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/users/all-users"
        ); // Your API endpoint
        setUsers(response.data.data); // Assuming your ApiResponse structure has 'data' field
      } catch (err) {
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users based on search term (regex filter)
  const filteredUsers = users.filter((user) => {
    const searchRegex = new RegExp(searchTerm, "i");
    return (
      searchRegex.test(user.fullname) ||
      searchRegex.test(user.email) ||
      searchRegex.test(user.education) ||
      searchRegex.test(user.location) ||
      searchRegex.test(user.yearOfPassout) ||
      searchRegex.test(user.profession) ||
      searchRegex.test(user.phone)
    );
  });

  if (loading) return <p className="text-center">Loading users...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">
      {/* Search Bar */}
      <h1 className="text-4xl font-bold p-2">Search Alumini:-</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, email, education, location, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col p-6">
              {/* Avatar Icon */}
              {user.profile ? (
                <img
                  src={user.profile}
                  alt={`${user.fullname}'s avatar`}
                  className="w-16 h-16 rounded-full border-2 border-gray-300 mb-4 mx-auto"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 rounded-full border-2 border-gray-300 mb-4 text-gray-400 mx-auto"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
              )}

              <h3 className="text-xl font-bold text-blue-600 text-center mb-2">
                {user.fullname}
              </h3>

              {/* User Information */}
              <div className="text-gray-700 space-y-1">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <span className="font-medium break-all">{user.email}</span>
                </p>
                <p>
                  <span className="font-semibold">Education:</span>{" "}
                  <span className="font-medium">{user.education}</span>
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  <span className="font-medium">{user.location}</span>
                </p>
                <p>
                  <span className="font-semibold">Year of Passout:</span>{" "}
                  <span className="font-medium">{user.yearOfPassout}</span>
                </p>
                <p>
                  <span className="font-semibold">Profession:</span>{" "}
                  <span className="font-medium">{user.profession}</span>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <span className="font-medium break-all">{user.phone}</span>
                </p>
                <p>
                  <span className="font-semibold">Verified:</span>{" "}
                  <span className="font-medium text-green-500">
                    {user.verified ? "Yes" : "No"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCards;
