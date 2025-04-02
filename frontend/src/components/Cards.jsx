import React from "react";

function Cards({ item }) {
  return (
    <div className="p-4">
      <div className="bg-base-100 shadow-xl rounded-lg overflow-hidden hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="w-full h-48 overflow-hidden">
          <img
            src={item.image || "https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1743589960~exp=1743593560~hmac=c9479a54cc89fcd034a92afb7943a74a742a164f7df431530f5dc42e7c455b5a&w=900"}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-lg font-bold flex justify-between items-center">
            {item.name}
            <span className="bg-pink-500 text-white px-2 py-1 text-xs rounded-full">
              {item.category}
            </span>
          </h2>
          <p className="text-gray-500 mt-2">{item.title}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-semibold">${item.price}</span>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-700 duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
