import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ActionIcon from "../../../components/Common/ActionIcon";
import TipAdd from "../../../components/modals/modalComponents/Restaurant/TipAdd";
import { TipsList } from "../../../utills/data";
function Tips() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");

  const showCount = 5;

  const TableList = [];

  for (let i = 0; i < 20; i++) {
    const dataItem = {
      id: i + 1,
      tipPercentage: 10,
    };

    TableList.push(dataItem);
  }

  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;
  const filteredTableData = TipsList?.filter((item) =>
    item.tip_amount.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filteredTableData.length / showCount);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };
  const currentTableData = filteredTableData.slice(startIndex, endIndex);
  return (
    <div className="bg-Light py-3 px-5 my-2 w-full">
      <div className="w-[90%]">
        <div className="flex justify-between items-center mx-auto flex-wrap">
          <h4 className="text-Primary text-xl capitalize font-bold w-[50%]">
            Tip List
          </h4>
          <div className="w-[50%] flex justify-between items-center">
            <div className="relative h-auto w-[50%] border border-1 border-Secondary">
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
            <button
              className="btn bg-Pink border-0 rounded text-Light hover:bg-Pink h-[40px] min-h-max w-44 uppercase"
              onClick={() => setOpenModal(true)}
            >
              add new
            </button>
            <TipAdd
              heading="Add New Tip"
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
                <th className="">Tip Percentage</th>

                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="overflow-hidden z-0">
              {currentTableData.map((e, index) => (
                <tr key={e?.id}>
                  <td>{e?.id}</td>

                  <td>{e?.tip_amount}</td>

                  <td className="text-center">
                    <ActionIcon
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                    />
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
            filteredTableData.length
          )} of ${filteredTableData.length}`}</h4>
        </div>
      </div>
    </div>
  );
}

export default Tips;
