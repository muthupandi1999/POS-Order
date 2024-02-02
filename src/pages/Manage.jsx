import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import InventoryIcon from "@mui/icons-material/Inventory";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PaymentsIcon from "@mui/icons-material/Payments";
import SmsIcon from "@mui/icons-material/Sms";
import SettingsIcon from "@mui/icons-material/Settings";
import { Manages } from "../utills/data";
import AddNewItem from "./Manage/Foods/AddNewItem";
import AllItems from "./Manage/Foods/AllItems";
import Groups from "./Manage/Foods/Groups";
import Properties from "./Manage/Foods/Properties";
import Variations from "./Manage/Foods/Variations";
import ReceipeBuilder from "./Manage/Foods/ReceipeBuilder";
import AllReceipes from "./Manage/Foods/AllReceipes";
import SingleReceipe from "./Manage/SingleReceipe/singleReceipe";
import IngredientItem from "./Manage/Stocks/IngredientItem";
import IngredientPurchase from "./Manage/Stocks/IngredientPurchase";
import PurchaseHistory from "./Manage/Stocks/PurchaseHistory";
import ManageSupplier from "./Manage/Stocks/ManageSupplier";
import SupplierHistory from "./Manage/Stocks/SupplierHistory";
import AdminStaff from "./Manage/Management/AdminStaff";
import Customers from "./Manage/Management/Customers";
import Waiters from "./Manage/Management/Waiters";
import DeliveryUser from "./Manage/Management/DeliveryUser";
import NewDeliveryUser from "./Manage/Management/NewDeliveryUser";
import RoleGroup from "./Manage/Management/RoleGroup";
import Branches from "./Manage/Restaurant/Branches";
import DeptTags from "./Manage/Restaurant/DeptTags";
import Tables from "./Manage/Restaurant/Tables";
import Tips from "./Manage/Restaurant/Tips";
import PaymentType from "./Manage/Restaurant/PaymentType";
import { Link } from "react-router-dom";

function Manage() {
  const [activeCategory, setActiveCategory] = useState(null);

  const location = useLocation();

  const navigate = useNavigate();

  // console.log("location", location);

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);

    // if (!activeCategory) {
    //   let getItem = localStorage.getItem("activeCategory");
    //   setActiveCategory(getItem);
    // }
  }, [location.pathname]);

  const handleList = (e) => {
    setActiveCategory(e?.name);
    localStorage.setItem("activeCategory", e?.name);
  };

  useEffect(() => {
    if (!activeCategory) {
      let getItem = localStorage.getItem("activeCategory");
      setActiveCategory(getItem);
    }else{
      setActiveCategory("foods")
    }
  }, []);
  return (
    <div className="mx-8 py-[20px]">
      <div className="flex justify-between">
        <div className="w-[14%] h-[84vh] bg-Primary rounded px-1 py-1 overflow-hidden">
          <ul className=" flex flex-col h-[100%] px-[10px] py-2">
            {Manages.map((e, index) => (
              <div key={e?.id}>
                <li
                  className={`flex items-center gap-2 text-Light uppercase rounded-b-none font-bold cursor-pointer text-xs text-start relative py-2 px-3 rounded ${
                    activeCategory === e?.name
                      ? "border-Primary bg-Pink text-Light shadow-none"
                      : ""
                  }`}
                  onClick={() => handleList(e)}
                >
                  {e?.icon}
                  <span className="relative">{e?.name}</span>
                </li>
                <div
                   className={`navbarContainer ${
                    activeCategory === e?.name ? "flow" : "navbarContainer"
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
        <div className="w-[85%] h-[85vh] bg-Light overflow-hidden">
          <Routes>
            <Route path="/food/add-new-item" element={<AddNewItem />} />
            <Route path="/food/all-items" element={<AllItems />} />
            <Route path="/food/groups" element={<Groups />} />
            <Route path="/food/properties/*" element={<Properties />} />
            <Route path="/food/variations" element={<Variations />} />
            <Route path="/food/receipe-builder" element={<ReceipeBuilder />} />
            <Route path="/food/all-receipes" element={<AllReceipes />} />
            <Route
              path="/food/all-receipes/single-receipe/*"
              element={<SingleReceipe />}
            />

            {/* manage */}

            <Route path="/stock/ingredient-item" element={<IngredientItem />} />
            <Route
              path="/stock/ingredient-purchase"
              element={<IngredientPurchase />}
            />
            <Route
              path="/stock/purchase-history-ingredient"
              element={<PurchaseHistory />}
            />
            <Route path="/stock/manage-supplier" element={<ManageSupplier />} />
            <Route
              path="/stock/supplier-history"
              element={<SupplierHistory />}
            />

            {/* user management */}

            <Route path="/user/admin-staff" element={<AdminStaff />} />

            <Route path="/user/customers" element={<Customers />} />

            <Route path="/user/waiters" element={<Waiters />} />

            <Route path="/user/roles-and-permissions" element={<RoleGroup />} />

            <Route path="/user/delivery-men" element={<DeliveryUser />} />

            <Route
              path="/user/delivery-request"
              element={<NewDeliveryUser />}
            />

            {/* Restaurant */}
            <Route path="/restaurant/branches" element={<Branches />} />
            <Route path="/restaurant/dept-tags" element={<DeptTags />} />
            <Route path="/restaurant/tables" element={<Tables />} />
            <Route path="/restaurant/tips" element={<Tips />} />
            <Route path="/restaurant/payment-type" element={<PaymentType />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Manage;
