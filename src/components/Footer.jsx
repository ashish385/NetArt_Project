import React from "react";
import { MdCall } from "react-icons/md";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 w-[99%] mx-auto bg-red-600 py-10 ">
        <div className="flex flex-col lg:flex-row ">
          {/* phone */}
          <div className="flex gap-1 justify-center items-center w-full h-full ">
            <div className="  bg-white p-1 rounded-full text-xl text-red-500 font-bold">
              <MdCall className="" />
            </div>
            <p className=" text-sm font-merriweather text-white pt-5">
              Toll free <span className=" font-bold">1800 200 1234</span>{" "}
            </p>
          </div>
          {/* Facebook */}
          <div className="flex gap-1 justify-center items-center w-full h-full mt-5 lg:mt-0">
            <div className="   rounded-full  text-white text-4xl font-bold">
              <BiLogoFacebookCircle />
            </div>
            <p className=" text-sm font-merriweather text-white pt-5">
              www.facebook.com/cripumps
            </p>
          </div>
          {/* Internet */}
          <div className="flex gap-1 justify-center items-center w-full h-full mt-5 lg:mt-0">
            <div className="    rounded-full text-3xl ">
              <CiGlobe className=" bg-white rounded-full text-red-500" />
            </div>
            <p className=" text-sm font-merriweather text-white pt-5">
              www.crigroups.com
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
