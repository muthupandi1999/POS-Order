import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Modal from "@mui/material/Modal";
import Select from "react-select";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DynamicModal from "../DynamicModal";
import { NumericKeypad } from "../../Common/NumericPad";

function BillPay({ billPayModal, setBillPayModal, billData }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const [inputValue, setInputValue] = useState("100");

  const navigate = useNavigate();
  const handleInputClose = () => {
    setBillPayModal(false);
  };

  const handleChangePayment = (e) => {
    setSelectedPaymentMethod(e);
  };

  const handleNumberClick = (number) => {
    setInputValue((prev) => prev + number);
  };

  const handleDotClick = () => {
    setInputValue((prev) => prev + ".");
  };

  const handleDeleteClick = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const paymentList = [
    {
      value: 1,
      text: "Cash",
    },
    {
      value: 2,
      text: "Card",
    },
    {
      value: 3,
      text: "ScanQR",
    },
    {
      value: 4,
      text: "NetBanking",
    },
  ];

  const listAmount = [
    {
      value: 1,
      text: "$5",
      number: "5",
    },
    {
      value: 2,
      text: "$10",
      number: "10",
    },
    {
      value: 3,
      text: "$20",
      number: "20",
    },
    {
      value: 4,
      text: "$50",
      number: "50",
    },
    {
      value: 5,
      text: "$100",
      number: "100",
    },
    {
      value: 6,
      text: "$200",
      number: "200",
    },
    {
      value: 7,
      text: "$500",
      number: "500",
    },
    {
      value: 8,
      text: "$1000",
      number: "1000",
    },
  ];

  //   const filterOptionTables = (option, inputValue) => {
  //     return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  //   };
  return (
    <DynamicModal open={billPayModal} onClose={handleInputClose} maxWidth={800}>
      <div className="p-2">
        <div className="py-3 flex justify-between items-center">
          <h4 className="text-xl capitalize font-semibold text-Primary">
            Payment
          </h4>
          <CloseIcon onClick={handleInputClose} className="cursor-pointer" />
        </div>

        <div className="flex justify-between w-[100%] gap-4 pt-4">
          <div className="w-[48%]">
            <h5 className="pb-2 font-semibold">Customer Info</h5>
            <div className="flex justify-between  items-center pb-2">
              <div className="flex items-center gap-3">
                <h4 className="bg-Primary text-Light flex justify-center items-center px-2 w-10 h-10 rounded-md">
                  {billData?.tableNumber === null
                    ? "TA"
                    : billData?.tableNumber}
                </h4>
                <div>
                  <h4 className="font-semibold pb-1">
                    {billData?.customerName}
                  </h4>
                  <p className="text-sm">{`Order ${billData?.orderId} / ${billData?.orderType}`}</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs">
                  {new Date(billData?.created_at)?.toDateString()}
                </h4>
                <h4 className="text-xs">
                  {new Date(billData?.created_at)?.toLocaleTimeString()}
                </h4>
              </div>
            </div>

            <div className="bg-LightBlue p-6 rounded-xl mt-4">
              <h3 className="font-semibold text-md">Transaction Details</h3>

              <div className="h-[40.5vh] footItemsList overflow-y-scroll pt-4">
                {billData?.orderedItems?.map((e) => (
                  <ul key={e?.id} className="flex justify-between pb-2">
                    <li>
                      <h4 className="font-semibold text-sm">
                        {e?.name}
                      </h4>
                      <h4 className="font-bold text-sm">${e?.price}</h4>
                    </li>
                    <li className="font-medium">{e?.quantity}x</li>
                  </ul>
                ))}

              </div>
              <div>
                <div className="flex justify-between pb-2">
                  <h4>Items({billData?.orderedItems?.length})</h4>
                  <h4 className="font-semibold">${billData?.TotalPayableAmount}</h4>
                </div>
                <div className="flex justify-between pb-2">
                  <h4>Tax(5%)</h4>
                  <h4 className="font-semibold">${((billData?.TotalPayableAmount * 5)/100).toFixed(2)}</h4>
                </div>
                <div className="flex justify-between">
                  <h4 className="font-bold">Total</h4>
                  <h4 className="font-bold">${((billData?.TotalPayableAmount)+((billData?.TotalPayableAmount * 5)/100)).toFixed(2)}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[48%]">
            <h5 className="pb-2 font-semibold">Select a payment method</h5>
            <div>
              <Select
                className="w-[100%] my-2 border border-LightShadow"
                styles={{
                  "&.css-13cymwt-control": {
                    minHeight: "46px",
                    border: "none",
                    fontWeight: 600,
                  },
                }}
                placeholder="Select a payment method"
                isClearable={true}
                value={selectedPaymentMethod}
                options={paymentList}
                onChange={handleChangePayment}
                getOptionLabel={(e) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ marginLeft: 5, fontSize: "13px" }}>
                      {e.text}
                    </span>
                  </div>
                )}
                // filterOption={filterOptionTables}
              />
            </div>

            <div className="h-[55vh]">
              <div className="pt-[80px]">
                <input
                  type="text"
                  className="text-center w-full focus:outline-none text-2xl"
                  value={inputValue}
                  readOnly
                />
              </div>
              <div className="flex gap-4 overflow-x-scroll footItemsList px-6 mt-4">
                {listAmount?.map((e) => (
                  <h4
                    key={e?.id}
                    className="bg-LightBlue cursor-pointer text-Pink w-[100px] h-10 flex justify-center items-center px-2"
                    onClick={() =>
                      setInputValue(
                        JSON.stringify(
                          parseFloat(inputValue) + parseFloat(e?.number)
                        )
                      )
                    }
                  >
                    {e?.text}
                  </h4>
                ))}
              </div>
              <div>
                <NumericKeypad
                  onNumberClick={handleNumberClick}
                  onDotClick={handleDotClick}
                  onDeleteClick={handleDeleteClick}
                />
              </div>
            </div>

            <button className="bg-Pink w-full py-2 rounded-md text-Light">
              PayNow
            </button>
          </div>
        </div>
      </div>
    </DynamicModal>
  );
}

export default BillPay;
