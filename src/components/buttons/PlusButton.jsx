import React from "react";
import AddIcon from "@mui/icons-material/Add";

function PlusButton() {
  return (
    <div
      className="absolute bottom-20 right-10 flex justify-center items-center w-16 h-16 bg-Primary rounded-full ease-in-out duration-700 hover:bg-Pink group"
      style={{ boxShadow: "0 5px 10px rgba(149,157,165,0.2)" }}
    >
      <AddIcon
        style={{ width: "35px", height: "35px" }}
        className="text-Light ease-in-out duration-700 group-hover:text-Snow"
      />
    </div>
  );
}

export default PlusButton;
