import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            📚 Boi Poka
          </h2>

          <p className="mt-4 text-gray-300">
            Discover, organize, and track your favorite books with Boi Poka. A
            modern platform for book lovers to manage their reading journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title text-white">Quick Links</h3>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="link link-hover">
                🏠 Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="link link-hover">
                ℹ️ About
              </Link>
            </li>

            <li>
              <Link to="/readList" className="link link-hover">
                📖 Read List
              </Link>
            </li>
          </ul>
        </div>

        {/* Developer Info */}
        <div>
          <h3 className="footer-title text-white">Developer</h3>

          <p>
            <span className="font-bold">Name:</span> Sohag Karmokar
          </p>

          <p>
            <span className="font-bold">Role:</span> Software Engineering
            Student
          </p>

          <p>
            <span className="font-bold">Project:</span> Boi Poka
          </p>

          <div className="mt-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-8 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Boi Poka | Developed with ❤️ by
          <span className="font-bold text-white"> Sohag Karmokar</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
