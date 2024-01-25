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

function DynamicModal({ open, onClose, children }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}

export default DynamicModal;
