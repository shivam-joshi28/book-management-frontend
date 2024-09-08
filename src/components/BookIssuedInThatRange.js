import React, { useState } from "react";
import axios from "axios";

const BooksIssuedInDateRange = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure the dates are in the correct format for the API
      const response = await axios.get(
        "https://bookmanagement-six.vercel.app/transactions/date-range",
        {
          params: { startDate, endDate },
        }
      );

      console.log("API response:", response.data); // Debug API response
      setTransactions(response.data.transactions);
      setError("");
    } catch (err) {
      console.error(
        "API call error:",
        err.response ? err.response.data : err.message
      ); // Log detailed error
      setError("Error retrieving books issued in date range");
      setTransactions([]);
    }
  };

  return (
    <div className="container">
      <h2>Books Issued in Date Range</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Get Books</button>
      </form>

      {error && <div className="error">{error}</div>}

      {transactions.length > 0 && (
        <table className="results-table">
          <thead>
            <tr>
              <th>Book Name</th>
              <th>User ID</th>
              <th>Issue Date</th>
              <th>Return Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.bookName + transaction.issueDate}>
                <td>{transaction.bookName}</td>
                <td>{transaction.userId}</td>
                <td>{new Date(transaction.issueDate).toLocaleDateString()}</td>
                <td>
                  {transaction.returnDate
                    ? new Date(transaction.returnDate).toLocaleDateString()
                    : "Not Returned"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BooksIssuedInDateRange;
