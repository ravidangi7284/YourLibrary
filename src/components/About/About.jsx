import React from "react";

function About() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="container m-auto px-6 text-gray-100 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-100 font-bold md:text-4xl">
              Browse thousands of digital books, and periodicals across various
              genres.
            </h2>
            <p className="mt-6 text-gray-300">
              Our library is more than just a place to borrow books—it's a
              community hub that fosters learning, creativity, and connection.
              Join us on this journey of discovery and exploration.
            </p>
            <p className="mt-4 text-gray-300">
              Get book suggestions based on your reading history and
              preferences.
            </p>
            <p className="mt-4 text-gray-300">
              Access eBooks, research databases, and learning tools anytime,
              anywhere.
            </p>
            <p className="mt-4 text-gray-300">
              Participate in book clubs, virtual events, and educational
              workshops.
            </p>
            <p className="mt-4 text-gray-300">
              Reserve physical books for in-library pick-up or place holds on
              digital materials with a click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
