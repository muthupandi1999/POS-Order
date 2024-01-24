import React, { useState } from "react";
import DynamicModal from "../DynamicModal";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "react-hot-toast";
import Select from "react-select";
function UserAdd({ openModal, setOpenModal, heading }) {
  const [userType, setUserType] = useState(null);
  const [selectPermissionGroup, setSelectPermissionGroup] = useState(null);
  const handleInputClose = () => {
    console.log("cloase");
    setOpenModal(false);
  };

  const handleChangeUserType = (e) => {
    setUserType(e);
  };

  const handleChangePermissionGroup = (e) => {
    setSelectPermissionGroup(e);
  };
  const userTypes = [
    {
      value: 1,
      text: "ADMIN",
    },
    {
      value: 2,
      text: "STAFF",
    },
  ];

  const PermissionGroups = [
    {
      value: 1,
      text: "Admin",
    },
    {
      value: 2,
      text: "POS Manager",
    },
    {
      value: 3,
      text: "Delivery Man",
    },
    {
      value: 4,
      text: "Kitchen",
    },
    {
      value: 5,
      text: "Camarero",
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
          <label htmlFor="branch" className="">
            User Type
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
            value={userType}
            options={userTypes}
            onChange={handleChangeUserType}
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
            // filterOption={filterOptionIngredients}
          />
        </div>

        <div className="pb-2 px-3">
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
          <label htmlFor="Password" className="">
            Password
          </label>
          <br />
          <input
            type="password"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g Password"
          />
        </div>
        <div className="pb-2 px-3">
          <label htmlFor="Confirm Password" className="">
            Confirm Password
          </label>
          <br />
          <input
            type="password"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g Confirm Password"
          />
        </div>

        <div className="pb-2 px-3">
          <label htmlFor="branch" className="">
            Select Permission Group
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
            value={selectPermissionGroup}
            options={PermissionGroups}
            onChange={handleChangePermissionGroup}
            getOptionLabel={(e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                }}
              >
                {/* {e.icon} */}
                <span style={{ marginLeft: 5, fontSize: "13px" }}>
                  {e.text}
                </span>
              </div>
            )}
            // filterOption={filterOptionIngredients}
          />
        </div>


        <div className="pb-2 px-3">
          <label htmlFor="name" className="">
            Image <span className="text-xs text-DarkBlue">(300*300 Preferrable)</span>
          </label>
          <br />
          <input
            type="file"
            className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="No file chosen"
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

export default UserAdd;
