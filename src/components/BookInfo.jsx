import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function BookInfo() {
  const location = useLocation();

  const data = location.state.data;

  const backToStore = () => {
    window.history.back();
  };

  if (!data) {
    console.log(data);
    return (
      <div className="bg-gray-900  w-full flex items-center justify-center h-96">
        <h1 className="text-4xl text-red-400 font-bold">Loading.........</h1>
      </div>
    );
  }
  return (
    <>
      {/* Displaying book details */}
      <div className="bg-gray-900  w-full flex items-center justify-end pr-10 pt-10">
        <img
          className="hover:cursor-pointer"
          onClick={backToStore}
          src="src\assets\multiply-2-32.ico"
          alt="cross logo"
        />
      </div>
      <div className="bg-gray-900  w-full flex items-center justify-center p-10 ">
        <div className="flex flex-wrap justify-center m-10">
          <div className="w-full flex justify-center h-96">
            <img
              className="h-full"
              src={`${data.volumeInfo.imageLinks.smallThumbnail}`}
              alt=""
            />
          </div>
          <div className="text-gray-200 gap-5 ">
            <h1 className="font-bold text-3xl text-orange-300">
              {" "}
              Tittle : {data.volumeInfo.title}
            </h1>
            <h2 className="mt-3">
              <span className="text-blue-300 text-lg">Subtittle</span> :{" "}
              {data.volumeInfo.subtitle}
            </h2>
            <h2>
              <span className="text-blue-300 text-lg">Auther</span> :{" "}
              {data.volumeInfo.authors}
            </h2>
            <h3>
              <span className="text-blue-300 text-lg">Publisher</span> :{" "}
              {data.volumeInfo.publisher}
            </h3>
            <h3>
              <span className="text-blue-300 text-lg">PublishedDate </span>{" "}
              {data.volumeInfo.publishedDate}
            </h3>
            <h3>
              <span className="text-blue-300 text-lg">Categories</span> :{" "}
              {data.volumeInfo.categories}
            </h3>
            <h3 className="text-wrap w-full my-5">
              <span className="text-blue-300 text-lg">Description</span>:{" "}
              {data.volumeInfo.description}
            </h3>
            <a
              href={`${data.volumeInfo.infoLink}`}
              className=" text-blue-700 hover:text-blue-500"
            >
              More Info
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookInfo;
