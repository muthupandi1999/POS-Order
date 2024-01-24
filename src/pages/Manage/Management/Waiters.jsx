import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ActionIcon from "../../../components/Common/ActionIcon";
import WaiterAdd from "../../../components/modals/modalComponents/WaiterAdd";

function Waiters() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);



  const showCount = 5;

  const TableList = [];

  for (let i = 0; i < 20; i++) {
    const dataItem = {
      id: i + 1,
      image: "",
      name: "Jhon",
      phoneNo: 8752365244,
      branch: "Uttara",
    };

    TableList.push(dataItem);
  }

  const totalPages = Math.ceil(TableList.length / showCount);



  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;
  const currentTableData = TableList.slice(startIndex, endIndex);
  return (
    <div className="bg-Light py-3 px-5 my-2 w-full">
      <div className="w-[90%]">
        <div className="flex justify-between items-center mx-auto flex-wrap">
          <h4 className="text-Primary text-xl capitalize font-bold w-[50%]">
            Waiter List
          </h4>
          <div className="w-[50%] flex justify-between items-center">
            <div className="relative h-auto w-[50%] border border-1 border-Secondary">
              <input
                type="text"
                className="h-full w-[100%] focus:outline-none pr-3 pl-12 py-2"
              />
              <SearchIcon
                className="absolute left-[1px] top-[1px] bg-Pink text-Light p-2 cursor-pointer"
                sx={{ fontSize: "39px" }}
              />
            </div>
            <button
              className="btn bg-Pink border-0 rounded text-Light hover:bg-Pink h-[40px] min-h-max w-44 uppercase"
              onClick={() => setWaiterModal(true)}
            >
              add new
            </button>
            <WaiterAdd
              heading="Add New Waiter"
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </div>
        </div>
        <div className="overflow-x-auto  bg-Light  my-3 h-[630px] rounded">
          <table className="table AllItemsTable table-xs table-pin-rows">
            <thead className="z-10 bg-Primary">
              <tr>
                <th className="">S.No</th>
                <th className="">Image</th>
                <th className="">Name</th>
                <th className="">Phone No</th>
                <th className="">Branch</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="overflow-hidden z-0">
              {currentTableData.map((e, index) => (
                <tr key={e?.id}>
                  <td>{e?.id}</td>
                  <td>{e?.image}</td>
                  <td>{e?.name}</td>

                  <td>{e?.phoneNo}</td>

                  <td>{e?.branch}</td>

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
    </div>
  );
}

export default Waiters;
