import React, { useState } from "react";
import DynamicModal from "../DynamicModal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import toast, { Toaster } from "react-hot-toast";
import AddIcon from "@mui/icons-material/Add";
import Dropdown from "../../Common/Dropdown";

function TagModal2({ tagOpen, setTagOpen }) {
  const [addNote, setAddNote] = useState(false);

  const handleInputClose = () => {
    setTagOpen(false);
    setAddNote(false);
  };

  const [selectedNotes, setSelectedNotes] = useState([]);

  const toggleNote = (note) => {
    if (selectedNotes.includes(note)) {
      // Note is already selected, so remove it
      setSelectedNotes(
        selectedNotes.filter((selectedNote) => selectedNote !== note)
      );
    } else {
      // Note is not selected, so add it
      setSelectedNotes([...selectedNotes, note]);
    }
  };

  return (
    <DynamicModal open={tagOpen} onClose={handleInputClose}>
      <div className="flex justify-between  items-center w-full">
        <p className="w-[40%] text-md">Chicken Mansooriyan</p>
        {/* <Dropdown /> */}
        <button
          className="btn min-h-max h-8 w-[85px] bg-Primary text-Light  transition ease-in-out delay-300 font-medium  text-xs hover:bg-Primary flex"
          onClick={() => setAddNote(!addNote)}
        >
          Add
          <AddIcon className="" sx={{ fontSize: "18px" }} />
        </button>
      </div>
      {addNote && (
        <input
          type="text"
          className="bg-Secondary px-2 py-2 text-sm w-full my-4 rounded  transition ease-in-out duration-700  border-0 focus:outline-none"
          placeholder="Add notes here..."
        />
      )}

      <div className="flex items-center flex-wrap gap-2 mt-2">
        <p
          className={`text-[12px] border border-1 border-Secondary py-1 px-2 rounded-xl cursor-pointer select-none ${
            selectedNotes.includes("Less spicy")
              ? "bg-Secondary text-Primary"
              : ""
          }`}
          onClick={() => toggleNote("Less spicy")}
        >
          Less spicy
        </p>
        <p
          className={`text-[12px] border border-1 border-Secondary py-1 px-2 rounded-xl cursor-pointer select-none ${
            selectedNotes.includes("Spicy") ? "bg-Secondary text-Primary" : ""
          }`}
          onClick={() => toggleNote("Spicy")}
        >
          Spicy
        </p>
        <p
          className={`text-[12px] border border-1 border-Secondary py-1 px-2 rounded-xl cursor-pointer select-none ${
            selectedNotes.includes("No salt") ? "bg-Secondary text-Primary" : ""
          }`}
          onClick={() => toggleNote("No salt")}
        >
          No salt
        </p>
        <p
          className={`text-[12px] border border-1 border-Secondary py-1 px-2 rounded-xl cursor-pointer select-none ${
            selectedNotes.includes("Extra sweet")
              ? "bg-Secondary text-Primary"
              : ""
          }`}
          onClick={() => toggleNote("Extra sweet")}
        >
          Extra sweet
        </p>
        <p
          className={`text-[12px] border border-1 border-Secondary py-1 px-2 rounded-xl cursor-pointer select-none ${
            selectedNotes.includes("Oilless") ? "bg-Secondary text-Primary" : ""
          }`}
          onClick={() => toggleNote("Oilless")}
        >
          Oilless
        </p>
      </div>

      <div className="pt-6 flex justify-end gap-2">
        <button
          onClick={() => {
            toast.success("Updated Successfully");
            handleInputClose();
          }}
          className="btn min-h-max h-[30px]  bg-Primary text-Light font-medium w-[90px] text-xs hover:bg-Primary"
        >
          Save
        </button>

        <button
          className="btn  min-h-max h-[30px]  text-xs"
          onClick={handleInputClose}
        >
          Cancel
        </button>
      </div>
    </DynamicModal>
  );
}

export default TagModal2;
