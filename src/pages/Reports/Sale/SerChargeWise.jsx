import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  registerables,
  plugins,
} from "chart.js";

import {
  SerChargeWiseTableData,
} from "../../../utills/data";
import MoreIcon from "../../../components/Common/MoreIcon";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  plugins,
  ChartDataLabels,
  ...registerables
);

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: true,
      },
    },
  },
  plugins: {
    datalabels: {
      display: true,
      color: "white",
      formatter: Math.round,
      anchor: "center",
      offset: 0,
      align: "center",
    },
    legend: {
      display: true,
      position: "top",
    },
  },
  title: {
    display: true,
    text: "Bar Chart Example",
    font: {
      size: 18,
      weight: "bold",
    },
  },
};

const BarChartData = {
  labels: ["Dhaka", "Uttar"],
  datasets: [
    {
      label: "Revenue by Dollar ",
      data: [19713.46, 0],
      backgroundColor: "rgba(49,160,252, 0.5)",
      borderColor: "rgb(49,160,252)",
      borderWidth: 1,
    },
  ],
};

function SerChargeWise() {
  const [currentOrder, setCurrentOrder] = useState("Online");

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const navigate = useNavigate();

  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // handle onChange event of the dropdown
  const handleChangeDepartment = (e) => {
    setSelectedUser(e);
  };

  // handle custom filter
  const filterOptionDepartment = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const departments = [
    {
      value: 1,
      text: "Takeaway",
    },
    {
      value: 2,
      text: "Delivery",
    },
    {
      value: 3,
      text: "POS",
    },
  ];

  return (
    <div className="p-4">
      <h4 className="font-bold text-xl pb-3">
        POS user Wise report for {currentOrder}
      </h4>

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

        <button className="bg-Pink px-4 py-2 h-[40px] min-h-max uppercase w-[22%] text-Light font-semibold rounded text-sm">
          generate report
        </button>

        {/* <button className="bg-Pink px-8 py-2 text-Light capitalize font-regular rounded text-sm">
          Filter
        </button> */}
      </div>

      <div className="py-3 border-b border-Secondary">
        {/* <h4 className="font-bold  pb-3">Last month's revenue of each branch</h4> */}
        <div className="flex items-center justify-end">
          
          <MoreIcon chartId={"stack12"} />
        </div>
        <div className="w-[100%] h-[650px] py-6 flex items-center justify-center">
          <Bar id="stack12" options={barChartOptions} data={BarChartData} />
          {/* {...props} */}
        </div>
      </div>

      <div className="overflow-x-auto  bg-Light my-8 h-auto rounded">
        <table className="table WorkPeriodTable table-xs table-pin-rows">
          <thead className="z-10 bg-Primary">
            <tr>
              <th className="text-[10px]">S.No</th>
              <th className="text-[10px]">Token</th>
              <th className="text-[10px]">Time</th>
              <th className="text-[10px]">Customer</th>
              <th className="text-[10px]">Bill </th>
              <th className="text-[10px]">Ser Charge </th>
              <th className="text-[10px]">Branch</th>
            </tr>
          </thead>
          <tbody className="overflow-hidden z-0">
            {SerChargeWiseTableData.map((e, index) => (
              <tr key={e?.id}>
                <td>{e?.id}</td>
                <td>#{e?.token?.id}</td>
                <td>
                  {new Date(
                    e?.orderedItems?.[0]?.created_at
                  ).toLocaleTimeString()}
                </td>
                <td>{e?.customer_name}</td>
                <td>{e?.order_bill}</td>
                <td>{e?.service_charge}</td>

                <td>{e?.branch_name}</td>
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

export default SerChargeWise;
