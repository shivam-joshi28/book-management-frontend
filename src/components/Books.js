import React, { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  // Fetch all books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://bookmanagement-six.vercel.app/books"
        );
        setBooks(response.data);
        setError("");
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Could not fetch books");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchBooks();
  }, []);
  if (loading) {
    return <p>Loading Books...</p>; // Show loading message while fetching
  }

  return (
    <div className="book-list">
      <h2>Available Books</h2>
      <ul>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book._id}>
              <strong>{book.name}</strong> - {book.category} - Rent: $
              {book.rentPerDay} per day
            </li>
          ))
        ) : (
          <p>No books found</p>
        )}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Books;
