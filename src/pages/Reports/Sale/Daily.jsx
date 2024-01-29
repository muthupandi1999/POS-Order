import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  registerables,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  ...registerables
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: true,
      position: "right",
    },
    tooltip: {
      enabled: true, // Disable tooltip/hover
    },
    title: {
      display: false,
      text: "Pie",
      font: {
        size: 18,
        weight: "bold",
      },
    },
  },
};

export const AllBranchesData = {
  labels: ["Uttara", "Dhaka"],
  datasets: [
    {
      label: "Revenues by dollers",
      data: [81.8, 99.9],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      //   borderColor: [
      //     'rgba(255, 99, 132, 1)',
      //     'rgba(54, 162, 235, 1)',
      //     'rgba(255, 206, 86, 1)',
      //     'rgba(75, 192, 192, 1)',
      //     'rgba(153, 102, 255, 1)',
      //     'rgba(255, 159, 64, 1)',
      //   ],
      borderWidth: 1,
    },
  ],
};

export const FoodGroupRevenueData = {
  labels: [
    "Pizza",
    "Burgers",
    "Sandwich",
    "Fried Chicken",
    "Soups",
    "Shawarma",
    "Bangladeshi",
    "Biryani",
  ],
  datasets: [
    {
      label: "Count of Sales",
      data: [46, 113, 20, 14, 0, 17, 0, 22],
      // backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      backgroundColor: [
        "rgba(255, 183, 197, 1)",
        "rgba(173, 216, 230, 1)",
        "rgba(255, 236, 175, 1)",
        "rgba(187, 222, 251, 1)",
        "rgba(198, 178, 253, 1)",
        "rgba(255, 208, 155, 1)",
        "rgba(255, 189, 143, 1)",
      ],

      borderWidth: 1,
    },
  ],
};

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
      data: [81.8, 99.99],
      backgroundColor: "rgba(49,160,252, 0.5)",
      borderColor: "rgb(49,160,252)",
      borderWidth: 1,
    },
  ],
};

function Daily() {
  const [currentOrder, setCurrentOrder] = useState("Online");

  const currentTableData = [
    {
      id: 1,
      token: "#85",
      time: "2.25pm",
      customer: "pandi",
      bill: "RS 10.60",
      branch: "Uttara",
      status: "ready",
    },
    {
      id: 1,
      token: "#85",
      time: "2.25pm",
      customer: "pandi",
      bill: "RS 10.60",
      branch: "Uttara",
      status: "ready",
    },
    {
      id: 1,
      token: "#85",
      time: "2.25pm",
      customer: "pandi",
      bill: "RS 10.60",
      branch: "Uttara",
      status: "ready",
    },
    {
      id: 1,
      token: "#85",
      time: "2.25pm",
      customer: "pandi",
      bill: "RS 10.60",
      branch: "Uttara",
      status: "processing",
    },
  ];
  return (
    <div className="p-4">
      <h4 className="font-bold text-xl pb-3">Daily Report For Offline Order</h4>
      <div className="py-2 flex items-center justify-between">
        <button className="bg-Pink px-4 py-2 text-Light capitalize font-regular rounded text-sm">
          amount/branch
        </button>
        <button
          className="btn bg-DarkGreen border-0 rounded text-Light hover:bg-DarkGreen h-[40px] min-h-max w-44 uppercase"
          onClick={() => {
            if (currentOrder === "Online") {
              setCurrentOrder("Offline");
              //   navigate("/orders/online");
            } else {
              setCurrentOrder("Online");
              //   navigate("/orders/pos");
            }
          }}
        >
          {currentOrder === "Online" && "Online Orders"}

          {currentOrder === "Offline" && "Offline Orders"}
        </button>
      </div>

      <div className="py-3 border-b border-Secondary">
        <h4 className="font-bold  pb-3">Last month's revenue of each branch</h4>
        <div className="w-[100%] h-[400px] flex items-center justify-center">
          <Bar options={barChartOptions} data={BarChartData} />
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
              <th className="text-[10px]">Branch at</th>
              <th className="text-[10px]">Status</th>
            </tr>
          </thead>
          <tbody className="overflow-hidden z-0">
            {currentTableData.map((e, index) => (
              <tr key={e?.id}>
                <td>{e?.id}</td>
                <td>{e?.token}</td>
                <td>{e?.time}</td>
                <td>{e?.customer}</td>
                <td>{e?.bill}</td>
                <td>{e?.branch}</td>
                <td>
                  <button className="bg-Green text-center px-4 py-2 text-Light rounded capitalize w-[120px]">
                    {e?.status}
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

export default Daily;
