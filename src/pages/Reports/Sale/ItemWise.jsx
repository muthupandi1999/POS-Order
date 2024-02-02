import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Line } from "react-chartjs-2";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ItemWiseTableData } from "../../../utills/data";
import MoreIcon from "../../../components/Common/MoreIcon";

const lineChartOptions = {
  responsive: true,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const ItemWiseData = [80, 15, 60, 0, 93, 0, 0, 0, 0, 0, 0, 0];

const LineChartData = {
  labels: [
    "BBQ Meat Machine Pizza",
    "Meaty Onion Pizza",
    "Crispy Chicken Burger",
    "Spicy Mustard Burger",
    "Beef Burger",
    "Smoked Chicken Sandwich",
    "Crispy Chicken",
    "Thai Soup - Thick",
    "Cream of Mushroom",
    "Chicken Shawarma",
    "Beef Chui Gosht",
    "Egg soup",
  ],
  datasets: [
    {
      label: "Revenues",
      data: ItemWiseData.map((e) => e),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function ItemWise() {
  const [currentOrder, setCurrentOrder] = useState("Online");

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const navigate = useNavigate();

  return (
    <div className="p-4 my-element">
      <h4 className="font-bold text-xl pb-3">
        Food Items report for {currentOrder} orders
      </h4>
      <div className="py-2 flex items-center justify-start flex-wrap gap-8">
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
        <button className="bg-Pink px-4 py-2 h-[40px] min-h-max uppercase text-Light font-semibold rounded text-sm">
          generate report
        </button>
        <button
          className="btn bg-[#43766C] border-0 rounded text-Light hover:bg-[#43766C] h-[40px] min-h-max w-44 uppercase"
          onClick={() => {
            if (currentOrder === "Online") {
              setCurrentOrder("Offline");
              navigate("/reports/sale-reports/item-wise/online");
            } else {
              setCurrentOrder("Online");
              navigate("/reports/sale-reports/item-wise/offline");
            }
          }}
        >
          {currentOrder === "Online" && "Online Orders"}

          {currentOrder === "Offline" && "Offline Orders"}
        </button>

        {/* <button className="bg-Pink px-8 py-2 text-Light capitalize font-regular rounded text-sm">
          Filter
        </button> */}
      </div>

      <div className="py-3 border-b border-Secondary">
        <div className="flex items-center justify-between">
          <h4 className="font-bold  pb-3">
            Last month's revenue of each branch
          </h4>
          <MoreIcon chartId={"stack7"} />
        </div>

        <div className="w-[100%] h-[650px] py-6 flex items-center justify-center">
          <Line id="stack7" options={lineChartOptions} data={LineChartData} />
          {/* {...props} */}
        </div>
      </div>

      <div className="overflow-x-auto  bg-Light my-8 h-auto rounded">
        <table className="table WorkPeriodTable table-xs table-pin-rows">
          <thead className="z-10 bg-Primary">
            <tr>
              <th className="text-[10px]">S.No</th>
              <th className="text-[10px]">Name</th>
              <th className="text-[10px]">Group</th>
              <th className="text-[10px]">Variation</th>
              <th className="text-[10px]">Qty </th>
              <th className="text-[10px]">Bill</th>
              <th className="text-[10px]">Date</th>
            </tr>
          </thead>
          <tbody className="overflow-hidden z-0">
            {ItemWiseTableData.map((e, index) => (
              <tr key={e?.id}>
                <td>{e?.id}</td>
                <td>{e?.food_item}</td>
                <td>{e?.food_group}</td>
                <td>{e?.variation}</td>
                <td>{e?.quantity}</td>
                <td>{e?.price}</td>
                <td>{new Date(e?.created_at).toUTCString()}</td>
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

export default ItemWise;
