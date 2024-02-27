import React from "react";
import Award1 from "../asserts/1.png";
import Award2 from "../asserts/2.png";

const Award = () => {
  return (
    <>
      <section className="pt-2">
        <main className="flex flex-col lg:flex-row">
          {/* <img src={Award1} alt="" /> */}
          <div className="w-[33%] p-4 ">
            <img src={Award1} alt="" />
          </div>
          <div className="w-[67%]">
            <h1 className=" font-merriweather text-[14px] font-black heading ">
              {" "}
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h1>
            <ul className="mt-3 ml-10 list-disc font-semibold font-merriweather text-[13px] text-gray-900 leading-tight">
              <li>
                {" "}
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            {/* image */}

            <div className="  w-full   mt-5">
              <img src={Award2} alt="" />
            </div>

            <h1 className="text-[13.5px] mt-5 font-semibold font-merriweather">
              {" "}
              Government of India has awarded the{" "}
              <span className=" font-black">
                "National Energy Conservation Award 2018"
              </span>
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </h1>
          </div>
        </main>
      </section>
    </>
  );
};

export default Award;
