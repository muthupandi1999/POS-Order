import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PrintIcon from "@mui/icons-material/Print";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ActionIcon from "../components/Common/ActionIcon";
// import fetch from "node-fetch";

function Orders() {
  const [currentOrder, setCurrentOrder] = useState("Online");

  const [orderHistoryData, setOrderHistoryData] = useState([]);

  useEffect(() => {
    fetch(
      "https://khadyo.softtechdemo.com/api/public/settings/get-order-history-all",
      {
        method: "GET",
        headers: {
          // "X-RapidAPI-Key": "your-api-key",
          // "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTFhY2YzNzFiZTZmZGJiODNmNWVmMTU0YmYzYzg3ZmJlZWQyMGU3ZDRiNzc1ZWIxZGU0Y2FiYjIyYWY4MzdmMjIwOWYzNDdjYmIxMTMzNjkiLCJpYXQiOjE3MDY3MTExODUuMzM4NzYyLCJuYmYiOjE3MDY3MTExODUuMzM4NzY2LCJleHAiOjE3MzgzMzM1ODUuMzMxMjE4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ZiG9AWVwyd35_URst11op1OKLb_i4IPTFdtmO1OpPIR_f1ekhWpKajFD6AdfddP-cdJfrBCgr0YncAwXPD_lUxiUcEWj__-YNFA_DCZ9pcW96XVyohqo7WDi7OZGkfxCQhfqjGiAEP8BQLoLN8-3QkvtqfJ6PPsZPOO6B7fGdEbMACVK1mO8d0sYYxFXQ_8j821sSfXjjDJEuZagSf1Lc1affqULoyjo0tgMzN8wFSQjaXASrquwvZ9A58s5fNdL57ZmFV6qZkOs7NK2ES1NpECY3X91zApmRIYjPAPRVxoCkzQuNnFAuWc0Cmdvw92K4DV6FDJzO7a1dy6_bnu3xCf6THuvRKkkN2zsQFhxTBq5JVAmepn0oT4XXYUjNK7CWiNCljJzHdNoU_0dVlVxkWPCdUC_B6JavGkbp59W4W7T-1FSsairWh9U8bs7bBsBXNlhfIJDiUcCEeq0xX8ZfPzRDn-p1U59F9WiXyatMmGFdzH0J7HqguVDSaKDY-GHvkIqhb6lb_nXcCEoqb3eEv6dt9qAU5W8m_SEYeuou5aAvW9848CSnyN6v0YSYq5yXhKhrVdLS4E-5skcwqBLK_qZVtM6QNTdqeWaiWUfJnaHKeMtwdMTWVWHP0b-AgDxoZGjbGy5mF-9IFvQ5pwg-0qQO75AUIJeD8m9aQoYnl0",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        let orderData = data?.data?.reverse();
        setOrderHistoryData(orderData);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("orderHist", orderHistoryData);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const [search, setSearch] = React.useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const showCount = 100;

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

  const totalPages = Math.ceil(orderHistoryData.length / showCount);

  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;

  console.log(new Date(fromDate).toISOString());
  console.log(toDate);

  // Filter the table data based on the search text
  const filteredTableData = orderHistoryData.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(search.toLowerCase())
    )
  );

  // const filteredTableData = orderHistoryData.filter((row) => {
  //   let filterPass = true;
  //   const date = new Date(row.created_at);
  //   console.log("dataaaaaaaa", date);
  //   if (fromDate) {
  //     filterPass = filterPass && new Date(fromDate) < date;
  //   }
  //   if (toDate) {
  //     filterPass = filterPass && new Date(toDate) > date;
  //   }
  //   //if filterPass comes back `false` the row is filtered out
  //   return filterPass;
  // });

  const currentTableData = filteredTableData.slice(startIndex, endIndex);

  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  const renderPagination = () => {
    const visiblePages = 5; // Adjust the number of visible page numbers

    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (currentPage <= Math.floor(visiblePages / 2) + 1) {
      endPage = visiblePages;
    } else if (currentPage >= totalPages - Math.floor(visiblePages / 2)) {
      startPage = totalPages - visiblePages + 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <a
          key={i}
          className={`border border-1 border-Secondary px-3 py-1 ${
            currentPage === i ? "bg-Pink text-Light" : ""
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </a>
      );
    }

    if (startPage > 1) {
      pages.unshift(<span key="ellipsis-start">...</span>);
      pages.unshift(
        <a
          key={1}
          className="border border-1 border-Secondary px-3 py-1"
          onClick={() => setCurrentPage(1)}
        >
          1
        </a>
      );
    }

    if (endPage < totalPages) {
      pages.push(<span key="ellipsis-end">...</span>);
      pages.push(
        <a
          key={totalPages}
          className="border border-1 border-Secondary px-3 py-1"
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </a>
      );
    }

    return pages;
  };

  return (
    <div className="mx-8 my-3 my-element">
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
              className="btn transparent-pink-btn border-0 h-[40px] min-h-max w-44 uppercase"
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
              <DatePicker
                // showIcon
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                placeholderText={"Start Date.."}
                className="py-2 px-4  border border-Secondary rounded focus:outline-none"
              />
            </div>
            <div className="w-[20%]">
              <DatePicker
                // showIcon
                selected={toDate}
                onChange={(date) => setToDate(date)}
                placeholderText={"To Date.."}
                className="py-2 px-4 border border-Secondary rounded focus:outline-none"
              />
            </div>
            <button className="btn bg-Primary border-0 rounded text-Light min-h-max h-[40px] w-44 uppercase hover:bg-Primary">
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-Light my-3 p-3 rounded h-[630px]">
        <div className="overflow-y-scroll h-full p-0 m-0">
          <table className="table ordersTable table-xs table-pin-rows">
            <thead className="">
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
                  <td>#{e?.token?.id}</td>
                  <td>{new Date(e?.created_at).toLocaleTimeString()}</td>
                  <td>{new Date(e?.created_at).toLocaleDateString()}</td>
                  <td>{e?.customer_name}</td>
                  <td>{e?.total_payable}</td>
                  <td>{e?.branch_name}</td>
                  <td className="text-center text-DarkGreen text-xs font-semibold ">Processing</td>

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

          {renderPagination(showCount)}

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
          filteredTableData.length
        )} of ${filteredTableData.length}`}</h4>
      </div>
    </div>
  );
}

export default Orders;
