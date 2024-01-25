import React from "react";
import DynamicModal from "../DynamicModal";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "react-hot-toast";
import Select from "react-select";

function PropertyItemAdd({ openModal, setOpenModal, heading }) {
  const handleInputClose = () => {
    setOpenModal(false);
  };

  const handleSave = () => {
    handleInputClose();
    Toast.success("Added Successfully");
  };

  return (
    <DynamicModal open={openModal} onClose={handleInputClose}>
      <div className="">
        <div className="py-3 flex justify-between items-center border-b border-1 border-Secondary">
          <h4 className="text-md capitalize font-semibold text-Primary">
            {heading}
          </h4>
          <CloseIcon onClick={handleInputClose} className="cursor-pointer" />
        </div>

        <div className="pb-2 pt-3">
          <label htmlFor="food group" className="">
            Name
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g Egg, Cheese, Mild, Spicy"
          />
        </div>

        <div className="pb-2">
          <label htmlFor="food group" className="">
            Price
          </label>
          <br />
          <input
            type="number"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g type price of this item in US Dollar"
          />
        </div>

        <div className="pb-2">
          <label htmlFor="multipleQuantity" className="select-none">
            <div className="flex items-center gap-2">
              <input
                className="checkbox checkbox-sm accent-Primary relative top-[-1px] left-[2px]"
                id="multipleQuantity"
                type="checkbox"
              />
              Allow multiple quantity?
            </div>
          </label>
        </div>

        <div className="pb-3 pt-3 flex justify-between">
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

export default PropertyItemAdd;
