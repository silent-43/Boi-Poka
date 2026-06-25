import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB, addToWishListDB } from "../../utility/addToDB.js";

import { ToastContainer, toast } from 'react-toastify';

// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  // console.log(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  // console.log(singleBook);
  const {
    bookName,
    image,
    publisher,
    tags,
    category,
    review,
    totalPages,
    author,
    yearOfPublishing,
    rating,
  } = singleBook;
  // console.log(data);
  // console.log(typeof id, data)

  const handleMarkAsRead = (id) => {
    //store with id
    //where to store
    //array of collection
    //if book already exit then show a alert
    //if book not exist then push in the collection or array

    // MySwal.fire({
    //   title: "Good job!",
    //   text: "You clicked the button!",
    //   icon: "success",
    // });

    toast("Mark as Read !");
    addToStoredDB(id);
  };



   const handleMarkAsWishList = (id) => {
    
    addToWishListDB(id);
   }


  return (
    <diV className="w-2/3 mx-auto flex gap-5">
      <div>
        <img src={image} />
      </div>
      <ToastContainer />

      <div>
        <h2>{bookName}</h2>
        <p>
          <span className="font-bold">By :</span> {author}
        </p>
        <div className="badge badge-outline">{category}</div>
        <p>
          {" "}
          <span className="font-bold">Review :</span> {review}
        </p>

        <div className="flex gap-7 justify-baseline">
          <div>
            <span className="font-bold">Tag :</span>
          </div>
          <div className="flex justify-center gap-14">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-dashed mt-4 mb-3"></div>

        <div className=" flex justify-between">
          <div>
            <p> Number of Pages :</p>
          </div>
          <div>
            <span className="font-bold">{totalPages}</span>
          </div>
        </div>
        <div className=" flex justify-between">
          <div>
            <p>Publisher :</p>
          </div>
          <div>
            <span className="font-bold">{publisher}</span>
          </div>
        </div>
        <div className=" flex justify-between">
          <div>
            <p>Year Of Publishing :</p>
          </div>
          <div>
            <span className="font-bold">{yearOfPublishing}</span>
          </div>
        </div>
        <div className=" flex justify-between">
          <div>
            <p>Rating :</p>
          </div>
          <div>
            <span className="font-bold">{rating}</span>
          </div>
        </div>

        <div className="mt-4 ml-50 mt-7">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn btn-accent m-2"
          >
            Mark as Read
          </button>




          <button onClick={()=> handleMarkAsWishList(id)} className="btn btn-info m-2">Add to Wishlist</button>


        </div>
      </div>
    </diV>
  );
};

export default BookDetails;
