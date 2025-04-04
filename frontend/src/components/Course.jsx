import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/book/");
        
        let booksData = [];

        // ✅ Proper API response handling
        if (response.data && Array.isArray(response.data.statuscode)) {
          booksData = response.data.statuscode; // Assuming books are inside `statuscode`
        } else if (Array.isArray(response.data)) {
          booksData = response.data;
        } else if (response.data && Array.isArray(response.data.data)) {
          booksData = response.data.data;
        } else {
          throw new Error("Unexpected API response format");
        }

        setBook(booksData);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to load courses. Please try again later.");
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>
        <p className="mt-6 text-gray-600">
          Explore our exclusive collection of free and premium courses.
          Learn at your own pace and enhance your skills!
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-12">
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : book.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {book.map((item) => (
              <Cards key={item._id || item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No courses available.</p>
        )}
      </div>
    </div>
  );
}

export default Course;
    