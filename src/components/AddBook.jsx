import React, { useState } from "react";

const AddBook = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    image: "",
    publishedDate: "",
    description: "",
    rating: "",
    category: "",
    isRead: false,
    isFavorite: false,
  });

  const [errors, setErrors] = useState([]);

  const categories = [
    "fiction", "non-fiction", "poetry", "drama", "biography",
    "history", "science", "technology", "art", "music",
    "travel", "cooking", "gardening"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const validate = () => {
    const newErrors = [];
    if (!formData.title.trim()) newErrors.push("Title is required.");
    if (!formData.author.trim()) newErrors.push("Author is required.");
    if (formData.rating) {
      const num = Number(formData.rating);
      if (isNaN(num) || num < 1 || num > 5) {
        newErrors.push("Rating must be a number between 1 and 5.");
      }
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onAddBook(formData);
    // Reset form
    setFormData({
      title: "",
      author: "",
      image: "",
      publishedDate: "",
      description: "",
      rating: "",
      category: "",
      isRead: false,
      isFavorite: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Book</h2>
      
      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((err, idx) => <li key={idx}>{err}</li>)}
        </ul>
      )}

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <input
        type="url"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <input
        type="date"
        name="publishedDate"
        value={formData.publishedDate}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="number"
        name="rating"
        placeholder="Rating (1-5)"
        value={formData.rating}
        onChange={handleChange}
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <label>
        <input
          type="checkbox"
          name="isRead"
          checked={formData.isRead}
          onChange={handleChange}
        />
        Read
      </label>

      <label>
        <input
          type="checkbox"
          name="isFavorite"
          checked={formData.isFavorite}
          onChange={handleChange}
        />
        Favorite
      </label>

      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
