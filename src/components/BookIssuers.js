import React, { useState } from "react";
import axios from "axios";

const BookIssuers = () => {
  const [bookName, setBookName] = useState("");
  const [currentIssuer, setCurrentIssuer] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [issuers, setIssuers] = useState([]); // Add state for issuers
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchIssuers = async () => {
    setLoading(true);
    setError(""); // Clear previous errors
    try {
      const response = await axios.get(
        `https://bookmanagement-six.vercel.app/transactions/book-issuers?bookName=${bookName}`
      );
      setCurrentIssuer(response.data.currentIssuer || "N/A"); // Default to "N/A" if not present
      setTotalCount(response.data.totalCount || 0); // Default to 0 if not present
      setIssuers(response.data.issuers || []); // Update issuers state
    } catch (error) {
      console.error("Error fetching issuers", error);
      setError("Failed to fetch issuers. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Book Issuers</h2>
      <input
        type="text"
        placeholder="Enter book name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button onClick={fetchIssuers} disabled={loading}>
        {loading ? "Loading..." : "Get Issuers"}
      </button>
      {error && <p className="error">{error}</p>}
      <div>
        <p>Total Count: {totalCount}</p>
        <p>Current Issuer: {currentIssuer}</p>
        <p>Issuers:</p>
        <ul>
          {issuers.map((issuer, index) => (
            <li key={index}>{issuer}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookIssuers;
