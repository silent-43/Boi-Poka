import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, getStoredWishList } from "../../utility/addToDB";
import WishList from "../WishList/WishList";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );

    setReadList(myReadList);
  }, [data]);

  useEffect(() => {
    const storedWishData = getStoredWishList();
    const convertedWishBooks = storedWishData.map((id) => parseInt(id));

    const myWishList = data.filter((book) =>
      convertedWishBooks.includes(book.bookId)
    );

    setWishList(myWishList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);

    if (tabIndex === 0) {
      const sortedReadList = [...readList].sort((a, b) =>
        type === "pages"
          ? a.totalPages - b.totalPages
          : a.rating - b.rating
      );

      setReadList(sortedReadList);
    }

    if (tabIndex === 1) {
      const sortedWishList = [...wishList].sort((a, b) =>
        type === "pages"
          ? a.totalPages - b.totalPages
          : a.rating - b.rating
      );

      setWishList(sortedWishList);
    }
  };

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">
          Sort By : {sort ? sort : ""}
        </summary>

        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <button onClick={() => handleSort("pages")}>Pages</button>
          </li>
          <li>
            <button onClick={() => handleSort("ratings")}>Ratings</button>
          </li>
        </ul>
      </details>

      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>
            <span className="font-bold">Read Book List</span>
          </Tab>

          <Tab>
            <span className="font-bold">My WishList</span>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>
            <span className="font-bold">Book I Read :</span>{" "}
            <span className="font-bold">{readList.length}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {readList.map((book) => (
            <Book key={book.bookId} singleBook={book} />
          ))}
          </div>
        </TabPanel>

        <TabPanel>
          <WishList wishList={wishList} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;