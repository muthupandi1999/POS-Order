import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ActionIcon from "../../../components/Common/ActionIcon";
import { useNavigate } from "react-router-dom";
import VariationModal from "../../../components/modals/modalComponents/VariationModal";
import { FoodItemList } from "../../../utills/data";
function AllItems() {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const [selectedData, setSelectedData] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const [search, setSearch] = React.useState("");

  const showCount = 5;

  // const TableList = [];

  const handleVariation = (e) => {
    setSelectedData(e);
    setOpenModal(true);
  };

  console.log("selectedData", selectedData);

  // for (let i = 0; i < 10; i++) {
  //   const hasVariation = Math.random() < 0.5; // 50% chance of having variations
  //   const variations = hasVariation ? generateVariations() : null;

  //   const dataItem = {
  //     id: i + 1,
  //     image:
  //       "https://khadyo.softtechdemo.com/api/public//images/food_item/1705318098-piz6png.png",
  //     name: `Food Item ${i + 1}`,
  //     group: "Pizza",
  //     price: (Math.random() * 100).toFixed(2),
  //     location: "Madurai",
  //     variations: variations,
  //   };

  //   TableList.push(dataItem);
  // }

  // // Helper function to generate variations
  // function generateVariations() {
  //   const numVariations = Math.floor(Math.random() * 5) + 1; // Random number of variations (1 to 5)
  //   const variations = [];

  //   for (let j = 0; j < numVariations; j++) {
  //     const variation = {
  //       id: j + 1,
  //       name: `Variation ${j + 1}`,
  //       price: (Math.random() * 10).toFixed(2),
  //     };

  //     variations.push(variation);
  //   }

  //   return variations;
  // }



  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;

  const filteredTableData = FoodItemList.filter((item) =>
  Object.values(item).some(
    (value) =>
      typeof value === "string" &&
      value.toLowerCase().includes(search.toLowerCase())
  )
);
  const currentTableData = filteredTableData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredTableData.length / showCount);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };


  return (
    <div className="bg-Light py-3 px-5 my-2 w-full">
      <div className="w-[90%]">
        <div className="flex justify-between items-center mx-auto flex-wrap">
          <h4 className="text-Primary text-xl capitalize font-bold w-[50%]">
            Food Items list
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
              onClick={() => {
                navigate("/manage/food/add-new-item");
              }}
            >
              add new
            </button>
          </div>
        </div>
        <div className="overflow-x-auto  bg-Light  my-3 h-[630px] rounded">
          <table className="table AllItemsTable table-xs table-pin-rows">
            <thead className="z-10 bg-Primary">
              <tr>
                <th className="bg-Primar">S.No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Group</th>
                <th className="text-center">Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="overflow-hidden z-0">
              {currentTableData.map((e, index) => (
                <tr key={e?.id}>
                  <td>{e?.id}</td>
                  <td>
                    <img className="m-auto" width={"20%"} src={e?.image} alt="" />
                  </td>
                  <td>{e?.name}</td>
                  <td>{e?.group}</td>

                  <td className="text-center">
                    {e?.variations !== null ? (
                      <button
                        className="bg-Pink px-4 py-2 text-Light rounded text-xs"
                        onClick={() => handleVariation(e)}
                      >
                        Check Variations
                      </button>
                    ) : (
                      <span>{e?.price}</span>
                    )}
                  </td>

                  <td className="text-center">
                    <ActionIcon openModal={openModal} setOpenModal={setOpenModal} />
                  </td>
                </tr>
              ))}

              <VariationModal
                data={selectedData}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />

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
            currentTableData.length
          )} of ${currentTableData.length}`}</h4>
        </div>
      </div>
    </div>
  );
}

export default AllItems;
