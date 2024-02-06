import React, {useState, useCallback} from "react";
import { Drawer } from "@mui/material";

function CommonDrawer({ children, open, onClose }) {
//   const [open, setOpen] = useState(false);

//   const handleClose = useCallback(() => setOpen(false), []);
  return (
    <Drawer
      sx={{
        background: "1f1f1f",
        "& .css-1160xiw-MuiPaper-root-MuiDrawer-paper": {
          backgroundColor: "#f5f7fc",
        },
      }}
      anchor="right"
      open={open}
      onClose={onClose}
    >
      {children}
    </Drawer>
  );
}

export default CommonDrawer;
