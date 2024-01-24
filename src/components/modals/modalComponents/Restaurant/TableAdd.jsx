import React, { useState } from "react";
import DynamicModal from "../../DynamicModal";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "react-hot-toast";
import Select from "react-select";
function TableAdd({ openModal, setOpenModal, heading }) {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const handleInputClose = () => {
    console.log("cloase");
    setOpenModal(false);
  };

  const handleSave = () => {
    handleInputClose();
    Toast.success("Added Successfully");
  };

  const handleChangeBranch = (e) => {
    setSelectedBranch(e);
  };

  const handleChangePermissionGroup = (e) => {
    setSelectPermissionGroup(e);
  };

  const filterOptionBranch = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };
  const branches = [
    {
      value: 1,
      text: "Uttara",
    },
    {
      value: 2,
      text: "Dhaka",
    },
    {
      value: 3,
      text: "Madurai",
    },
  ];

  const handleChangeStatus = (e) => {
    setSelectedBranch(e);
  };

  const filterOptionStatus = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };
  const statuses = [
    {
      value: 1,
      text: "Open",
    },
    {
      value: 2,
      text: "Checked In",
    },
    {
      value: 3,
      text: "Seated",
    },
    {
      value: 4,
      text: "Checked Out",
    },
    {
      value: 5,
      text: "Dirty",
    },
  ];
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
            placeholder="e.g Delivery, Takeaway"
          />
        </div>

        <div className="pb-2 px-3 ">
          <label htmlFor="branch" className="">
            Select a branch
          </label>
          <Select
            className="w-[100%] my-2"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
              },
            }}
            placeholder="Select a branch"
            isClearable={true}
            value={selectedBranch}
            options={branches}
            onChange={handleChangeBranch}
            getOptionLabel={(e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                {/* {e.icon} */}
                <span style={{ marginLeft: 5, fontSize: "13px" }}>
                  {e.text}
                </span>
              </div>
            )}
            filterOption={filterOptionBranch}
          />
        </div>

        <div className="pb-2 px-3">
          <label htmlFor="name" className="">
            Guest Capacity
          </label>
          <br />
          <input
            type="number"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g 5"
          />
        </div>

        <div className="pb-2 px-3 ">
          <label htmlFor="branch" className="">
            Select a status
          </label>
          <Select
            className="w-[100%] my-2"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
              },
            }}
            placeholder="Select a status"
            isClearable={true}
            value={selectedStatus}
            options={statuses}
            onChange={handleChangeStatus}
            getOptionLabel={(e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                {/* {e.icon} */}
                <span style={{ marginLeft: 5, fontSize: "13px" }}>
                  {e.text}
                </span>
              </div>
            )}
            filterOption={filterOptionStatus}
          />
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

export default TableAdd;
