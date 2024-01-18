import React, { useRef, useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { Typography } from "antd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import toast, { Toaster } from "react-hot-toast";
import AddIcon from "@mui/icons-material/Add";
import Dropdown from "../Common/Dropdown";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  borderRadius: "4px",
  boxShadow: 24,
  p: 2,
  outline: "none",
};

function TagModal({ open, onClose }) {
  const [addNote, setAddNote] = useState(false);

  const handleInputClose = () => {
    onClose();
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
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
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
              onClose();
              toast.success("Updated Successfully");
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
      </Box>
    </Modal>
  );
}

export default TagModal;
