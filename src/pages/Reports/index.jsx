import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import InventoryIcon from "@mui/icons-material/Inventory";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PaymentsIcon from "@mui/icons-material/Payments";
import SmsIcon from "@mui/icons-material/Sms";
import SettingsIcon from "@mui/icons-material/Settings";
import { Reports } from "../../utills/data";

import { Link } from "react-router-dom";
import IngredientStock from "./Stock/IngredientStock";
import FoodStock from "./Stock/FoodStock";
import Dashboard from "./Sale/Dashboard";
import Daily from "./Sale/Daily";
import Monthly from "./Sale/Monthly";
import ItemWise from "./Sale/ItemWise";
import GroupWise from "./Sale/GroupWise";
import BranchWise from "./Sale/BranchWise";
import POSUserWise from "./Sale/POSUserWise";
import DepartmentWise from "./Sale/DepartmentWise";
import SerChargeWise from "./Sale/SerChargeWise";
import DiscountWise from "./Sale/DiscountWise";

function index() {
  const [activeReports, setActiveReports] = useState(null);

  const location = useLocation();

  const navigate = useNavigate();

  // console.log("location", location);

  const handleList = (e) => {
    setActiveReports(e?.name);
    localStorage.setItem("activeReports", e?.name);
  };

  useEffect(() => {
    if (!activeReports) {
      let getItem = localStorage.getItem("activeReports");
      setActiveReports(getItem);
    }
  }, []);
  return (
    <div className="mx-8 py-[20px]">
      <div className="flex justify-between">
        <div className="w-[12%] h-[84vh] bg-Primary rounded px-1 py-1 overflow-hidden">
          <ul className=" flex flex-col h-[100%] px-[10px] py-2">
            {Reports.map((e, index) => (
              <div key={e?.id}>
                <li
                  className={`flex items-center gap-2 text-Light uppercase rounded-b-none font-bold cursor-pointer text-xs text-start relative py-2 px-3 rounded ${
                    activeReports === e?.name
                      ? "border-Primary bg-Pink text-Light shadow-none"
                      : ""
                  }`}
                  onClick={() => handleList(e)}
                >
                  {e?.icon}
                  <span className="relative">{e?.name}</span>
                </li>
                <div
                  className={`transition-all duration-700 ease-in-out ${
                    activeReports === e?.name
                      ? "max-h-[1000px] opacity-100 visible"
                      : "max-h-0 opacity-0 invisible"
                  }`}
                  style={{
                    backgroundColor: "rgb(255 255 255 / 5%)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <ul className="flex flex-col rounded rounded-t-none">
                    {e?.items.map((item, index) => (
                      <li
                        className={`text-Light font-medium flex items-center gap-2 py-2 px-4 cursor-pointer text-sm ${
                          location.pathname.includes(item?.route) &&
                          "text-Light"
                        }`}
                        key={index}
                      >
                        {location.pathname.includes(item?.route) ? (
                          <span className="w-3.5 h-3.5 bg-Pink border border-1 border-transparent rounded-full flex justify-center items-center">
                            {" "}
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          </span>
                        ) : (
                          <span className="w-3.5 h-3.5 border border-1 border-Pink rounded-full flex justify-center items-center">
                            {" "}
                          </span>
                        )}
                        <Link to={item?.route}>{item?.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-[86%] h-[84vh] bg-Light overflow-y-scroll overflow-x-hidden">
          <Routes>
            {/* Sale */}
            <Route path="/sale-reports/dashboard" element={<Dashboard />} />
            <Route path="/sale-reports/daily" element={<Daily />} />
            <Route path="/sale-reports/monthly" element={<Monthly />} />
            <Route path="/sale-reports/item-wise" element={<ItemWise />} />
            <Route path="/sale-reports/group-wise" element={<GroupWise />} />
            <Route path="/sale-reports/branch-wise" element={<BranchWise />} />
            <Route
              path="/sale-reports/pos-user-wise"
              element={<POSUserWise />}
            />
            <Route
              path="/sale-reports/department-wise"
              element={<DepartmentWise />}
            />
            <Route
              path="/sale-reports/ser-charge-wise"
              element={<SerChargeWise />}
            />
            <Route
              path="/sale-reports/discount-wise"
              element={<DiscountWise />}
            />
            {/* Stock */}
            <Route path="/stock-reports/food-stock" element={<FoodStock />} />

            <Route
              path="/stock-reports/ingredient-stock"
              element={<IngredientStock />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default index;
