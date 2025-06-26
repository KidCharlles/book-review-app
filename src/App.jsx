import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {
  // State to keep track of all added books
  const [books, setBooks] = useState([]);

  // Function to add a new book to the books array
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="app">
      {/* Main title of the app */}
      <h1 className="title">Book-Review App! 📝</h1>
      
      {/* AddBook component to hadle adding new books */}
      <AddBook onAddBook={handleAddBook} />
      
      {/* BookList to display the list of books */}
      <BookList books={books} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
