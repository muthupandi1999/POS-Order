import React, { useState, useEffect } from "react";
import Select from "react-select";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "react-hot-toast";
import DynamicModal from "../DynamicModal";
function RolePermissionAdd({
  openModal,
  setOpenModal,
  heading,
}) {
  const [selectedRoles, setSelectedRoles] = useState(null);

  // handle onChange event of the dropdown
  const handleChangeRole = (e) => {
    setSelectedRoles(e);
  };

  // handle custom filter
  const filterOptionRoles = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const handleInputClose = () => {
    setOpenModal(false);
  };

  const handleSave = () => {
    handleInputClose();
    Toast.success("Added Successfully");
  };

  const Roles = [
    {
      value: 1,
      text: "Customer",
    },
    {
      value: 2,
      text: "Manage",
    },
    {
      value: 3,
      text: "POS",
    },
    {
      value: 4,
      text: "Report",
    },
    {
      value: 5,
      text: "Delivery",
    },
    {
      value: 6,
      text: "Kitchen",
    },
  ];

  return (
    <DynamicModal open={openModal} onClose={handleInputClose}>
      <div className="p-3 flex justify-between items-center border-b border-1 border-Secondary">
        <h4 className="text-Primary text-xl capitalize font-bold">
          Add new Receipe
        </h4>
        <CloseIcon onClick={handleInputClose} className="cursor-pointer" />
      </div>

      <div className="pb-2 px-3 pt-3">
        <label htmlFor="food group" className="">
          Name
        </label>
        <br />
        <input
          type="text"
          className="w-full py-1.5 px-2 my-2 rounded border border-1 border-Secondary focus:outline-none"
          placeholder="e.g Spicy chicken Curry"
        />
      </div>

      <div className="pb-2 px-3">
        <label htmlFor="branch" className="">
          Select Permissions
        </label>
        <Select
          isMulti
          className="w-[100%] my-2"
          styles={{
            "&.css-13cymwt-control": {
              minHeight: "46px",
            },
          }}
          placeholder="Please select a branch"
          isClearable={true}
          value={selectedRoles}
          options={Roles}
          onChange={handleChangeRole}
          getOptionLabel={(e) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              {/* {e.icon} */}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
          filterOption={filterOptionRoles}
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
    </DynamicModal>
  );
}

export default RolePermissionAdd;
