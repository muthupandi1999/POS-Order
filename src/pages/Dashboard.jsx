import React from "react";
import DashboardCard from "../components/cards/DashboardCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CoffeeIcon from "@mui/icons-material/Coffee";
import FlagIcon from "@mui/icons-material/Flag";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TableBarIcon from '@mui/icons-material/TableBar';

const dashboardArray = [
  {
    title: "work periods",
    iconText: "time",
    image: "https://khadyo.softtechdemo.com/assets/img/product-img-1.jpg",
    color: "#606cc4",
    icon: <AccessTimeIcon className="text-[#606cc4] !w-4 mt-[-2px]" />,
    router: "/dashboard/work-periods",
  },
  {
    title: "point of sale",
    iconText: "pos",
    image: "https://khadyo.softtechdemo.com/assets/img/product-img-2.jpg",
    color: "#544fff",
    icon: <AddShoppingCartIcon className="text-[#544fff] !w-4 mt-[-2px]" />,
    router: "/pos/orders",
  },
  {
    title: "order histories",
    iconText: "orders",
    image: "https://khadyo.softtechdemo.com/assets/img/product-img-3.jpg",
    color: "#0dd19d",
    icon: <CreateIcon className="text-[#0dd19d] !w-4 mt-[-2px]" />,
    router: "/orders/pos",
  },
  {
    title: "customers",
    iconText: "customers",
    image: "https://khadyo.softtechdemo.com/assets/img/product-img-4.jpg",
    color: "#de222a",
    icon: <AccountCircleIcon className="text-[#de222a] !w-4 mt-[-2px]" />,
    router: "/dashboard/customers/pos",
  },
  {
    title: "kitchen",
    iconText: "kitchen",
    image: "https://khadyo.softtechdemo.com/assets/img/product-img-9.jpg",
    color: "#f4bd0e",
    icon: <CoffeeIcon className="text-[#f4bd0e] !w-4 mt-[-2px]" />,
    router: "/kitchen/pos",
  },
  {
    title: "reports",
    iconText: "reports",
    image: "https://khadyo.softtechdemo.com/assets/img/product-img-7.jpg",
    color: "#fe491a",
    icon: <FlagIcon className="text-[#fe491a] !w-4 mt-[-2px]" />,
    router: "/reports/sale-reports/dashboard",
  },
  {
    title: "bookings",
    iconText: "bookings",
    image: "https://img.freepik.com/free-vector/man-booking-appointment-smartphone_23-2148562877.jpg?w=1380&t=st=1707282249~exp=1707282849~hmac=ba307c7cabc061b71103adcf72309f92e37029e14ecb7b2ca3853e784972431c",
    color: "#f4bd0e",
    icon: <TableBarIcon className="text-[#f4bd0e] !w-4 mt-[-2px]" />,
    router: "/bookings",
  },
  {
    title: "manage",
    iconText: "manage",
    image: "https://khadyo.softtechdemo.com/assets/img/product-img-8.png",
    color: "#fe491a",
    icon: <ManageAccountsIcon className="text-[#fe491a] !w-4 mt-[-2px]" />,
    router: "/manage/food/add-new-item",
  },
];

function Dashboard() {
  return (
    <div className="max-w-[1320px] m-auto my-element">
   
      <div className="dashboardCardList py-8">
        {dashboardArray.map((e, index) => (
          <DashboardCard key={index} e={e} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
