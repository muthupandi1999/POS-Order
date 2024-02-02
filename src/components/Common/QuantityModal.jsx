import React, { useRef, useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { Typography } from "antd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import toast, { Toaster } from "react-hot-toast";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
  outline: "none",
};
function CustomModal({ open, onClose }) {
  const [quantity, setQuantity] = useState(2);
  const [isDelete, setIsDelete] = useState(false);
  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
    // setIsDelete(false);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    // console.log(quantity);
    if (quantity > 1) {
      setIsDelete(false);
    } else {
      setIsDelete(true);
    }
  }, [quantity]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex justify-between ">
          <p>Chicken Mansooriyan</p>
          <div className="flex gap-3 items-center">
            <RemoveCircleOutlineIcon
              className="cursor-pointer"
              onClick={handleDecreaseQuantity}
            />
            {/* <span className="cursor-pointer border border-1 border-SemiLight rounded-full w-6 h-6 block flex justify-center items-center font-semibold">
            -
          </span> */}
            <span className="font-semibold w-3">{quantity}</span>
            <AddCircleOutlineIcon
              className="cursor-pointer"
              onClick={handleAddQuantity}
            />
          </div>
        </div>
        <div className="pt-6 flex justify-end gap-2">
          {isDelete ? (
            <button
              onClick={() => {
                onClose();
                toast.success("item Deleted");
              }}
              className="btn min-h-max h-[30px]  bg-Primary text-Light font-medium w-[90px] text-xs hover:bg-Primary"
            >
              Delete
            </button>
          ) : (
            <button
              onClick={() => {
                onClose();
                toast.success("Updated Successfully");
              }}
              className="btn min-h-max h-[30px]  bg-Primary text-Light font-medium w-[90px] text-xs hover:bg-Primary"
            >
              Save
            </button>
          )}

          <button
            className="btn  min-h-max h-[30px]  text-xs"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </Box>
    </Modal>
  );
}

export default CustomModal;
