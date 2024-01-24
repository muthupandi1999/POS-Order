import React, { useState } from "react";
import DynamicModal from "../DynamicModal";
import CloseIcon from "@mui/icons-material/Close";
import Toast from "react-hot-toast";

function PurchaseHistory({ openModal, setOpenModal, heading }) {
  const [currentPage, setCurrentPage] = useState(1);

  const showCount = 5;

  const TableList = [];

  for (let i = 0; i < 20; i++) {
    const dataItem = {
      id: i + 1,
      name: "Tomato",
      qty: 1000,
      rate: "RS1.00",
    };

    TableList.push(dataItem);
  }

  const totalPages = Math.ceil(TableList.length / showCount);

  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;
  const currentTableData = TableList.slice(startIndex, endIndex);
  const handleInputClose = () => {
    setOpenModal(false);
  };

  const handleSave = () => {
    handleInputClose();
    Toast.success("Added Successfully");
  };
  return (
    <DynamicModal open={openModal} onClose={handleInputClose}>
      <div className="">
        <div className="p-3 flex justify-between items-center border-b border-1 border-Secondary">
          <h4 className="text-md capitalize font-semibold text-Primary">
            {heading}
          </h4>
          <CloseIcon onClick={handleInputClose} className="cursor-pointer" />
        </div>
        <div className="my-4">
          <button className="primary-button w-full py-2 mb-2">
            Purchase Details
          </button>
          <div>
            <ul>
              <li className="flex justify-between items-center py-1">
                <h4>Supplier</h4>
                <h4>Jhon</h4>
              </li>
              <li className="flex justify-between items-center py-1">
                <h4>Invoice</h4>
                <h4>Purchase Tomato, bun, onion, lettuce</h4>
              </li>
              <li className="flex justify-between items-center py-1">
                <h4>Purchased Date</h4>
                <h4>November 1, 2023</h4>
              </li>
              <li className="flex justify-between items-center py-1">
                <h4>Total Bill</h4>
                <h4>RS4000.00</h4>
              </li>
              <li className="flex justify-between items-center py-1">
                <h4>Paid Amount</h4>
                <h4>RS4000.00</h4>
              </li>
              <li className="flex justify-between items-center py-1">
                <h4>Due</h4>
                <h4>RS0.00</h4>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="p-3">
              <label htmlFor="food group" className="">
                Name
              </label>
              <br />
              <input
                type="text"
                className="w-full py-1.5 text-sm  px-2 my-2 rounded border border-1 border-Secondary focus:outline-none placeholder:text-xs"
                placeholder="e.g Spicy chicken burger"
              />
            </div>
            <div className="p-3 flex justify-between">
              <button
                className="btn primary-button font-semibold border-0 rounded min-h-max h-10 w-[45%]"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="btn primary-button-cancel btn-Secondary rounded border-0  font-semibold min-h-max h-10 w-[45%]"
                onClick={handleInputClose}
              >
                Cancel
              </button>
            </div> */}
        <div className="mt-6">
          <button className="primary-button-cancel w-full py-2">
            Purchased Items
          </button>
          <div className="overflow-x-auto  bg-Light   mb-3 h-[auto] rounded">
            <table className="table allPurchaseHistoryTable table-xs table-pin-rows">
              <thead className="z-10 bg-Primary">
                <tr>
                  <th className="bg-Primar">S.No</th>

                  <th>Name</th>
                  <th>Qty</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody className="overflow-hidden z-0">
                {currentTableData.map((e, index) => (
                  <tr key={e?.id}>
                    <td>{e?.id}</td>

                    <td>{e?.name}</td>
                    <td>{e?.qty}</td>
                    <td>{e?.rate}</td>
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
      </div>
    </DynamicModal>
  );
}

export default PurchaseHistory;
