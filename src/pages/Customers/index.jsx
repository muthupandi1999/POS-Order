import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import ActionIcon from "../../components/Common/ActionIcon";
import CustomerAddPOS from "../../components/modals/modalComponents/CustomerAddPOS";

function Customer() {
  const [currentOrder, setCurrentOrder] = useState("Online");

  const [openModal, setOpenModal] = useState(false);

  const [dateInputType, setDateInputType] = useState("text");

  const [currentPage, setCurrentPage] = useState(1);

  const showCount = 10;

  const TableList = [];

  for (let i = 0; i < 100; i++) {
    const dataItem = {
      id: i + 1,
      name: "test",
      email: "test@gmail.com",
      type: "-",
      phoneNo: 857458858,
      address: "Dhaka, Uttara",
      branch: "Uttara",
    };
    console.log("i", dataItem.id);
    TableList.push(dataItem);
  }

  const totalPages = Math.ceil(TableList.length / showCount);

  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;
  const currentTableData = TableList.slice(startIndex, endIndex);
  console.log(currentTableData);

  const navigate = useNavigate();

  return (
    <div className="mx-8 my-3">
      <div className="py-2 bg-Light px-3">
        <h4 className="text-Primary font-bold text-lg uppercase pb-3">
          Customers
        </h4>
        <div className="flex justify-between mx-auto flex-wrap">
          <div className="w-[29%]">
            <div className="relative h-auto w-[100%] border border-1 border-Secondary">
              <input
                type="text"
                className="h-full w-[100%] focus:outline-none pr-3 pl-12 py-2"
              />
              <SearchIcon
                className="absolute left-[1px] top-[1px] bg-Pink text-Light p-2 cursor-pointer"
                sx={{ fontSize: "39px" }}
              />
            </div>
          </div>

          <div className="w-[50%] flex justify-between flex-wrap">
            <button
              className="btn bg-Primary border-0 rounded text-Light hover:bg-Primary h-[40px] min-h-max w-44 uppercase"
              onClick={() => {
                if (currentOrder === "Online") {
                  setCurrentOrder("POS");
                  navigate("/dashboard/customers/online");
                } else {
                  setCurrentOrder("Online");
                  navigate("/dashboard/customers/pos");
                }
              }}
            >
              {currentOrder === "Online" && "Online Orders"}

              {currentOrder === "POS" && "POS Orders"}
            </button>
            {currentOrder === "POS" && (
              <button
                className="btn bg-Pink border-0 rounded text-Light hover:bg-Pink h-[40px] min-h-max w-44 uppercase"
                onClick={() => setOpenModal(true)}
              >
                add new
              </button>
            )}

            <CustomerAddPOS
              heading="Add New Customer"
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-hidden bg-Light p-3  my-3 h-[630px] rounded">
        <table className="table ordersTable table-xs table-pin-rows">
          <thead className="z-10">
            {currentOrder === "POS" && (
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Phone No</th>
                <th>Address</th>
                <th>Branch</th>
              </tr>
            )}

            {currentOrder === "Online" && (
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>

                <th>Phone No</th>
                <th>Address</th>
              </tr>
            )}
          </thead>
          <tbody className="overflow-hidden z-0">
            {currentOrder === "POS" &&
              currentTableData.map((e, index) => (
                <tr key={e?.id}>
                  <td>{e?.id}</td>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>
                  <td>{e?.type}</td>
                  <td>{e?.phoneNo}</td>
                  <td>{e?.address}</td>
                  <td>{e?.branch}</td>
                </tr>
              ))}

            {currentOrder === "Online" &&
              currentTableData.map((e, index) => (
                <tr key={e?.id}>
                  <td>{e?.id}</td>
                  <td>{e?.name}</td>
                  <td>{e?.email}</td>

                  <td>{e?.phoneNo}</td>
                  <td>{e?.address}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between bg-Light p-3 rounded">
        <div className="pagination flex gap-0.5">
          <a
            className={`border border-1 border-Secondary px-3 py-1 ${
              currentPage === 1 ? "cursor-not-allowed" : ""
            }`}
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            &laquo;
          </a>

          {/* Page Buttons */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <a
              key={index + 1}
              className={`border border-1 border-Secondary px-3 py-1 ${
                currentPage === index + 1 ? "bg-Pink text-Light" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </a>
          ))}

          {/* Next Button */}
          <a
            className={`border border-1 border-Secondary px-3 py-1 ${
              currentPage === totalPages ? "cursor-not-allowed" : ""
            }`}
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
          >
            &raquo;
          </a>
        </div>
        <h4>{`Showing ${startIndex + 1} - ${Math.min(
          endIndex,
          TableList.length
        )} of ${TableList.length}`}</h4>
      </div>
    </div>
  );
}

export default Customer;
