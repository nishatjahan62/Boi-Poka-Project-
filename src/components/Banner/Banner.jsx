import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#EEEEEE] my-[50px] rounded-xl py-15 px-[125px] mx-[115px] ">
      <div className="flex justify-between items-center">
        <div className="font-[playfair-display]">
          <h1 className="text-5xl font-bold pb-10 ">Books to freshen up <br /> your bookshelf.</h1>
          <button className="border bg-[#23BE0A] py-3 px-6 rounded-xl text-white text-lg ">View the list</button>
        </div>
        <div className="w-[296px] h-[366px]"> < img  src="/public/pngwing 1.png" alt=""/></div>
       
      </div>
    </div>
  );
};

export default Banner;
