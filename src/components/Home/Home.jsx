import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookInfo from "../BookInfo";

function Home() {
  const [data, setdata] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  };

  const bookHandle = (e) => {
    navigate(`/bookinfo`, { state: { data: e } });
  };
  function componentDidMount() {
    fetch(
      `http://localhost:8080/api/v1/public/books?page=1&limit=40&inc=kind%2Cid%2Cetag%2CvolumeInfo&query=${searchQuery}`
    )
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data.data);
      });
  }

  useEffect(() => {
    componentDidMount();
  }, [searchQuery]);

  if (data) {
    console.log(data);
  }

  if (!data) {
    return (
      <div className="bg-gray-900  w-full flex-col items-center justify-center h-96">
        <div className="w-full max-w-sm mx-auto py-10 min-w-[200px]">
          <form onSubmit={handleSearchSubmit} className="flex  gap-2">
            <div>
              <input
                className="w-full bg-gray-700 placeholder:text-slate-200 text-slate-300 text-sm border border-slate-200 rounded-md pl-2 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            >
              Search
            </button>
          </form>
        </div>

        <h1 className="text-4xl text-center text-red-400 font-bold">
          Loading please Wait.........
        </h1>
      </div>
    );
  }

  //${data[0].volumeInfo.imageLinks.thumbnail}
  return (
    <div className="bg-gray-900">
      <div className="w-full max-w-sm mx-auto py-10 min-w-[200px]">
        <form onSubmit={handleSearchSubmit} className="flex  gap-2">
          <div>
            <input
              className="w-full bg-gray-700 placeholder:text-slate-200 text-slate-300 text-sm border border-slate-200 rounded-md pl-2 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          >
            Search
          </button>
        </form>
      </div>
      <div className="bg-gray-900 flex flex-wrap p-10 gap-10 justify-center ">
        {data &&
          data.map((data) => (
            <div key={data.id}>
              <a
                onClick={() => bookHandle(data)}
                className="flex flex-col items-center duration-150 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-96 rounded-t-lg h-96 md:min-h-40 md:min-w-40 md:rounded-none md:rounded-s-lg"
                  src={`${data.volumeInfo.imageLinks.smallThumbnail}`}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.volumeInfo.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.volumeInfo.subtitle}
                  </p>
                  <p className="text-gray-200">Publisher</p>
                  <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                    {data.volumeInfo.publisher}
                  </p>
                  <p className="text-gray-200">PublishedDate</p>
                  <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                    {data.volumeInfo.publishedDate}
                  </p>
                </div>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
