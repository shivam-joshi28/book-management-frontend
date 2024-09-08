import React, { useState } from "react";
import axios from "axios";

const IssueBook = () => {
  const [bookName, setBookName] = useState("");
  const [userId, setUserId] = useState("");
  const [issueDate, setIssueDate] = useState("");

  const issueBook = async () => {
    try {
      const response = await axios.post(
        "https://bookmanagement-six.vercel.app/transactions/issue",
        {
          bookName,
          userId,
          issueDate,
        }
      );
      alert(
        `Book issued successfully! Transaction ID: ${response.data.transactionId}`
      );
    } catch (error) {
      console.error("Error issuing book", error);
    }
  };

  return (
    <div>
      <h2>Issue Book</h2>
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
        value={issueDate}
        onChange={(e) => setIssueDate(e.target.value)}
      />
      <button onClick={issueBook}>Issue Book</button>
    </div>
  );
};

export default IssueBook;
