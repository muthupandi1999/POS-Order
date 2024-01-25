import React, { useRef, useState, useEffect } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteModal from "../modals/modalComponents/DeleteModal";
import { useNavigate } from "react-router-dom";

function ActionIconWithItems({ openModal, setOpenModal, data }) {
  const dropdownRef = useRef(null);
  const [action, setAction] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const navigate = useNavigate();

  console.log("data1", data)
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
            <li
              className="hover:bg-Secondary py-1 px-1 flex justify-start gap-1 items-center"
              onClick={() =>{
                // alert(data?.slug)
                console.log("data34234", data)
                // alert(data)
                navigate(`/manage/food/properties/${data?.id}`);
              }}
            >
              <AddIcon className="w-8" sx={{ fontSize: "16px" }} />
              Items
            </li>
            <li
              className="hover:bg-Secondary py-1 px-1 flex justify-start gap-1 items-center"
              onClick={() => setOpenModal(true)}
            >
              <EditIcon className="w-8" sx={{ fontSize: "16px" }} />
              Edit
            </li>
            <li
              className="hover:bg-Secondary py-1 px-1 flex justify-start gap-1 items-center"
              onClick={() => setOpenDeleteModal(true)}
            >
              <DeleteIcon className="w-8" sx={{ fontSize: "16px" }} />
              Delete
            </li>
            <DeleteModal
              openDeleteModal={openDeleteModal}
              setOpenDeleteModal={setOpenDeleteModal}
            />
          </ul>
        </div>
      )}
    </div>
  );
}

export default ActionIconWithItems;
