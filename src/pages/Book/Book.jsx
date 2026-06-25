import React, { use } from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data);
  //   console.log(singleBook);

  const {
    bookName,
    author,
    image,
    rating,
    category,
    publisher,
    tags,
    yearOfPublishing,
    totalPages,
    bookId
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
    
    <div className="card bg-base-100 w-96 shadow-sm border-3 p-6 shadow">
      <figure className="p-6 bg-gray-100 w-2/3 mx-auto">
        <img className="h-[166px] w-[124px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-14">
          {tags.map((tag) => (
            <button>{tag}</button>
          ))}
        </div>

        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{totalPages}</div>
        </h2>
        <p>Book By : {publisher}</p>
        <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {rating} <FaRegStar />
          </div>
        </div>
      </div>
    </div>

    </Link>
  );
};

export default Book;
