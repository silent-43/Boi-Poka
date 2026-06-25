import React from "react";
import Book from "../Book/Book";

const WishList = ({ wishList }) => {
  return (
    <div>
      <h2>
        <span className="font-bold">My Wish List :</span>{" "}
        <span className="font-bold">{wishList.length}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {wishList.map((book) => (
        <Book key={book.bookId} singleBook={book} />
      ))}
      </div>
    </div>
  );
};

export default WishList;