import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Dropdown = (data, placeHolder) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // const options = ["Extra Spicy", "Cheese", "Extra Hot"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // console.log("place", placeHolder);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={` border border-1  border-secondary text-Primary h-8 text-xs pl-4 w-[130px] flex justify-between items-center font-semibold rounded focus:outline-none`}
      >
        {selectedOption || "Tags"}

        <ExpandMoreIcon sx={{borderLeft:"0.001px solid #0000005c", width:"1.5em", }} />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white  rounded shadow-lg">
          {data?.data?.map((option) => (
            <div
              key={option}
              className="cursor-pointer px-4 py-1 text-sm hover:bg-blue-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
