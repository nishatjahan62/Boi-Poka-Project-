import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({data}) => {
  // const [allBooks, setAllBooks] = useState([]);
  //   useEffect(() => {
  //     fetch("./booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //        setAllBooks(data);
  //       });
  //   },[allBooks]);

  return (
    <div className="mt-[80px] mb-[50px]">
      <h1 className="text-3xl text-center font-bold font-[workSans] text-[#23BE0A]">Books</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">    {data.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook}></Book>
        ))}</div>
    
    
    </div>
  );
};

export default Books;
