import React, { useState } from "react";
import DynamicModal from "../DynamicModal";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Modal from "@mui/material/Modal";
import Select from "react-select";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,

  bgcolor: "white",
  borderRadius: "4px",
  boxShadow: 24,
  p: 2,
  outline: "none",
};

function CreateOrderModal({ openModal, setOpenModal }) {
  const [orderType, setOrderType] = useState("DineIn");
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectCountPerson, setSelectCountPerson] = useState(1);

  const navigate = useNavigate();
  const handleInputClose = () => {
    setOpenModal(false);
  };

  const handleChangeTables = (e) => {
    setSelectedTable(e);
  };

  const filterOptionTables = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };
  const TablesList = [
    {
      value: 1,
      text: "A1",
    },
    {
      value: 2,
      text: "A2",
    },
    {
      value: 3,
      text: "A3",
    },
    {
      value: 4,
      text: "A4",
    },
    {
      value: 5,
      text: "A5",
    },
    {
      value: 6,
      text: "A6",
    },
    {
      value: 7,
      text: "A7",
    },
  ];

  return (
    <DynamicModal
      open={openModal}
      onClose={handleInputClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      width={400}
    >
      <div>
        <div className="py-3 flex justify-between items-center">
          <h4 className="text-md capitalize font-semibold text-Primary">
            Create New Order
          </h4>
          <CloseIcon onClick={handleInputClose} className="cursor-pointer" />
        </div>
        <div className="bg-LightBlue p-1.5 rounded-lg mt-2">
          <button
            className={`w-[50%] text-sm rounded-lg py-2 transition-colors duration-300 ${
              orderType === "DineIn" ? "bg-Pink text-Light" : ""
            }`}
            onClick={() => setOrderType("DineIn")}
          >
            Dine In
          </button>
          <button
            className={`w-[50%]  text-sm rounded-lg py-2 transition-colors duration-300  ${
              orderType === "Takeaway" ? "bg-Pink text-Light" : ""
            }`}
            onClick={() => setOrderType("Takeaway")}
          >
            Takeaway
          </button>
        </div>
        <div className="py-3">
          <label htmlFor="food group" className="font-medium">
            Name
          </label>
          <br />
          <input
            type="text"
            className="w-full py-2 text-sm  px-3 mt-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-sm"
            placeholder="e.g Customer name.."
          />
        </div>
        <div className="pb-3">
          <label htmlFor="food group" className="font-medium">
            Guest
          </label>
          <br />
          <div className="flex items-center justify-between gap-3 border mt-2 border-1 px-2 rounded border-Secondary  p-1.5">
            <button
              disabled={selectCountPerson <= 1}
              onClick={() => setSelectCountPerson(selectCountPerson - 1)}
            >
              <RemoveIcon
                className="bg-LightShadow rounded-full p-1 cursor-pointer"
                sx={{ fontSize: "25px" }}
              />
            </button>

            <h4>{selectCountPerson} Persons</h4>
            <button onClick={() => setSelectCountPerson(selectCountPerson + 1)}>
              <AddIcon
                className="bg-Pink text-Light rounded-full p-1 cursor-pointer"
                sx={{ fontSize: "25px" }}
              />
            </button>
          </div>
        </div>

        <div className="pb-2">
          <label htmlFor="branch" className="font-medium">
            Select a table
          </label>
          <Select
            className="w-[100%] my-2 border border-LightShadow"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
                border: "none",
                "&.:hover":{
                  border:"none",
                  borderColor:"transparent"
                }
              },
              "&:hover":{
                border:"none"
              }
            }}
            placeholder="Select a table"
            isClearable={true}
            value={selectedTable}
            options={TablesList}
            onChange={handleChangeTables}
            getOptionLabel={(e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              >
                <span style={{ marginLeft: 5, fontSize: "13px" }}>
                  {e.text}
                </span>
              </div>
            )}
            filterOption={filterOptionTables}
          />
        </div>
        <button
          className="w-full bg-Primary text-Light text-sm text-center py-3 rounded mt-4"
          onClick={() => navigate("/test")}
        >
          Create Order
        </button>
      </div>
    </DynamicModal>
  );
}

export default CreateOrderModal;
