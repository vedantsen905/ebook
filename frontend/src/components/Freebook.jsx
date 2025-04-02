import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../list.json"// ✅ Fixed import
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2, // ✅ Changed to prevent issues
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-bold text-2xl pb-2">Free Offered Courses</h1>
        <p>
          Explore a variety of free courses available for you to start learning today!
        </p>
      </div>

      <div className="mt-6">
        <Slider {...settings}>
          {filterData.length > 0 ? (
            filterData.map((item) => <Cards item={item} key={item.id} />)
          ) : (
            <p className="text-center text-gray-500">No free courses available</p>
          )}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
