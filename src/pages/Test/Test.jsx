import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { foodItemListData, foodItemListDatas } from "../../utills/data";
import ProductCard from "../../components/cards/ProductCard";

function Test() {
  const [activeMenu, setActiveMenu] = useState("All Menu");
  const [searchValue, setSearchValue] = useState("");
  const [foodData, setFoodData] = useState(null);
  const navigate = useNavigate();

  const manuList = [
    {
      id: 1,
      name: "All Menu",
      count: 45,
    },
    {
      id: 2,
      name: "Breakfast",
      count: 10,
    },
    {
      id: 3,
      name: "Fastfood",
      count: 10,
    },
    {
      id: 4,
      name: "Soups",
      count: 5,
    },
    {
      id: 5,
      name: "Pasta",
      count: 5,
    },
    {
      id: 6,
      name: "Cakes",
      count: 5,
    },
    {
      id: 7,
      name: "Beverages",
      count: 5,
    },
    {
      id: 8,
      name: "Snacks",
      count: 5,
    },
  ];

  const emptyArray1 = Array.from({ length: 6 });

  const handleProceedOrder = () => {
    toast.success("Order Created Successfully");
    navigate("/POS/Orders");
  };

  useEffect(() => {
    const filterData = foodItemListDatas?.filter((item) => {
      if (activeMenu === "All Menu") {
        return true; // Return true for all items if filterOrder is "All"
      } else {
        return item.category === activeMenu;
      }
    });

    if (filterData) {
      const filteredTableData = filterData?.filter((item) =>
        Object.values(item).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      if (filteredTableData) {
        setFoodData(filteredTableData);
      }
    }
  }, [activeMenu, searchValue]);
  console.log(activeMenu);
  return (
    <div className="flex justify-between p-6 gap-5 my-element">
      <div className="bg-[#f0f0ec] w-[71vw]  p-6 rounded-md">
        <div className="flex justify-between items-center pb-6">
          <h4 className="font-semibold">Choose Menu</h4>
          <div className="relative">
            <input
              type="text"
              className="px-2 py-2 text-xs rounded w-[12vw] focus:outline-none"
              placeholder="search a dishes"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              onChange={(e) => setSearchValue(e?.target?.value)}
            />
            <SearchIcon
              className="absolute right-1.5 top-1.5"
              sx={{ fontSize: "20px" }}
            />
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="h-[73vh] overflow-y-scroll footItemsList w-[14%]">
            <ul className="">
              {manuList.map((e) => (
                <li
                  style={{
                    boxShadow:
                      activeMenu === e?.name
                        ? "none"
                        : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                  }}
                  className={` px-3 py-4 mb-3 w-[8vw] rounded-lg cursor-pointer transition-colors duration-500 ${
                    activeMenu === e?.name ? "bg-Pink text-Light " : "bg-white"
                  }`}
                  key={e?.id}
                  onClick={() => setActiveMenu(e?.name)}
            
                >
                  <h4
                    className={`font-semibold pb-2 ${
                      activeMenu === e?.name ? " text-Light" : ""
                    }`}
                  >
                    {e?.name}
                  </h4>
                  <p className="text-xs">{e?.count} items</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="testList h-[73vh]  overflow-y-scroll w-[90%] footItemsList">
            {foodData?.map((e, index) => (
              <ProductCard key={e?.id} e={e} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[25vw] p-3 bg-[#f0f0ec] rounded-md">
        <div className="bg-white p-3">
          <div className="border-b border-Secondary">
            <div className="flex justify-between items-center pb-2">
              <div>
                <h4 className="font-semibold pb-1">Arial Hikmat</h4>
                <p className="text-sm">Order #925 / Dine In</p>
              </div>
              <h4 className="bg-Pink text-Light flex justify-center items-center px-2 w-10 h-10 rounded-md">
                A4
              </h4>
            </div>
            <h4 className="text-sm pb-2">{new Date().toISOString()}</h4>
          </div>
          <div className="pt-4">
            <h4 className="font-semibold pb-2">Order Details</h4>
            <div className="h-[470px] footItemsList overflow-y-scroll">
              {emptyArray1.map((e, index) => (
                <div key={index} className="border-b border-Secondary pt-2">
                  <div className="flex justify-between items-center pb-1">
                    <h4 className="text-sm font-semibold">
                      Scrambles eggs with toast
                    </h4>
                    <h4 className="text-sm font-semibold">x1</h4>
                  </div>
                  <p className="text-xs pb-1">Extra: Extra Honey</p>
                  <p className="text-xs pb-1">Note: Make the dish bit spicy</p>
                  <div className="flex justify-between items-center pb-3">
                    <button className="text-Pink rounded-lg px-2 text-xs py-1 bg-[#f0f0ec] flex items-center">
                      <NoteAltOutlinedIcon
                        className="pr-1 text-Pink"
                        sx={{ fontSize: "18px" }}
                      />
                      Notes
                    </button>
                    <h4 className="font-semibold">$16.99</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-6">
            <div className="flex justify-between items-center pb-2">
              <h4 className=" pb-1 text-sm font-medium">Items(5)</h4>
              <h4 className="font-semibold pb-1">$73.79</h4>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="pb-1 text-sm font-medium">Tax(5%)</h4>
              <h4 className="font-semibold pb-1">$3.79</h4>
            </div>

            <button
              className="bg-Pink flex justify-between px-4 items-center w-full m-auto mt-3 py-2 rounded-md"
              onClick={handleProceedOrder}
            >
              <h4 className="text-Light">$87.34</h4>
              <h6 className="text-Light flex items-center">
                Proceed Order
                <EastOutlinedIcon sx={{ fontSize: "20px" }} />
              </h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
