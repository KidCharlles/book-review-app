import React from "react";

// BookCard component receives a single 'book' object as a prop
const BookCard = ({ book }) => {
  return (
    // Container div with some simple inline styling for border and spacing
    <div className="book-card" style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      
      {/* If book.image exists, display the book cover */}
      {book.image && (
        <img
          src={book.image}
          alt={`${book.title} cover`}  // alt text for accessibility
          style={{ width: "100px", height: "auto", marginBottom: "0.5rem" }}
        />
      )}
      
      {/* Display the book title */}
      <h3>{book.title}</h3>
      
      {/* Display the author */}
      <p><strong>Author:</strong> {book.author}</p>
      
      {/* Display published date if it exists, formatted nicely */}
      {book.publishedDate && (
        <p><strong>Published:</strong> {new Date(book.publishedDate).toLocaleDateString()}</p>
      )}
      
      {/* Display description if it exists */}
      {book.description && <p>{book.description}</p>}
      
      {/* Display rating if it exists */}
      {book.rating && <p><strong>Rating:</strong> {book.rating} / 5</p>}
      
      {/* Display category if it exists */}
      {book.category && <p><strong>Category:</strong> {book.category}</p>}
      
      {/* Show if the book is read or not */}
      <p><strong>Read:</strong> {book.isRead ? "Yes" : "No"}</p>
      
      {/* Show if the book is marked as favorite */}
      <p><strong>Favorite:</strong> {book.isFavorite ? "Yes" : "No"}</p>
    </div>
  );
};

export default BookCard;
