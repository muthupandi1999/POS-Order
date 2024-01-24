import React, { useRef, useState, useEffect } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteModal from "../modals/modalComponents/DeleteModal";

function ActionIcon({ rowId }) {
  const dropdownRef = useRef(null);
  const [action, setAction] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      // const currentRef = dropdownRef.current;

      // console.log("currentRef", currentRef);
      console.log("currentRef", e?.target);
      console.log(
        "currentRef.contains(e.target)",
        dropdownRef.current.contains(e.target)
      );
      if (!dropdownRef.current.contains(e.target)) {
        console.log("text");
        setAction(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickAction = () => {
    setAction(true);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <MoreHorizIcon
        onClick={handleClickAction}
        className={`cursor-pointer z-0 ${
          action ? "text-Pink" : "Text-Primary"
        }`}
      />
      {action && (
        <div className="border border-1 border-Secondary bg-Light p-1 w-20 absolute top-[72%] right-[25%] z-10">
          <ul>
            <li className="hover:bg-Secondary py-1 px-1 flex justify-start gap-1 items-center">
              <EditIcon className="w-8" sx={{ fontSize: "16px" }} />
              Edit
            </li>
            <li
              className="hover:bg-Secondary py-1 px-1 flex justify-start gap-1 items-center"
              onClick={() => setOpenModal(true)}
            >
              <DeleteIcon className="w-8" sx={{ fontSize: "16px" }} />
              Delete
            </li>
            <DeleteModal openModal={openModal} setOpenModal={setOpenModal} />
          </ul>
        </div>
      )}
    </div>
  );
}

export default ActionIcon;
