import React, { useState } from "react";
import Select from "react-select";
import PurchaseHistory from "../../../components/modals/modalComponents/PurchaseHistory";
const Suppliers = [
  {
    value: 1,
    text: "Jhon",
  },
  {
    value: 2,
    text: "Kennady",
  },
  {
    value: 3,
    text: "Mike",
  },
  {
    value: 4,
    text: "Hesson",
  },
];

const Options = [
  {
    value: 1,
    text: "Select One",
  },
  {
    value: 2,
    text: "Ingredient",
  },
];
function SupplierHistory() {
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  // handle onChange event of the dropdown
  const [dateInputTypeFrom, setDateInputTypeFrom] = useState("text");
  const [dateInputTypeTo, setDateInputTypeTo] = useState("text");
  const [currentPage, setCurrentPage] = useState(1);

  const [openModal, setOpenModal] = useState(false);
  const showCount = 5;

  const TableList = [];

  for (let i = 0; i < 20; i++) {
    const dataItem = {
      id: i + 1,
      supplier: "Jhon",
      invoice: "Purchase Tomato, bun, onion, lettuce",
      purchased: "November 1, 2023",
      total: "RS4000.00",
      due: "RS0.00",
    };

    TableList.push(dataItem);
  }

  const totalPages = Math.ceil(TableList.length / showCount);

  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;
  const currentTableData = TableList.slice(startIndex, endIndex);
  const handleChangeSupplier = (e) => {
    setSelectedSupplier(e);
  };

  const handleChangeOption = (e) => {
    setSelectedOption(e);
  };

  const filterOptionForSupplier = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

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

  return (
    <div className="bg-Light py-3 px-5 my-2 h-[100%]">
      <h4 className="text-Primary text-xl capitalize font-bold">
        Supplier History
      </h4>
      <div className="mb-2 mt-4 bg-Light flex items-center justify-between border border-1 border-Secondaryp py-5 px-5">
        <div className="w-[20%]">
          <input
            type={dateInputTypeFrom}
            onFocus={handleFocusFrom}
            onBlur={handleBlurFrom}
            className="w-full py-1.5 px-2 my-2 rounded border border-1 border-Secondary focus:outline-none"
            placeholder="From date"
          />
        </div>
        <div className="w-[20%]">
          <input
            type={dateInputTypeTo}
            onFocus={handleFocusTo}
            onBlur={handleBlurTo}
            className="w-full py-1.5 px-2 my-2 rounded border border-1 border-Secondary focus:outline-none"
            placeholder="To Date"
          />
        </div>
        <div className="">
          <Select
            className="w-[100%] customZIndex"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
              },
            }}
            placeholder="Please select a supplier name"
            isClearable={true}
            value={selectedSupplier}
            options={Suppliers}
            onChange={handleChangeSupplier}
            getOptionLabel={(e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                }}
              >
                {/* {e.icon} */}
                <span style={{ marginLeft: 5 }}>{e.text}</span>
              </div>
            )}
            filterOption={filterOptionForSupplier}
          />
        </div>
        <div className="">
          <Select
            className="w-[100%] my-2 customZIndex"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
              },
            }}
            placeholder="Please select a option"
            isClearable={true}
            value={selectedOption ? selectedOption : "Select One"}
            options={Options}
            onChange={handleChangeOption}
            getOptionLabel={(e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                }}
              >
                {/* {e.icon} */}
                <span style={{ marginLeft: 5 }}>{e.text}</span>
              </div>
            )}
          />
        </div>

        <button className="  bg-Primary text-Light h-[36px] rounded w-40 hover:bg-Primary">
          Filter
        </button>
      </div>

      <div className="overflow-x-auto  bg-Light  my-3 h-[630px] rounded">
        <table className="table AllItemsTable table-xs table-pin-rows">
          <thead className="z-10 bg-Primary">
            <tr>
              <th className="bg-Primar">S.No</th>

              <th>Supplier</th>
              <th>Invoice</th>
              <th>Purchased</th>
              <th>Total</th>
              <th>Due</th>

              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="overflow-hidden z-0">
            {currentTableData?.map(
              (e, index) => (
                console.log("currentTableData", currentTableData),
                (
                  <tr key={e?.id}>
                    <td>{e?.id}</td>

                    <td>{e?.supplier}</td>
                    <td>{e?.invoice}</td>
                    <td>{e?.purchased}</td>
                    <td>{e?.total}</td>
                    <td>{e?.due}</td>

                    <td className="text-center">
                      <button
                        className="primary-button text-xs px-2 py-1"
                        onClick={() => {
                          setGroupOpen(true);
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                )
              )
            )}

            <PurchaseHistory
              heading="Purchase Details"
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
          ></a>
        </div>
        <h4>{`Showing ${startIndex + 1} - ${Math.min(
          endIndex,
          TableList.length
        )} of ${TableList.length}`}</h4>
      </div>
    </div>
  );
}

export default SupplierHistory;
