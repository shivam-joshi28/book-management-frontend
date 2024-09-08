import React, { useState } from "react";
import axios from "axios";

const ReturnBook = () => {
  const [bookName, setBookName] = useState("");
  const [userId, setUserId] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const returnBook = async () => {
    try {
      const response = await axios.put(
        "https://bookmanagement-six.vercel.app/transactions/return",
        {
          bookName,
          userId,
          returnDate,
        }
      );
      alert(
        `Book returned successfully! Transaction ID: ${response.data.transactionId}`
      );
    } catch (error) {
      console.error("Error returning book", error);
    }
  };

  return (
    <div>
      <h2>Return Book</h2>
      <input
        type="text"
        placeholder="Enter book name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter user ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />
      <button onClick={returnBook}>Return Book</button>
    </div>
  );
};

export default ReturnBook;
