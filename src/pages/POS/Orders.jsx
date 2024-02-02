import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import { useNavigate } from "react-router-dom";
import CreateOrderModal from "../../components/modals/modalComponents/CreateOrderModal";
import BillPay from "../../components/modals/modalComponents/BillPay";
import { POSRecentOrders } from "../../utills/data";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

const emptyArray1 = Array.from({ length: 6 });
const emptyArray2 = Array.from({ length: 12 });

function Orders() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [billPayModal, setBillPayModal] = useState(false);
  const [filterOrder, setFilterOrder] = useState("All");

  const [currentBillDetails, setCurrentBillDetails] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  const handleBillPayment = (e) => {
    setCurrentBillDetails(e);
    setBillPayModal(true);
  };

  const filterData = POSRecentOrders.filter((item) => {
    if (filterOrder === "All") {
      return true; // Return true for all items if filterOrder is "All"
    } else {
      return item.status === filterOrder;
    }
  });

  const filteredTableData = filterData.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchValue.toLowerCase())
    )
  );
  return (
    <div className="bg-[#f0f0ec] p-6 my-element">
      <div className="flex justify-between items-center pb-4">
        <div className="flex gap-3">
          <button
            className={`text-sm rounded-md font-semibold transition-colors duration-500  px-3 py-2 w-[150px] ${
              filterOrder === "All" ? "bg-Pink text-Light" : "bg-Light"
            }`}
            onClick={() => setFilterOrder("All")}
          >
            All
          </button>
          <button
            className={`text-sm rounded-md font-semibold transition-colors duration-500  px-3 py-2 w-[150px] ${
              filterOrder === "In Progress" ? "bg-Pink text-Light" : "bg-Light"
            }`}
            onClick={() => setFilterOrder("In Progress")}
          >
            On Process
          </button>
          <button
            className={` text-sm rounded-md font-semibold transition-colors duration-500  px-3 py-2 w-[150px] ${
              filterOrder === "Completed" ? "bg-Pink text-Light" : "bg-Light"
            }`}
            onClick={() => setFilterOrder("Completed")}
          >
            Completed
          </button>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="relative">
            <input
              type="text"
              className="px-3 py-2.5 text-sm rounded w-[15vw] focus:outline-none"
              placeholder="search a table, name, orderId"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onChange={(e) => setSearchValue(e?.target?.value)}
            />
            <SearchIcon
              className="absolute right-1.5 top-3"
              sx={{ fontSize: "20px" }}
            />
          </div>
          <button
            className="bg-Primary text-Light px-3 py-2 w-[150px] rounded-md"
            onClick={() => setOpenModal(true)}
          >
            {" "}
            Create Order
          </button>
          <CreateOrderModal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      </div>
      <div className="pt-5 orderList h-[75vh] overflow-y-scroll footItemsList">
        {filteredTableData?.map((e, index) => (
          <div
            key={e?.id}
            className="bg-white w-[400px] max-h-[374px] p-4 rounded-lg"
          >
            <div className="flex justify-between items-center pb-4">
              <div className="flex items-center gap-3">
                <h4 className="bg-Primary text-Light flex justify-center items-center px-2 w-10 h-10 rounded-md">
                  {e?.tableNumber === null ? "TA" : e?.tableNumber}
                </h4>
                <div>
                  <h4 className="font-semibold pb-1">{e?.customerName}</h4>
                  <p className="text-xs font-medium">{`Order ${e?.orderId} / ${e?.orderType}`}</p>
                </div>
              </div>
              <div>
                <button
                  className={`text-Primary rounded-lg font-semibold px-4 text-xs py-1 ${
                    e?.status === "In Progress"
                      ? "bg-[#ffeebd]"
                      : e?.status === "Completed"
                      ? "bg-[#e0ebfd]"
                      : e?.status === "Ready"
                      ? "bg-[#c8ffe4]"
                      : ""
                  }  w-fit max-w-[150px] gap-1 flex items-center mb-2`}
                >
                  {e?.status === "In Progress" && (
                    <AlarmOnIcon
                      className="pr-1 text-Primary"
                      sx={{ fontSize: "18px" }}
                    />
                  )}
                  {e?.status === "Completed" && (
                    <AssignmentTurnedInOutlinedIcon
                      className="pr-1 text-Primary"
                      sx={{ fontSize: "18px" }}
                    />
                  )}
                  {e?.status === "Ready" && (
                    <CheckCircleOutlineIcon
                      className="pr-1 text-Primary"
                      sx={{ fontSize: "18px" }}
                    />
                  )}

                  {e?.status}
                </button>
                <p className="flex items-center justify-end gap-1 text-xs">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      e?.status === "In Progress"
                        ? "bg-[#ffd042]"
                        : e?.status === "Completed"
                        ? "bg-[#3f89ff]"
                        : e?.status === "Ready"
                        ? "bg-[#019f2b]"
                        : ""
                    }`}
                  >
                    .
                  </span>{" "}
                  {e?.orderStatus}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-Secondary">
              <h4 className="text-xs">
                {new Date(e?.created_at)?.toDateString()}
              </h4>
              <h4 className="text-xs">
                {new Date(e?.created_at)?.toLocaleTimeString()}
              </h4>
            </div>
            <div className="pt-3">
              <ul className="w-[100%] flex items-center py-2">
                <li className="w-[50%] text-sm">Items</li>
                <li className="w-[25%] text-sm text-center">Qty</li>
                <li className="w-[25%] text-sm text-end">Price</li>
              </ul>
              <div className="h-[100px] overflow-y-scroll footItemsList border-b border-Secondary">
                {e?.orderedItems?.map((e, index) => (
                  <ul className="w-[100%] flex items-center pb-2" key={index}>
                    <li className="w-[50%]  text-xs font-semibold">
                      {e?.name}
                    </li>
                    <li className="w-[25%] text-xs font-semibold text-center">
                      {e?.quantity}
                    </li>
                    <li className="w-[25%] text-xs font-semibold text-end">
                      ${e?.price}
                    </li>
                  </ul>
                ))}
              </div>
              <div className="flex justify-between items-center py-3">
                <h4 className="font-semibold text-md">Total</h4>
                <h4 className="font-semibold text-md">
                  ${e?.TotalPayableAmount}
                </h4>
              </div>
              <div className="flex justify-between items-center pt-3">
                <button className="bg-[#f0f0ec] text-Primary rounded-md font-semibold min-h-max h-[35px] text-sm  px-3  w-[150px]">
                  See Details
                </button>
                <button
                  className="bg-Pink  rounded-md font-semibold text-Light min-h-max h-[35px] text-sm px-3  w-[150px]"
                  onClick={() => handleBillPayment(e)}
                >
                  Pay Bills
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <BillPay
        billData={currentBillDetails}
        billPayModal={billPayModal}
        setBillPayModal={setBillPayModal}
      />
    </div>
  );
}

export default Orders;
