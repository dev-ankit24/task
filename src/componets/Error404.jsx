import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-bold text-orange-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-600 mt-2">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-orange-500 text-white text-lg rounded-md shadow-md hover:bg-orange-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
