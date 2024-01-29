import React from "react";
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
const columnChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
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
      data: [15292.669999999993, 555.02],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const BarChartDataItems = {
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
  ],
  datasets: [
    {
      label: "Revenue by Dollar",
      data: [20, 12, 0, 14, 0, 28, 43, 0, 10, 4, 37],
      backgroundColor: "rgba(198, 178, 253, 1)",
      borderColor: "rgba(198, 178, 253, 1)",
      borderWidth: 1,
    },
  ],
};

function Dashboard() {
  return (
    <div className="p-4">
      <h4 className="font-bold text-xl pb-3">Reports</h4>
      <div className="flex justify-evenly items-center border-b border-Secondary">
        <div>
          <h4 className="text-start font-semibold">
            Today's Revenue of All Branches
          </h4>
          <div className="w-[400px] h-[400px] flex items-center justify-center">
            <Pie
              width={400}
              height={400}
              options={chartOptions}
              data={AllBranchesData}
            />
            {/* {...props} */}
          </div>
        </div>
        <div>
          <h4 className="text-start font-semibold">Today's sales by Groups</h4>
          <div className="w-[400px] h-[400px] flex items-center justify-center">
            <Pie
              width={400}
              height={400}
              options={chartOptions}
              data={FoodGroupRevenueData}
            />
            {/* {...props} */}
          </div>
        </div>
      </div>

      <div className="py-3 border-b border-Secondary">
        <h4 className="font-bold  pb-3">
          Last month's revenue of each branch
        </h4>
        <div className="w-[100%] h-[400px] flex items-center justify-center">
          <Bar options={barChartOptions} data={BarChartData} />
          {/* {...props} */}
        </div>
      </div>

      <div className="py-3">
        <h4 className="font-bold  pb-3">
          Last month's item wise revenue
        </h4>
        <div className="w-[100%] h-[400px] flex items-center justify-center">
          <Bar options={columnChartOptions} data={BarChartDataItems} />
          {/* {...props} */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
