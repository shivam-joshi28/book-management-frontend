import React, { useState } from "react";
import axios from "axios";

const SearchBooksForm = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async () => {
    try {
      const queryParams = new URLSearchParams();
      if (searchTerm) queryParams.append("name", searchTerm);
      if (category) queryParams.append("category", category);
      if (price) queryParams.append("price", price);

      const response = await axios.get(
        `https://bookmanagement-six.vercel.app/books/filter/advanced?${queryParams.toString()}`
      );

      setBooks(response.data);
      setSearchPerformed(true); // Mark search as performed
    } catch (error) {
      console.error("Error fetching books:", error);
      setSearchPerformed(true); // Ensure the list is displayed even if no books are found
    }
  };

  return (
    <div className="search-books-form">
      <div className="search-form">
        <h2>Search Books</h2>

        <div className="search-form-group">
          <label htmlFor="searchTerm">Book Name or Term</label>
          <input
            id="searchTerm"
            type="text"
            placeholder="Enter book name or term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="search-form-group">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="search-form-group">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {searchPerformed && (
        <div className="books-list">
          {books.length > 0 ? (
            <>
              <h3>Books List</h3>
              <ul>
                {books.map((book) => (
                  <li key={book._id}>
                    <strong>{book.name}</strong> - {book.category} - Rent: $
                    {book.rentPerDay}/day
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>No books found based on the search criteria.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBooksForm;
