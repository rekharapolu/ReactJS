import React, { useState } from "react";

const FeedbackForm = () => {
  const initialState = {
    name: "",
    rating: "",
    feedback: "",
  };

  const [name, setName] = useState(initialState.name);
  const [rating, setRating] = useState(initialState.rating);
  const [feedback, setFeedback] = useState(initialState.feedback);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", { name, rating, feedback });

    // Reset form fields
    setName(initialState.name);
    setRating(initialState.rating);
    setFeedback(initialState.feedback);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Feedback Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-600 font-medium">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Rating (Radio) */}
          <div>
            <label className="block text-gray-600 font-medium">Rating:</label>
            <div className="space-x-4">
              <input
                type="radio"
                name="rating"
                value="1"
                checked={rating === "1"}
                onChange={(e) => setRating(e.target.value)}
              /> 1
              <input
                type="radio"
                name="rating"
                value="2"
                checked={rating === "2"}
                onChange={(e) => setRating(e.target.value)}
                className="ml-4"
              /> 2
              <input
                type="radio"
                name="rating"
                value="3"
                checked={rating === "3"}
                onChange={(e) => setRating(e.target.value)}
                className="ml-4"
              /> 3
            </div>
          </div>

          {/* Feedback (Text Area) */}
          <div>
            <label className="block text-gray-600 font-medium">Feedback:</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
