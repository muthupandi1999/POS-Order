import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import ChartDataLabels from "chartjs-plugin-datalabels";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
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
  DiscountWiseTableData,
} from "../../../utills/data";
import OrderDetails from "../../../components/modals/modalComponents/OrderDetails";
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
  labels: ["Uttara", "Dhaka"],
  datasets: [
    {
      label: "Revenue by Dollar ",
      data: [262, 5],
      backgroundColor: "rgba(49,160,252, 0.5)",
      borderColor: "rgb(49,160,252)",
      borderWidth: 1,
    },
  ],
};

function DiscountWise() {
  const [currentOrder, setCurrentOrder] = useState("Online");

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const handleOpen = (e) => {
    setOrderData(e);
    setOpenModal(true);
  };

  const navigate = useNavigate();

  const [selectedUser, setSelectedUser] = useState(null);

  // handle onChange event of the dropdown
  const handleChangeUser = (e) => {
    setSelectedUser(e);
  };

  // handle custom filter
  const filterOptionUsers = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const users = [
    {
      value: 1,
      text: "Admin",
    },
    {
      value: 2,
      text: "Staff",
    },
    {
      value: 3,
      text: "Carlos",
    },
    {
      value: 4,
      text: "Saed",
    },
    {
      value: 5,
      text: "Lloyd Hirthe",
    },
  ];

  return (
    <div className="p-4 my-element">
      <h4 className="font-bold text-xl pb-3">Discount Wise report</h4>

      <div className="py-4 flex items-center justify-start flex-wrap gap-8">
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
          <MoreIcon chartId={"stack13"} />
        </div>
        <div className="w-[100%] h-[650px] py-6 flex items-center justify-center">
          <Bar id="stack13" options={barChartOptions} data={BarChartData} />
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
              <th className="text-[10px]">Branch </th>
              <th className="text-[10px]">Status</th>
              <th className="text-[10px]">Date</th>
            </tr>
          </thead>
          <tbody className="overflow-hidden z-0">
            {DiscountWiseTableData.map((e, index) => (
              <tr key={e?.id}>
                <td>{e?.id}</td>
                <td>#{e?.token?.id}</td>
                <td>{new Date(e?.created_at).toLocaleTimeString()}</td>
                <td>{e?.customer_name}</td>
                <td>{e?.order_bill}</td>
                <td>{e?.branch_name}</td>
                <td>
                  <button
                    className="bg-[#43766C] text-center px-4 py-2 text-Light rounded capitalize w-[120px]"
                    onClick={() => handleOpen(e)}
                  >
                    Ready
                  </button>
                </td>
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

      <OrderDetails
        data={orderData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}

export default DiscountWise;
