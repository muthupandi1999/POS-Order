import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "react-hot-toast";
import DynamicModal from "../DynamicModal";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
function VariationModal({ openModal, setOpenModal, data }) {
  const [updateOption, setUpdateOption] = useState(false);
  console.log("data", data?.variations);
  console.log("data", data);
  const handleInputClose = () => {
    console.log("cloase");
    setOpenModal(false);
    setUpdateOption(false)
  };

  const handleUpdate = () => {
    handleInputClose();

    Toast.success("Updated Successfully");
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    
    bgcolor: "white",
    borderRadius: "4px",
    boxShadow: 24,
    p: 2,
    outline: "none",
  };
  return (
    <Modal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={openModal}
      onClose={handleInputClose}
    >
      <Box sx={style}>
        <div className="">
          <div className="py-3 flex justify-between items-center  border-b border-Secondary">
            <h4>{data?.name}</h4>
            <CloseIcon onClick={handleInputClose} className="cursor-pointer" />
          </div>
          {!updateOption ? (
            <div className="flex justify-end items-center pt-4">
              <button
                className="btn bg-Pink border-0 rounded text-Light hover:bg-Pink h-[34px] min-h-max w-24 uppercase"
                onClick={() => setUpdateOption(true)}
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="flex justify-end items-center pt-4">
              <button
                className="btn bg-Pink border-0 rounded text-Light hover:bg-Pink h-[34px] min-h-max w-24 uppercase"
                onClick={() => setUpdateOption(false)}
              >
                Cancel
              </button>
            </div>
          )}

          <div className="overflow-x-auto  bg-Light my-4 max-h-[400px] h-auto rounded">
            {updateOption ? (
              <table className="table VariationTable table-xs">
                <thead className="z-10 bg-Primary">
                  <tr>
                    <th className="bg-Primar">S.No</th>
                    <th>Variation name</th>
                    <th>Price</th>
                    <th className="text-center">New Price(Optional)</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="overflow-hidden z-0">
                  {data?.variations?.map((e, index) => (
                    <tr key={e?.id}>
                      <td>{e?.id}</td>

                      <td>{e?.name}</td>
                      <td>{e?.price}</td>
                      <td className="text-center">
                        <input
                          type="text"
                          className="py-2 px-6 m-2 text-xs border border-1 border-Secondary focus:outline-none"
                          placeholder="Type new price in us dollar"
                        />
                      </td>
                      <td className="text-center">
                        <button className="bg-Pink rounded px-2 py-1 text-Light">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="table VariationTable table-xs">
                <thead className="z-10 bg-Primary">
                  <tr>
                    <th className="bg-Primar">S.No</th>
                    <th>Variation name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody className="overflow-hidden z-0">
                  {data?.variations?.map((e, index) => (
                    <tr key={e?.id}>
                      <td>{e?.id}</td>

                      <td>{e?.name}</td>
                      <td>{e?.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {updateOption && (
            <div className="flex justify-start items-center pt-4">
              <button
                className="btn bg-Pink border-0 rounded text-Light hover:bg-Pink h-[34px] min-h-max w-24 uppercase"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          )}
          {/* <div className="pb-2 px-3 pt-3 ">
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
            </div> */}

          {/* <div className="p-3 flex justify-between">
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
            </div> */}
        </div>
      </Box>
    </Modal>
  );
}

export default VariationModal;
