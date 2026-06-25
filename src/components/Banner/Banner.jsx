import React from "react";
import { Link } from "react-router";
import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-[80vh] bg-base-200 rounded-3xl mt-6">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-12 px-8">
        <img
          src={bookImage}
          alt="Books Collection"
          className="max-w-sm md:max-w-md rounded-2xl shadow-2xl"
        />

        <div>
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              📚 Welcome to Book Vibe
            </h2>

            <p className="text-gray-500 mt-2">
              Your Personal Reading Companion
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover, Read &<span className="text-primary"> Organize</span>
            <br />
            Your Favorite Books
          </h1>

          <p className="py-6 text-lg text-gray-600 max-w-2xl">
            Explore a diverse collection of books, build your personal wishlist,
            track your reading journey, and discover your next favorite book
            with Book Vibe.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#books" className="btn btn-primary">
              Explore Books
            </a>

            <Link to="/readList" className="btn btn-outline">
              View Reading List
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary">100+</h3>
              <p className="text-sm text-gray-500">Books Available</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">24/7</h3>
              <p className="text-sm text-gray-500">Access Anytime</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">100%</h3>
              <p className="text-sm text-gray-500">Reader Friendly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
