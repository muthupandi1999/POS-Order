import React from "react";
import DynamicModal from "../../DynamicModal";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "react-hot-toast";

function BranchAdd({openModal, setOpenModal, heading}) {

  const handleInputClose = () => {
    console.log("cloase");
    setOpenModal(false);
  };


  const handleSave = () => {
    handleInputClose();
    Toast.success("Added Successfully");
  };
  return (
    <DynamicModal open={openModal} onClose={handleInputClose}>
      <div className="">
        <div className="p-3 flex justify-between items-center border-b border-1 border-Secondary">
          <h4 className="text-md capitalize font-semibold text-Primary">
            {heading}
          </h4>
          <CloseIcon onClick={handleInputClose} className="cursor-pointer" />
        </div>

        <div className="pb-2 px-3 pt-3 ">
          <label htmlFor="name" className="">
            Name
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g Uttara Branch"
          />
        </div>

        <div className="pb-2 px-3">
          <label htmlFor="food group" className="">
            Phone No
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g 01xxxxxxxxxx"
          />
        </div>

        <div className="pb-2 px-3">
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

        <div className="pb-2 px-3">
          <label htmlFor="deliveryfee" className="">
            Delivery Fee
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g $1.12"
          />
        </div>

        <div className="pb-2 px-3">
          <label htmlFor="deliveryfee" className="select-none">
            <div className="flex items-center gap-2">
              <input
                className="checkbox checkbox-sm accent-Primary relative top-[-1px] left-[2px]"
                id="deliveryfee"
                type="checkbox"
              />
              Show / Hide
            </div>
          </label>
          {/* <input type="checkbox" className="accent-Primary mr-3" />
            <label htmlFor="HasProperties">Has Variations?</label> */}
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

export default BranchAdd;
