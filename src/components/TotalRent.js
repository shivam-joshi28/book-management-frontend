import React, { useState } from "react";
import axios from "axios";

const TotalRent = () => {
  const [bookName, setBookName] = useState("");
  const [totalRent, setTotalRent] = useState(0);

  const fetchTotalRent = async () => {
    try {
      const response = await axios.get(
        `https://bookmanagement-six.vercel.app/transactions/total-rent?bookName=${bookName}`
      );
      setTotalRent(response.data.totalRent);
    } catch (error) {
      console.error("Error fetching total rent", error);
    }
  };

  return (
    <div>
      <h2>Total Rent Generated</h2>
      <input
        type="text"
        placeholder="Enter book name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button onClick={fetchTotalRent}>Get Total Rent</button>
      <p>Total Rent: {totalRent}</p>
    </div>
  );
};

export default TotalRent;
