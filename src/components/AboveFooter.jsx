import React from "react";

const aboutFooter = () => {
  return (
    <div className="w-full h-[30vh] bg-[#242424]">
      <div className="flex w-full  p-5 md:flex-row flex-col justify-around item-center text-left text-white ">
        <div className="flex md:w-6/12 flex-col">
          <h1 className="text-3xl font-weight-500">Get early access</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            accusamus voluptatem incidunt est officia explicabo, voluptatibus
            vero nemo quas alias.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, nesciunt.
          </p>
        </div>
        <div className="my-9">
          <input
            value="enter the email"
            placeholder="Enter your email"
            className="p-3 "
          />
          <button className="bg-violet-400 p-3 px-9 hover:bg-transparent ml-1">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default aboutFooter;
