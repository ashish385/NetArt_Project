import React from "react";
import image from "../asserts/3.png";
import CustomTag from "./CustomTag";

const Materiles = () => {
  return (
    <>
      <section className="w-[97c%] mx-auto mt-8 pt-4">
        <h1 className=" font-bold font-merriweather text-[13px]">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h1>
        <div className="w-11/12 mx-auto mt-4 px-10">
          <img src={image} alt="" />
        </div>
        {/* tag */}
        <p className=" text-center pt-2 font-bold font-merriweather text-[13px]">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <div className="h-[2px] rounded-md mt-3 bg-red-600"></div>

        <h1 className="font-black font-merriweather text-[13px] text-center my-3">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h1>

        <div className="  text-center pt-2 font-bold font-merriweather text-[13px]">
          CHEMICALS & PROCESS <CustomTag /> POWER <CustomTag /> WATER & WASTE
          WATER <CustomTag /> OILS & GAS PHARMA <CustomTag /> SUGARS &
          DISTILLERIES <CustomTag /> PAPER & PULP <CustomTag /> MARINE & DEFENCE
          <CustomTag />
          METAL & MINING
          <CustomTag /> FOOD & BEVERAGE <CustomTag /> PETROCHEMICAL & REFINERIES{" "}
          <CustomTag />
          SOLAR <CustomTag /> BUILDING <CustomTag /> HVAC <CustomTag /> FIRE{" "}
          <CustomTag />
          FIGHTING <CustomTag /> AGRICULTURE & RESIDENTIAL
        </div>
      </section>
    </>
  );
};

export default Materiles;
