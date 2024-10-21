import React, { useState } from 'react';
import './FeedbackForm.css'; // Importing CSS for styling

const FeedbackForm = () => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  // State to handle submission
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (name && comment) {
      setSubmitted(true);
      console.log('Name:', name);
      console.log('Comment:', comment);
      // Reset the form (optional)
      setName('');
      setComment('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="feedback-form-container">
      {submitted ? (
        <h2>Thank you for your feedback, {name}!</h2>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <h2>User Feedback</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter your comment"
              className="form-textarea"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
