import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Manages } from "../utills/data";
import AddNewItem from "./Manage/AddNewItem";
import AllItems from "./Manage/AllItems";
import Groups from "./Manage/Groups";
import Properties from "./Manage/Properties";
import Variations from "./Manage/Variations";
import ReceipeBuilder from "./Manage/ReceipeBuilder";
import AllReceipes from "./Manage/AllReceipes";
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

function Manage() {
  const [activeCategory, setActiveCategory] = useState("foods");

  const location = useLocation();

  const navigate = useNavigate();

  console.log("location", location);

  const handleList = (e) => {
    setActiveCategory(e?.name);
  };

  return (
    <div className="mx-8">
      <div className="flex justify-between">
        <div className="w-[12%]">
          <ul className="overflow-auto flex flex-col h-[100%] px-[10px] my-2">
            {Manages.map((e, index) => (
              <div key={e?.id}>
                <li
                  className={` border border-1 border-Secondary text-Primary uppercase font-bold cursor-pointer text-xs  text-start shadow-md relative py-2 px-8  mb-2 rounded-md ${
                    activeCategory === e?.name
                      ? "border-Primary bg-Secondary  border-b-4 shadow-none"
                      : "bg-Light"
                  }`}
                  onClick={() => handleList(e)}
                >
                  <span className="relative">{e?.name}</span>
                </li>
                {/* {activeCategory === e?.name && ( */}
                <div
                  className={`mb-2 transition-[height] duration-[10s] ease-linear ${
                    activeCategory === e?.name
                      ? "h-auto opacity-100 visible"
                      : "h-0 opacity-0 hidden"
                  }`}
                >
                  <ul className="flex flex-col">
                    {e?.items!.map((e, index) => (
                      <li
                        className={`bg-Light py-2 pl-7 px-2 cursor-pointer text-sm ${
                          location.pathname.includes(e?.route) &&
                          "font-bold bg-Primary text-Light"
                        }`}
                        key={index}
                        onClick={() => navigate(e?.route)}
                      >
                        - {e?.name}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* )} */}
              </div>
            ))}
          </ul>
        </div>
        <div className="w-[87%]">
          <Routes>
            <Route path="/food/add-new-item" element={<AddNewItem />} />
            <Route path="/food/all-items" element={<AllItems />} />
            <Route path="/food/groups" element={<Groups />} />
            <Route path="/food/properties" element={<Properties />} />
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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Manage;

