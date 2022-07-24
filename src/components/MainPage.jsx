import React from "react";
import illustration from "../../public/images/illustration-1.svg";

const MainPage = () => {
  return (
    <div className="h-[75vh] my-20  w-full justify-center items-center">
      <div className="flex w-full md:flex-row flex-col-reverse p-14 bg-grey justify-center items-center py-3">
        <div className="flex w-5/12 flex-col w-full justify">
          <h1 className="text-4xl subpixel-antialiased  w-50  font-semibold">
            Your all files are in <br />{" "}
            <span className="text-violet-400">secure Location</span>,
            <br />
            accessible anywhere anytime
          </h1>
          <p className="text-l w-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            nihil. Et maiores amet,incidunt nostrum architecto quo aperiam
            tenetur.
          </p>
          <div className="flex flex-row   py-3">
            <input
              type="enter file name"
              placeholder="Enter your file name"
              className=" p-2 w-5/12 bg-white text-black "
            />
            <button
              type="button"
              className="bg-violet-400 p-3 px-9 hover:bg-transparent ml-1"
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex w-6/12 flex-col w-full justify-center items-center">
          <img src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
