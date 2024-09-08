// export default Users;
import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await axios.get(
          "https://bookmanagement-six.vercel.app/users"
        );
        console.log("Fetched users:", response.data); // Log response data
        if (response.data && response.data.users) {
          setUsers(response.data.users); // Use the nested users array
        } else {
          setError("Unexpected data format");
        }
        setError("");
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Could not fetch users");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>; // Show loading message while fetching
  }

  return (
    <div className="user-list">
      <h2>Users</h2>
      {error ? (
        <p className="error">{error}</p> // Display error if present
      ) : (
        <ul>
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user._id}>
                <strong>{user.user_id}</strong>-<strong>{user.name}</strong> -{" "}
                {user.email}
              </li>
            ))
          ) : (
            <p>No users found</p> // Display message if no users
          )}
        </ul>
      )}
    </div>
  );
};

export default Users;
