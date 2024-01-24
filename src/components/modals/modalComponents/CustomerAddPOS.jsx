import React, { useState } from "react";
import DynamicModal from "../DynamicModal";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "react-hot-toast";
import Select from "react-select";

function CustomerAddPOS({ openModal, setOpenModal, heading }) {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const handleInputClose = () => {
    console.log("cloase");
    setOpenModal(false);
  };

  const handleChangeBranch = (e) => {
    setSelectedBranch(e);
  };

  const handleChangePermissionGroup = (e) => {
    setSelectPermissionGroup(e);
  };

  const handleChangeType = (e) => {
    setSelectedType(e);
  };

  const filterOptionBranch = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const filterOptionType = (option, inputValue) => {
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

  const types = [
    {
      value: 1,
      text: "Normal",
    },
    {
      value: 2,
      text: "Debtor",
    },
  ];

  const handleSave = () => {
    handleInputClose();
    Toast.success("Added Successfully");
  };
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
            placeholder="e.g Mr.Jhon"
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
            placeholder="Select a unit"
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

        <div className="pb-2 px-3 ">
          <label htmlFor="branch" className="">
            Type
          </label>
          <Select
            className="w-[100%] my-2"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
              },
            }}
            placeholder="Please select a type"
            isClearable={true}
            value={selectedType}
            options={types}
            onChange={handleChangeType}
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
            filterOption={filterOptionType}
          />
        </div>
        <div className="pb-2 px-3">
          <label htmlFor="email" className="">
            Email
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g staff@example.com"
          />
        </div>
        <div className="pb-2 px-3">
          <label htmlFor="food group" className="">
            Phone No
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g 01xxxxxxxxxx"
          />
        </div>

        <div className="pb-2 px-3">
          <label htmlFor="food group" className="">
            Address
          </label>
          <br />
          <textarea
            className="w-full py-3 px-2 my-2 rounded border border-1 border-Secondary resize-none focus:outline-none placeholder:text-sm"
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="e.g Enter address"
          ></textarea>
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

export default CustomerAddPOS;
