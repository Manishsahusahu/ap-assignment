import React from "react";
import image from "../../assets/ic_videoseries.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/Bi";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center space-x-3 px-4 h-[3rem] border-b-2">
      <div className="flex items-center justify-center mr-auto space-x-6">
        <img src={image} width={100} alt="" />

        <div className="searchBoxMd md:flex items-center  border-2 h-[2.1rem] rounded-md w-[28rem] lg:w-[35rem] hidden">
          <div className="categories flex items-center justify-center px-2 border-r-2 space-x-2 text-xs text-gray-600 h-[2.1rem]  ">
            <span>All</span>
            <BiSolidDownArrow />
          </div>
          <div className="searchInput w-36 px-3">
            <input type="text" placeholder="Search for video series" />
          </div>
          <div className="searchIcon flex items-center justify-center ml-auto border-l-2 px-2 bg-orange-200 h-[2.1rem] text-xl font-bold">
            {" "}
            <AiOutlineSearch className="font-medium" />
          </div>
        </div>
      </div>
      <div className="searchBox text-xl md:hidden">
        <AiOutlineSearch />
      </div>
      <div className="button bg-red-500 px-2 py-[2px] rounded-md text-white">
        My Video Series
      </div>
    </div>
  );
};

export default SearchBar;
