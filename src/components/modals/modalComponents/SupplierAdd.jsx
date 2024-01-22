import React, { useState } from "react";
import DynamicModal from "../DynamicModal";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "react-hot-toast";

function SupplierAdd({ groupOpen, setGroupOpen, heading }) {
  const handleInputClose = () => {
    setGroupOpen(false);
  };

  const [selectedUnit, setSelectedUnits] = useState(null);

  const handleSave = () => {
    handleInputClose();
    Toast.success("Added Successfully");
  };

  const handleChange = (e) => {
    setSelectedUnits(e);
  };

  const unitOptions = [
    {
      value: 1,
      text: "Gram",
    },
    {
      value: 2,
      text: "Pieces",
    },
  ];
  return (
    <DynamicModal open={groupOpen} onClose={handleInputClose}>
      <div className="">
        <div className="p-3 flex justify-between items-center border-b border-1 border-Secondary">
          <h4 className="text-md capitalize font-semibold text-Primary">
            {heading}
          </h4>
          <CloseIcon onClick={handleInputClose} className="cursor-pointer" />
        </div>

        <div className="p-3">
          <label htmlFor="food group" className="">
            Name
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g Spicy chicken burger"
          />
        </div>

        <div className="p-3">
          <label htmlFor="email" className="">
            Email
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="Enter the email id"
          />
        </div>

        <div className="p-3">
          <label htmlFor="phone No" className="">
            Phone No
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g 01xxxxxxxxx"
          />
        </div>

        <div className="p-3">
          <label htmlFor="food group" className="">
            Address
          </label>
          <br />
          <textarea
            className="w-full py-3 px-2 my-2 rounded border border-1 border-Secondary resize-none focus:outline-none placeholder:text-sm"
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="e.g Enter address"
          ></textarea>
        </div>
        <div className="p-3 flex justify-between">
          <button
            className="btn primary-button font-semibold border-0 rounded min-h-max h-10 w-[45%]"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="btn primary-button-cancel btn-Secondary rounded border-0  font-semibold min-h-max h-10 w-[45%]"
            onClick={handleInputClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </DynamicModal>
  );
}

export default SupplierAdd;
