import React, { useState } from "react";

import Select from "react-select";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FoodStockTableData } from "../../../utills/data";

function IngredientStock() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const [selectedBranch, setSelectedBranch] = useState(null);

  // handle onChange event of the dropdown
  const handleChangeBranch = (e) => {
    setSelectedBranch(e);
  };

  // handle custom filter
  const filterOptionBranches = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const branches = [
    {
      value: 1,
      text: "Uttara",
    },
    {
      value: 2,
      text: "Dhanmondi",
    },
    {
      value: 3,
      text: "Gulshan",
    },
    {
      value: 4,
      text: "Banani",
    },
    {
      value: 5,
      text: "Mirpur",
    },
  ];

  return (
    <div className="p-4 my-element">
      <h4 className="font-bold text-xl pb-3">Food Stock report</h4>

      <div className="py-4 flex items-center justify-between flex-wrap gap-8">
        <div className="w-[20%]">
          <DatePicker
            // showIcon
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            placeholderText={"Start Date.."}
            className="py-2 px-4 border border-Secondary rounded focus:outline-none"
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
        {/* <button className="btn bg-Primary border-0 rounded text-Light min-h-max h-[40px] w-44 uppercase hover:bg-Primary">
          Filter
        </button> */}
        <div className="w-[30%] h-[40px]">
          <Select
            className="w-[100%]  customZIndex"
            styles={{
              control: (base) => ({
                ...base,
                height: "41px",
                outline: "none",
                ":focus-visible": {
                  outline: "none",
                },
                ":focus": {
                  outline: "1px solid #fff",
                },
              }),
              height: "40px",
              "& .css-13cymwt-control": {
                minHeight: "40px",
                height: "100%",
              },
            }}
            placeholder="Please select a Branch"
            isClearable={true}
            value={selectedBranch}
            options={branches}
            onChange={handleChangeBranch}
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
            filterOption={filterOptionBranches}
          />
        </div>
        <button className="bg-Pink px-4 py-2 h-[40px] min-h-max uppercase w-[22%] text-Light font-semibold rounded text-sm">
          generate report
        </button>

        {/* <button className="bg-Pink px-8 py-2 text-Light capitalize font-regular rounded text-sm">
          Filter
        </button> */}
      </div>

      <div className="overflow-x-auto  bg-Light my-8 h-auto rounded">
        <table className="table WorkPeriodTable table-xs table-pin-rows">
          <thead className="z-10 bg-Primary">
            <tr className="z-0">
              <th className="text-[10px]">S.No</th>
              <th className="text-[10px]">Branch</th>
              <th className="text-[10px]">Date</th>
              <th className="text-[10px]">Time</th>
              <th className="text-[10px]">Stock </th>
            </tr>
          </thead>
          <tbody className="overflow-hidden z-0">
            {FoodStockTableData.map((e, index) => (
              <tr key={e?.id}>
                <td>{e?.id}</td>
                <td>{e?.branch_name}</td>
                <td>{e?.date}</td>
                <td>{new Date(e?.created_at).toLocaleTimeString()}</td>
                <td>
                  <button className="bg-[#43766C] text-center px-4 py-2 text-Light rounded capitalize w-[120px]">
                    Check Stock
                  </button>
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
  );
}

export default IngredientStock;
