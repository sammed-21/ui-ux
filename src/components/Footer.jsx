import React from "react";
import logo from "../../public/images/logo.svg";
import logoPhone from "../../public/images/phone.svg";
import logoEmail from "../../public/images/email.svg";
 

const Footer = () => {
  return (
    <div className="flex w-full  h-[50vh] bg-black">
      <div className="p-10 flex w-full md:flex-col flex-col ">

      <div className=" ">
           <img src={logo}   className="invert w-40 my-9" alt={"logo"} />
      </div>
      <div className="flex w-full md:flex-row flex-col justify-between text-center text-white">

      <div className=" ">
        <p>Phone +91 458945894</p>
        <p>sammed@gmail.com</p>
      </div>
      <div className="flex md:flex-col   flex-col justify-center text-center ">
            <a href="#">About us</a>
            <a href="#">Jobs</a>
            <a href="#">Blogs</a>
            <a href="#">press</a>
          </div>
      <div className="flex md:flex-col flex-col justify-center text-center ">
        <a href="#">Contact us</a>
        <a href="#">Terms</a>
        <a href="#">Policy</a>
      </div>
      <div className="flex md:flex-row w-1/12 flex-col justify-center">
        <img src={logoPhone} className="w-6 h-6 mx-5" alt="" />
        <img src={logoEmail} className="w-6 h-6"alt="" />
      </div>
      </div>
      </div>
         
        {/* <div className="flex my-4 md:flex-row flex-col justify-between">
          <div className="flex md:flex-col flex-col  ">
            <a href="#">sammed2110@gmail.com</a>
            <a href="#">91+ 323232323</a>
          </div>
      
       
        </div> */}
    </div>
  );
};

export default Footer;
