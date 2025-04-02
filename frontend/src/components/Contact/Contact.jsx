import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Contact Us</h2>
        <p className="text-gray-500 text-center mb-6">We'd love to hear from you!</p>
        
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
            required 
            text
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
            required 
          />
          <input 
            type="text" 
            placeholder="Subject" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
          />
          <textarea 
            placeholder="Your Message" 
            rows="5" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" 
            required 
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-gray-500 hover:text-pink-500 transition duration-300">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-500 transition duration-300">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-500 transition duration-300">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;