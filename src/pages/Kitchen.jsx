import React, { useEffect, useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SwipeableItem from "../components/events/SwipeEvent";
import Dropdown from "../components/Common/Dropdown";
import SearchIcon from "@mui/icons-material/Search";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
function Kitchen() {
  const itemSelectedList = new Array(10).fill(null);

  const { onTouchStart, onTouchMove, onTouchEnd } = SwipeableItem();

  const [currentOrder, setCurrentOrder] = useState("Online");

  const [kitchenList, setKitchenList] = useState([
    {
      id: 1,
      name: "Crispy Fried chicken",
      count: 6,
    },
    {
      id: 2,
      name: "Idly",
      count: 6,
    },
    {
      id: 3,
      name: "Dosa",
      count: 6,
    },
    {
      id: 4,
      name: "Popcorn Chicken",
      count: 6,
    },
    {
      id: 5,
      name: "Chicken thanthoori",
      count: 6,
    },
    {
      id: 6,
      name: "Paneer",
      count: 6,
    },
    {
      id: 7,
      name: "Chilli chicken",
      count: 6,
    },
    {
      id: 8,
      name: "Egg Fried Rice",
      count: 6,
    },
  ]);

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionSort, setSelectedOptionSort] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const handleChangeSort = (e) => {
    setSelectedOptionSort(e);
  };

  const dropDownData = [
    {
      value: 1,
      text: "All",
      // icon: (
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="16"
      //     height="16"
      //     fill="currentColor"
      //     class="bi bi-arrow-up-circle"
      //     viewBox="0 0 16 16"
      //   >
      //     <path
      //       fill-rule="evenodd"
      //       d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
      //     />
      //   </svg>
      // ),
    },
    {
      value: 2,
      text: "Pizza",
      // icon: (
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="16"
      //     height="16"
      //     fill="currentColor"
      //     class="bi bi-arrow-down-circle"
      //     viewBox="0 0 16 16"
      //   >
      //     <path
      //       fill-rule="evenodd"
      //       d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
      //     />
      //   </svg>
      // ),
    },
    {
      value: 3,
      text: "Burgers",
      // icon: (
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="16"
      //     height="16"
      //     fill="currentColor"
      //     class="bi bi-arrow-left-circle"
      //     viewBox="0 0 16 16"
      //   >
      //     <path
      //       fill-rule="evenodd"
      //       d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
      //     />
      //   </svg>
      // ),
    },
    {
      value: 4,
      text: "Sandwich",
      // icon: (
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="16"
      //     height="16"
      //     fill="currentColor"
      //     class="bi bi-arrow-right-circle"
      //     viewBox="0 0 16 16"
      //   >
      //     <path
      //       fill-rule="evenodd"
      //       d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
      //     />
      //   </svg>
      // ),
    },
    {
      value: 5,
      text: "Fried Chicken",
      // icon: (
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="16"
      //     height="16"
      //     fill="currentColor"
      //     class="bi bi-arrow-right-circle"
      //     viewBox="0 0 16 16"
      //   >
      //     <path
      //       fill-rule="evenodd"
      //       d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
      //     />
      //   </svg>
      // ),
    },
  ];

  const dropDownDataSort = [
    {
      value: 1,
      text: "New",
      // icon: (
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="16"
      //     height="16"
      //     fill="currentColor"
      //     class="bi bi-arrow-up-circle"
      //     viewBox="0 0 16 16"
      //   >
      //     <path
      //       fill-rule="evenodd"
      //       d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
      //     />
      //   </svg>
      // ),
    },
    {
      value: 2,
      text: "Old",
      // icon: (
      //   <svg
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="16"
      //     height="16"
      //     fill="currentColor"
      //     class="bi bi-arrow-down-circle"
      //     viewBox="0 0 16 16"
      //   >
      //     <path
      //       fill-rule="evenodd"
      //       d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
      //     />
      //   </svg>
      // ),
    },
  ];
  // handle custom filter
  const filterOptionGroup = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const filterOptionSort = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  useEffect(() => {
    // Handle item removal when onTouchEnd is called
    if (onTouchEnd) {
      const handleEnd = (id) => {
        setKitchenList((prevList) => {
          const updatedList = prevList.filter((item) => item.id !== id);
          return updatedList;
        });
      };
      onTouchEnd(handleEnd);
    }
  }, [onTouchEnd]);

  const handleEnd = (id) => {
    let findIndex = kitchenList.findIndex((e) => e.id === id);
    console.log("findIndex", findIndex);
    kitchenList.splice(findIndex, 1);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="flex mx-8 items-center  py-3 bg-Light mt-2 rounded p-3 gap-8 justify-between flex-wrap">
        <div className="flex gap-4">
          <button
            className="btn bg-blue-500 border-0 text-Light hover:bg-blue-500 w-64 uppercase"
            onClick={() => {
              if (currentOrder === "Online") {
                setCurrentOrder("POS");
                navigate("/kitchen/online");
              } else {
                setCurrentOrder("Online");
                navigate("/kitchen/pos");
              }
            }}
          >
            {currentOrder === "Online" && "Online Orders"}

            {currentOrder === "POS" && "POS Orders"}
          </button>

          {/* {currentOrder === "POS" && (
            <button
              className="btn bg-blue-500 border-0 text-Light hover:bg-blue-500 w-64 uppercase"
              onClick={() => setCurrentOrder("Online")}
            >
              POS Orders
            </button>
          )} */}

          <button className="btn bg-Pink border-0 text-Light hover:bg-Pink w-64 uppercase">
            refresh
          </button>
        </div>

        <Select
          className="w-[20%]"
          styles={{
            "&.css-13cymwt-control": {
              minHeight: "46px",
            },
          }}
          placeholder="Filter by group.."
          isClearable={true}
          value={selectedOption}
          options={dropDownData}
          onChange={handleChange}
          getOptionLabel={(e) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
          filterOption={filterOptionGroup}
        />

        <Select
          className="w-[20%] py-2"
          placeholder="Sort by.."
          isClearable={true}
          value={selectedOptionSort}
          options={dropDownDataSort}
          onChange={handleChangeSort}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center" }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
          filterOption={filterOptionSort}
        />

        {/* <Dropdown data={dropDownData} placeHolder={"Hello"} /> */}
        <div className="relative h-auto w-[20%] border border-1 border-Secondary">
          <input
            type="text"
            className="h-full w-[100%] focus:outline-none px-3 py-2"
          />
          <SearchIcon
            className="absolute right-0 top-0 bg-Pink text-Light p-2 cursor-pointer"
            sx={{ fontSize: "41px" }}
          />
        </div>
      </div>
      <div className="kitchenTables mx-8 py-3 bg-Light my-2 p-2 rounded">
        <div className="p-2 bg-CurrentOrder rounded-xl grid-cols-3 row-span-3 h-[84vh]">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <ShoppingBagIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[80%] overflow-y-auto">
            {kitchenList.map((e) => (
              <div
                key={e?.id}
                className="flex justify-between select-none cursor-pointer"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={() => handleEnd(e?.id)}
              >
                <p>{e?.name}</p>
                <p>x {e?.count}</p>
              </div>
            ))}

            {/* <div className="flex justify-between select-none"  onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <p>Crispy Fried chicken</p>
            <p>x 6</p>
          </div>
          <div className="flex justify-between select-none">
            <p>Idly</p>
            <p>x 6</p>
          </div>
          <div className="flex justify-between select-none">
            <p>Dosa</p>
            <p>x 6</p>
          </div>
          <div className="flex justify-between select-none">
            <p>Popcorn Chicken</p>
            <p>x 6</p>
          </div>
          <div className="flex justify-between select-none">
            <p>Chicken thanthoori</p>
            <p>x 6</p>
          </div>
          <div className="flex justify-between select-none">
            <p>Paneer</p>
            <p>x 6</p>
          </div>
          <div className="flex justify-between select-none">
            <p>Chilli chicken</p>
            <p>x 6</p>
          </div>
          <div className="flex justify-between select-none">
            <p>Egg Fried Rice</p>
            <p>x 6</p>
          </div> */}
          </div>
          <div className="mt-2">
            <button className="btn min-h-max h-[40px] my-3 rounded-xl w-full bg-Pink text-Light font-normal border-0 hover:bg-Pink">
              Cancel Order
            </button>
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-[#0c8d0c] text-Light font-normal border-0 hover:bg-green-700">
              Ready
            </button>
          </div>
        </div>
        <div className="p-2 bg-ReadyOrder rounded-xl">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <ShoppingBagIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[130px] overflow-y-auto">
            <div className="flex justify-between">
              <p>Crispy Fried chicken</p>
              <p>
                <CheckCircleIcon className="text-DarkGreen" />
              </p>
            </div>
            <div className="flex justify-between">
              <p>Idly</p>
              <CheckCircleIcon className="text-DarkGreen" />
            </div>
            <div className="flex justify-between">
              <p>Dosa</p>
              <CheckCircleIcon className="text-DarkGreen" />
            </div>
            <div className="flex justify-between">
              <p>Popcorn Chicken</p>
              <CheckCircleIcon className="text-DarkGreen" />
            </div>
            <div className="flex justify-between">
              <p>Chicken thanthoori</p>
              <CheckCircleIcon className="text-DarkGreen" />
            </div>
          </div>
          <div className="mt-3">
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-[#0c8d0c] text-Light font-normal border-0 hover:bg-green-700">
              Ready
            </button>
          </div>
        </div>
        <div className="p-2 bg-ReadyOrder rounded-xl">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <ShoppingBagIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[130px] overflow-y-auto">
            <div className="flex justify-between">
              <p>Crispy Fried chicken</p>
              <p>
                <CheckCircleIcon className="text-DarkGreen" />
              </p>
            </div>
            <div className="flex justify-between">
              <p>Idly</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Dosa</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Popcorn Chicken</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Chicken thanthoori</p>
              <p>x 6</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-[#0c8d0c] text-Light font-normal border-0 hover:bg-green-700">
              Ready
            </button>
          </div>
        </div>
        <div className="p-2 bg-ReadyOrder rounded-xl">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <ShoppingBagIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[130px] overflow-y-auto">
            <div className="flex justify-between">
              <p>Crispy Fried chicken</p>
              <p>
                <CheckCircleIcon className="text-DarkGreen" />
              </p>
            </div>
            <div className="flex justify-between">
              <p>Idly</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Dosa</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Popcorn Chicken</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Chicken thanthoori</p>
              <p>x 6</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-[#0c8d0c] text-Light font-normal border-0 hover:bg-green-700">
              Ready
            </button>
          </div>
        </div>
        <div className="p-2 bg-ReadyOrder rounded-xl">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <ShoppingBagIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[130px] overflow-y-auto">
            <div className="flex justify-between">
              <p>Crispy Fried chicken</p>
              <p>
                <CheckCircleIcon className="text-DarkGreen" />
              </p>
            </div>
            <div className="flex justify-between">
              <p>Idly</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Dosa</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Popcorn Chicken</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Chicken thanthoori</p>
              <p>x 6</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-[#0c8d0c] text-Light font-normal border-0 hover:bg-green-700">
              Ready
            </button>
          </div>
        </div>
        <div className="p-2 bg-ReadyOrder rounded-xl">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <ShoppingBagIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[130px] overflow-y-auto">
            <div className="flex justify-between">
              <p>Crispy Fried chicken</p>
              <p>
                <CheckCircleIcon className="text-DarkGreen" />
              </p>
            </div>
            <div className="flex justify-between">
              <p>Idly</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Dosa</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Popcorn Chicken</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Chicken thanthoori</p>
              <p>x 6</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-[#0c8d0c] text-Light font-normal border-0 hover:bg-green-700">
              Ready
            </button>
          </div>
        </div>
        <div className="p-2 bg-StartOrder rounded-xl">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <RestaurantIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[130px] overflow-y-auto">
            <div className="flex justify-between">
              <p>Crispy Fried chicken</p>
              <p>
                <CheckCircleIcon className="text-DarkGreen" />
              </p>
            </div>
            <div className="flex justify-between">
              <p>Idly</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Dosa</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Popcorn Chicken</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Chicken thanthoori</p>
              <p>x 6</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-SkyBlue text-Light font-normal border-0 hover:bg-SkyBlue">
              Start Order
            </button>
          </div>
        </div>
        <div className="p-2 bg-StartOrder rounded-xl">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <RestaurantIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[130px] overflow-y-auto">
            <div className="flex justify-between">
              <p className="text-Pink my-anchor-element">
                Crispy Fried chicken
              </p>
              <Tooltip style={{background:"#454859"}} className="bg-Secondary" anchorSelect=".my-anchor-element" place="top">
                Less spicy
              </Tooltip>
              <p>
                <CheckCircleIcon className="text-DarkGreen" />
              </p>
            </div>
            <div className="flex justify-between">
              <p>Idly</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Dosa</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Popcorn Chicken</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Chicken thanthoori</p>
              <p>x 6</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-SkyBlue text-Light font-normal border-0 hover:bg-DarkBlue">
              Start Order
            </button>
          </div>
        </div>
        <div className="p-2 bg-StartOrder rounded-xl">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <RestaurantIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[130px] overflow-y-auto">
            <div className="flex justify-between">
              <p>Crispy Fried chicken</p>
              <p>
                <CheckCircleIcon className="text-DarkGreen" />
              </p>
            </div>
            <div className="flex justify-between">
              <p>Idly</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Dosa</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Popcorn Chicken</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Chicken thanthoori</p>
              <p>x 6</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-SkyBlue text-Light font-normal border-0 hover:bg-DarkBlue">
              Start Order
            </button>
          </div>
        </div>
        <div className="p-2 bg-StartOrder rounded-xl">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <RestaurantIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[130px] overflow-y-auto">
            <div className="flex justify-between">
              <p>Crispy Fried chicken</p>
              <p>
                <CheckCircleIcon className="text-DarkGreen" />
              </p>
            </div>
            <div className="flex justify-between">
              <p>Idly</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Dosa</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Popcorn Chicken</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Chicken thanthoori</p>
              <p>x 6</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-SkyBlue text-Light font-normal border-0 hover:bg-DarkBlue">
              Start Order
            </button>
          </div>
        </div>
        <div className="p-2 bg-StartOrder rounded-xl">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <RestaurantIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[130px] overflow-y-auto">
            <div className="flex justify-between">
              <p className="text-Pink">Crispy Fried chicken</p>
              <p>
                <CheckCircleIcon className="text-DarkGreen" />
              </p>
            </div>
            <div className="flex justify-between">
              <p>Idly</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Dosa</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Popcorn Chicken</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Chicken thanthoori</p>
              <p>x 6</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-SkyBlue text-Light font-normal border-0 hover:bg-DarkBlue">
              Start Order
            </button>
          </div>
        </div>
        <div className="p-2 bg-StartOrder rounded-xl">
          <div className="flex justify-between  items-center">
            <p className="p-2 text-sm bg-Light rounded">012</p>
            <h4>10.45</h4>
            <RestaurantIcon />
            <OpenInFullIcon className="cursor-pointer" />
            {/* <CloseIcon /> */}
          </div>
          <div className="p-2 bg-Light rounded-md mt-2 text-sm h-[130px] overflow-y-auto">
            <div className="flex justify-between">
              <p>Crispy Fried chicken</p>
              <p>
                <CheckCircleIcon className="text-DarkGreen" />
              </p>
            </div>
            <div className="flex justify-between">
              <p>Idly</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Dosa</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Popcorn Chicken</p>
              <p>x 6</p>
            </div>
            <div className="flex justify-between">
              <p>Chicken thanthoori</p>
              <p>x 6</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="btn min-h-max h-[40px] rounded-xl w-full bg-SkyBlue text-Light font-normal border-0 hover:bg-DarkBlue">
              Start Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kitchen;
