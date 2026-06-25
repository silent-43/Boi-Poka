import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary mb-4">
          About Book Vibe 📚
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Book Vibe is a modern book discovery platform designed for book
          lovers. Explore books, manage your reading journey, create wishlists,
          and keep track of the books you've completed.
        </p>
      </div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="Books"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Book Vibe?
          </h2>

          <p className="text-gray-600 mb-4">
            Reading books is one of the best ways to gain knowledge and expand
            imagination. Book Vibe helps readers organize their reading habits
            and discover amazing books from different categories.
          </p>

          <p className="text-gray-600">
            Whether you're a student, professional, or casual reader, Book Vibe
            provides an easy and enjoyable experience to manage your reading
            goals.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-center mb-8">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-2xl font-bold">📖 Read List</h3>
              <p>
                Keep track of the books you have already completed and monitor
                your reading progress.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-2xl font-bold">💖 Wishlist</h3>
              <p>
                Save books you want to read in the future and create your
                personal reading collection.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-2xl font-bold">📊 Smart Sorting</h3>
              <p>
                Organize books based on ratings and page count for a better
                reading experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="mt-16 bg-base-200 rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission 🚀</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our mission is to inspire more people to read, learn, and grow by
          making book management simple, interactive, and enjoyable for
          everyone.
        </p>
      </div>
    </div>
  );
};

export default About;