import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/book/");

        console.log("Full API Response:", res.data); // Debugging

        let booksData = [];

        // ✅ Extract books from 'statuscode' if it exists and is an array
        if (res.data && Array.isArray(res.data.statuscode)) {
          booksData = res.data.statuscode;
        } else {
          throw new Error("Unexpected API response format");
        }

        // ✅ Filter books where category is "free" (case-insensitive)
        const freeBooks = booksData.filter(
          (book) => book.category?.toLowerCase() === "free"
        );

        setBook(freeBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getBook();
  }, []);

  // ✅ Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>Explore a variety of free courses available for you to start learning today!</p>
      </div>

      <div className="mt-6">
        {loading ? (
          <p className="text-center text-gray-500">Loading books...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : book.length > 0 ? (
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id || item._id} />
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">No free courses available</p>
        )}
      </div>
    </div>
  );
}

export default Freebook;
