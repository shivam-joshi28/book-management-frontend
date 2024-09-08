import React, { useState } from "react";
import axios from "axios";

const BooksIssuedToPerson = () => {
  const [userId, setUserId] = useState("");
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `https://bookmanagement-six.vercel.app/transactions/issued-books?userId=${userId}`
      );
      setBooks(response.data.books);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  return (
    <div>
      <h2>Books Issued to a Person</h2>
      <input
        type="text"
        placeholder="Enter user ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={fetchBooks}>Get Books</button>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.bookName} (Issued: {new Date(book.issueDate).toDateString()},
            Returned:{" "}
            {book.returnDate
              ? new Date(book.returnDate).toDateString()
              : "Not yet returned"}
            )
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksIssuedToPerson;
