import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SearchBooksForm from "./components/SearchBooksForm";
import BookIssuers from "./components/BookIssuers";
import IssueBook from "./components/IssueBook";
import ReturnBook from "./components/ReturnBook";
import BooksIssuedToPerson from "./components/BooksIssuedToPerson";
import TotalRent from "./components/TotalRent";
import Users from "./components/Users";
import Books from "./components/Books";
import BooksIssuedInDateRange from "./components/BookIssuedInThatRange";

function App() {
  // const [showSearchForm, setShowSearchForm] = useState(true);

  return (
    <Router>
      <div className="App">
        <h1>Book Management System</h1>
        <nav>
          <ul>
            <li>
              <Link to="/Search-Book-Form">Search Book</Link>
            </li>
            <li>
              <Link to="/View-All-Books">View All Books</Link>
            </li>
            <li>
              <Link to="/View-All-Users">View All Users</Link>
            </li>
            <li>
              <Link to="/issue-book">Issue Book</Link>
            </li>
            <li>
              <Link to="/return-book">Return Book</Link>
            </li>
            <li>
              <Link to="/book-issuers">Book Issuers</Link>
            </li>
            <li>
              <Link to="/books-issued-to-person">Books Issued to a Person</Link>
            </li>
            <li>
              <Link to="/total-rent">Total-Rent-Generated</Link>
            </li>
            <li>
              <Link to="/Book-issued-data-range">BookIssued date-Range</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Search-Book-Form" element={<SearchBooksForm />} />
          <Route path="/issue-book" element={<IssueBook />} />
          <Route path="/View-All-Books" element={<Books />} />
          <Route path="/View-All-Users" element={<Users />} />
          <Route path="/return-book" element={<ReturnBook />} />
          <Route path="/book-issuers" element={<BookIssuers />} />
          <Route
            path="/Book-issued-data-range"
            element={<BooksIssuedInDateRange />}
          />

          <Route
            path="/books-issued-to-person"
            element={<BooksIssuedToPerson />}
          />
          <Route path="/total-rent" element={<TotalRent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
