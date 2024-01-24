import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PrintIcon from "@mui/icons-material/Print";
import ActionIcon from "../components/Common/ActionIcon";

function Orders() {
  const [currentOrder, setCurrentOrder] = useState("Online");

  const [dateInputTypeFrom, setDateInputTypeFrom] = useState("text");
  const [dateInputTypeTo, setDateInputTypeTo] = useState("text");

  const [search, setSearch] = React.useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const showCount = 10;

  const TableList = [];

  for (let i = 0; i < 100; i++) {
    const dataItem = {
      id: i + 1,
      orderNumber: `#${Math.floor(Math.random() * 100)}`,
      time: `${Math.floor(Math.random() * 12) + 1}.${Math.floor(
        Math.random() * 60
      )}${Math.random() < 0.5 ? "AM" : "PM"}`,
      date: `Jan ${Math.floor(Math.random() * 31) + 1}, 2024`,
      description: "Test",
      amount: (Math.random() * 100).toFixed(2),
      location: "Madurai",
      status: "Processing",
    };
    TableList.push(dataItem);
  }

  const totalPages = Math.ceil(TableList.length / showCount);

  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;

  // Filter the table data based on the search text
  const filteredTableData = TableList.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(search.toLowerCase())
    )
  );

  const currentTableData = filteredTableData.slice(startIndex, endIndex);

  const handleFocusFrom = () => {
    setDateInputTypeFrom("date");
  };

  const handleBlurFrom = () => {
    setDateInputTypeFrom("text");
  };

  const handleFocusTo = () => {
    setDateInputTypeTo("date");
  };

  const handleBlurTo = () => {
    setDateInputTypeTo("text");
  };

  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="mx-8 my-3">
      <div className="py-2 bg-Light px-3">
        <h4 className="text-Primary font-bold text-lg uppercase pb-3">
          Orders History
        </h4>
        <div className="flex justify-between mx-auto flex-wrap">
          <div className="w-[29%]">
            <div className="relative h-auto w-[100%] border border-1 border-Secondary">
              <input
                type="text"
                className="h-full w-[100%] focus:outline-none pr-3 pl-12 py-2"
                onChange={handleSearch}
              />
              <SearchIcon
                className="absolute left-[1px] top-[1px] bg-Pink text-Light p-2 cursor-pointer"
                sx={{ fontSize: "39px" }}
              />
            </div>
          </div>

          <div className="w-[50%] flex justify-between flex-wrap">
            <button
              className="btn bg-Pink border-0 rounded text-Light hover:bg-Pink h-[40px] min-h-max w-44 uppercase"
              onClick={() => {
                if (currentOrder === "Online") {
                  setCurrentOrder("POS");
                  navigate("/orders/online");
                } else {
                  setCurrentOrder("Online");
                  navigate("/orders/pos");
                }
              }}
            >
              {currentOrder === "Online" && "Online Orders"}

              {currentOrder === "POS" && "POS Orders"}
            </button>
            <div className="w-[20%]">
              <input
                placeholder="Start Date"
                className="textbox- w-[100%] border border-1 border-Secondary h-[90%] px-2 focus:outline-none"
                type={dateInputTypeFrom}
                onFocus={handleFocusFrom}
                onBlur={handleBlurFrom}
                id="date1"
              />
            </div>
            <div className="w-[20%]">
              <input
                placeholder="End Date"
                className="textbox-n w-[100%] border border-1 border-Secondary h-[90%] px-2 focus:outline-none"
                type={dateInputTypeTo}
                onFocus={handleFocusTo}
                onBlur={handleBlurTo}
                id="date2"
              />
            </div>
            <button className="btn bg-Primary border-0 rounded text-Light min-h-max h-[40px] w-44 uppercase hover:bg-Primary">
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-hidden bg-Light p-3  my-3 h-[630px] rounded">
        <table className="table ordersTable table-xs table-pin-rows">
          <thead className="z-10">
            <tr>
              <th>S.No</th>
              <th>Token</th>
              <th>Time</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Total Bill</th>
              <th>Branch</th>
              <th className="text-center">Status</th>
              <th className="text-center">Print</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="overflow-hidden z-0">
            {currentTableData?.map((e, index) => (
              <tr key={e?.id}>
                <td>{e?.id}</td>
                <td>{e?.orderNumber}</td>
                <td>{e?.time}</td>
                <td>{e?.date}</td>
                <td>Test</td>
                <td>{e?.amount}</td>
                <td>Madurai</td>
                <td className="text-center">
                  <button className="bg-green-500 text-white p-3 py-2 rounded text-xs">
                    Processing
                  </button>
                </td>

                <td className="text-center ">
                  <PrintIcon
                    className="bg-DarkBlue text-Light p-1 rounded cursor-pointer"
                    sx={{ fontSize: "30px" }}
                  />
                </td>
                <td className="text-center">
                  <ActionIcon />
                </td>
              </tr>
            ))}

            {/* <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr> */}
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

export default Orders;
