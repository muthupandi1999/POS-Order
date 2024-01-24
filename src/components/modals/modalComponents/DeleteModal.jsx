import React from "react";
import DynamicModal from "../DynamicModal";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "react-hot-toast";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
function DeleteModal({ openModal, setOpenModal }) {
  const handleInputClose = () => {
    console.log("cloase");
    setOpenModal(false);
  };

  const handleSave = () => {
    handleInputClose();
    Toast.success("Deleted Successfully");
  };
  return (
    <DynamicModal open={openModal} onClose={handleInputClose}>
      <div className="">
        <div className="p-3 flex justify-between items-center">
          <p></p>
          <CloseIcon onClick={handleInputClose} className="cursor-pointer" />
        </div>
        <div className="pb-2 px-3 pt-3 ">
          <div className="text-center p-3 bg-[#fee2e2] rounded-full w-fit m-auto flex items-center justify-center mb-4">
            <DeleteOutlineOutlinedIcon
              className="text-Pink"
              sx={{ fontSize: "25px" }}
            />
          </div>
          <h4 className="text-center font-semibold pb-2">Confirm Delete</h4>
          <h6 className="text-center pb-2">
            Are you sure you would like to do this?
          </h6>
        </div>

        <div className="p-3 flex justify-between">
          <button
            className=" bg-transparent primary-button text-Primary font-semibold border border-1 border-Secondary  rounded min-h-max h-10 w-[45%] hover:bg-transparent"
            onClick={handleInputClose}
          >
            Cancel
          </button>
          <button
            className="btn primary-button-cancel btn-Secondary rounded border-0  font-semibold min-h-max h-10 w-[45%]"
            onClick={handleSave}
          >
            Delete
          </button>
        </div>
      </div>
    </DynamicModal>
  );
}

export default DeleteModal;
