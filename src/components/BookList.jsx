import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {/* Heading for the book list section */}
      <h2>Book List</h2>

      {/* If no books, show a message */}
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        /* Otherwise, map through books a BookCrd for each */
        books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))
      )}
    </div>
  );
};

export default BookList;
