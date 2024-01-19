import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import CustomModal from "../components/Common/QuantityModal";
import { Route, Routes } from "react-router-dom";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ItemList from "./POS/ItemList";
import useLongPress from "../components/events/LongPressEvent";
import { Categories } from "../utills/data";
import TagModal from "../components/modals/DynamicModal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import toast, { Toaster } from "react-hot-toast";
import AddIcon from "@mui/icons-material/Add";
import Dropdown from "../components/Common/Dropdown";
import TagModal2 from "../components/modals/modalComponents/TagModal2";
// import Dropdown from "../Common/Dropdown";

function Pos() {
  const [activeItem, setActiveItem] = useState("Parcel");
  const [activeCategory, setActiveCategory] = useState("Chickens");
  const [selectedWaiters, setSelectedWaiters] = useState(null);

  const [open, setOpen] = useState(false);
  const [tagOpen, setTagOpen] = useState(false);
  const [waiterDropdown, setWaiterDropdown] = useState(false);


  // const [tagOpen, setTagOpen] = useState(false);
  // const [addNote, setAddNote] = useState(false);

  // const handleInputClose = () => {
  //   setTagOpen(false);
  //   setAddNote(false);
  // };

  // const [selectedNotes, setSelectedNotes] = useState([]);

  // const toggleNote = (note) => {
  //   if (selectedNotes.includes(note)) {
  //     // Note is already selected, so remove it
  //     setSelectedNotes(
  //       selectedNotes.filter((selectedNote) => selectedNote !== note)
  //     );
  //   } else {
  //     // Note is not selected, so add it
  //     setSelectedNotes([...selectedNotes, note]);
  //   }
  // };

  const itemSelectedList = new Array(15).fill(null);

  const handleItemClick = (item) => {
    setSelectedWaiters(item);
    setWaiterDropdown(false);
  };

  const onLongPress = useLongPress();

  return (
    <div className="flex w-full pt-1 gap-2 px-8">
      <div className="w-[74.2%] mx-auto">
        <div className="flex justify-between gap-5">
          <div className="rounded-md  p-3 mt-4 w-[20%] max-h-[695px]  bg-Light">
            <h3 className="uppercase text-center font-semibold pb-4 text-2xl tracking-widest">
              dine in
            </h3>
            <ul className="overflow-auto flex flex-col h-[92%] px-[10px] ">
              {Categories.map((e, index) => (
                <li
                  className={`bg-Secondary text-Primary uppercase font-bold cursor-pointer text-sm  text-center shadow-md relative py-4 px-8  mb-2 rounded-md ${
                    activeCategory === e?.name
                      ? "border-Primary  border-b-4 shadow-md"
                      : ""
                  }`}
                  key={index}
                  onClick={() => setActiveCategory(e?.name)}
                >
                  <span className="relative">{e?.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md  p-3 mt-4 w-full bg-Light max-h-[695px] ">
            <div className="relative w-1/2 float-right mb-3">
              <input
                type="text"
                placeholder="Search Item"
                className="text-Primary w-[93%] bg-Snow rounded float-right  text-sm px-3 py-2  focus: outline-none"
              />
              <SearchIcon className="absolute right-[3%] top-[20%] cursor-pointer" />
            </div>
            <div className="w-full productList pt-3 gap-8 content-start overflow-auto h-[91%]">
              <Routes>
                <Route path="/:id" element={<ItemList setOpen={setOpen} />} />
              </Routes>
              {/* {productList.map((_, index) => (
                <div
                  key={index}
                  className={`card bg-base-100 relative cursor-pointer rounded-md m-1 ${
                    index === 1 ? "border-[#71C9CE] border-b-4" : ""
                  }${index === 2 ? " border-[#FF8F8F] border-b-4" : ""}${
                    index === 3 ? " border-[#ffa500] border-b-4" : ""
                  } ${
                    index !== 2 && index !== 3
                      ? " border-[#71C9CE] border-b-4"
                      : ""
                  }`}
                  onClick={() => setOpen(true)}
                >
                  <div className="card-body items-center text-center">
                    <h4 className="text-Primary font-semibold text-xs">
                      Chicken
                    </h4>
                  </div>
                </div>
              ))} */}
            </div>
            <CustomModal open={open} onClose={() => setOpen(false)} />
          </div>
        </div>
        <div className="bg-Light mt-4  rounded-lg flex items-center justify-center gap-14 h-[97px] text-DarkText">
          <h4 className="uppercase text-sm font-bold cursor-pointer tracking-wide">
            reports
          </h4>
          <h4 className="uppercase text-sm font-bold cursor-pointer tracking-wide">
            sales summary
          </h4>
          <h4 className="uppercase text-sm font-bold cursor-pointer tracking-wide">
            stock details
          </h4>
          <h4 className="uppercase text-sm font-bold cursor-pointer tracking-wide">
            add items
          </h4>
          <h4 className="uppercase text-sm font-bold cursor-pointer tracking-wide">
            table management
          </h4>
          <h4 className="uppercase text-sm font-bold cursor-pointer tracking-wide">
            analytics
          </h4>
          <h4 className="uppercase text-sm font-bold cursor-pointer tracking-wide">
            kitchen display
          </h4>
          {/* <ul className="menu menu-vertical w-full justify-between lg:menu-horizontal bg-SemiLight rounded-lg ">
            <li onClick={() => setActiveItem("Table")} className={`px-2 `}>
              <a
                className={`${
                  activeItem === "Table"
                    ? "bg-Secondary text-Light hover:bg-Secondary"
                    : ""
                }`}
              >
                Table
              </a>
            </li>
            <li onClick={() => setActiveItem("Home")}>
              <a
                className={`${
                  activeItem === "Home"
                    ? "bg-Secondary text-Light hover:bg-Secondary"
                    : ""
                }`}
              >
                Home
              </a>
            </li>
            <li onClick={() => setActiveItem("Parcel")}>
              <a
                className={`${
                  activeItem === "Parcel"
                    ? "bg-Secondary text-Light hover:bg-Secondary"
                    : ""
                }`}
              >
                Parcel
              </a>
            </li>
            <li onClick={() => setActiveItem("Option")}>
              <a
                className={`${
                  activeItem === "Option"
                    ? "bg-Secondary text-Light hover:bg-Secondary"
                    : ""
                }`}
              >
                Option
              </a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="w-[24.2%] pt-4 mx-auto">
        <div className="bg-Light p-3 h-[100%] rounded-lg">
          <ul className="menu menu-vertical w-full justify-between lg:menu-horizontal bg-Secondary rounded-lg ">
            <li onClick={() => setActiveItem("Table")} className={``}>
              <a
                className={`${
                  activeItem === "Table"
                    ? "bg-Primary text-Light hover:bg-Primary"
                    : ""
                }`}
              >
                Table
              </a>
            </li>
            <li onClick={() => setActiveItem("Home")}>
              <a
                className={`${
                  activeItem === "Home"
                    ? "bg-Primary text-Light hover:bg-Primary"
                    : ""
                }`}
              >
                Home
              </a>
            </li>
            <li onClick={() => setActiveItem("Parcel")}>
              <a
                className={`${
                  activeItem === "Parcel"
                    ? "bg-Primary text-Light hover:bg-Primary"
                    : ""
                }`}
              >
                Parcel
              </a>
            </li>
            <li onClick={() => setActiveItem("Option")}>
              <a
                className={`${
                  activeItem === "Option"
                    ? "bg-Primary text-Light hover:bg-Primary"
                    : ""
                }`}
              >
                Option
              </a>
            </li>
          </ul>
          {activeItem === "Table" && (
            <div className="navbar bg-Secondary rounded-lg mt-3 flex justify-between py-0 px-5 min-h-max">
              <h4 className="text-sm flex items-center">
                TableNo.{" "}
                <span className=" px-2 py-1 text-xs ml-2">
                  <input
                    className="bg-white w-5 text-center focus:outline-none "
                    type="text"
                  />
                </span>
              </h4>
              <h4 className="text-sm flex items-center ">
                Persons
                <span className=" px-2 py-1 text-xs ml-2">
                  <input
                    className="bg-white w-5 text-center focus:outline-none "
                    type="text"
                  />
                </span>
              </h4>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn font-medium btn-ghost rounded-btn px-0 hover:bg-transparent min-w-[88px]"
                  onClick={() => setWaiterDropdown((prev) => !prev)}
                >
                  {selectedWaiters === null ? "Waiters" : selectedWaiters}
                  <ExpandMoreIcon />
                </div>
                {waiterDropdown && (
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                  >
                    <li onClick={() => handleItemClick("Item 1")}>
                      <a>Item 1</a>
                    </li>
                    <li onClick={() => handleItemClick("Item 2")}>
                      <a>Item 2</a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          )}

          {/* <div className="flex justify-between items-center mt-4 px-2 rounded-sm bg-Secondary">
            <h4 className="text-sm flex items-center">
              TableNo.{" "}
              <span className=" px-2 py-1 text-xs ml-2">
                <input
                  className="bg-white w-5 text-center focus:outline-none "
                  type="text"
                />
              </span>
            </h4>
            <h4 className="text-sm flex items-center ">
              Persons
              <span className=" px-2 py-1 text-xs ml-2">
                <input
                  className="bg-white w-5 text-center focus:outline-none "
                  type="text"
                />
              </span>
            </h4>
            <select
              name="cars"
              id="cars"
              className="border border-1  text-sm px-3 py-1 max-w-[150px] w-full bg-Secondary focus-visible:outline-none"
            >
              <option className="border border-0" value="volvo">
                Volvo
              </option>
              <option className="border border-0" value="saab">
                Saab
              </option>
              <option className="border border-0" value="opel">
                Opel
              </option>
              <option className="border border-0" value="audi">
                Audi
              </option>
            </select>
          </div> */}
          <div className="h-[280px] overflow-auto  mt-3 bg-Light rounded-lg">
            <table className="billingTable bg-Secondary">
              <thead className="sticky top-0">
                <tr className="text-sm text-Primary bg-Secondary">
                  <th className="text-center text-xs font-extrabold">Items</th>
                  <th className="font-extrabold">Qty</th>
                  <th className="text-end font-extrabold">Price</th>
                  <th className="text-end font-extrabold">Total</th>
                </tr>
              </thead>
              <tbody className="overflow-y-scroll h-[80px] font-bold">
                {itemSelectedList.map((_, index) => (
                  <tr
                    key={index}
                    className="cursor-pointer"
                    {...onLongPress(() => setTagOpen(true))}
                  >
                    <td className="capitalize text-center">
                      Alfreds Futterkiste
                    </td>
                    <td className="text-center">4</td>
                    <td className="text-end">190.00</td>
                    <td className="text-end">190.00</td>
                  </tr>
                ))}

              </tbody>
            </table>
            <TagModal2 tagOpen={tagOpen} setTagOpen={setTagOpen} />
            {/* <TagModal open={tagOpen} onClose={handleInputClose}>
              <div className="flex justify-between  items-center w-full">
                <p className="w-[40%] text-md">Chicken Mansooriyan</p>
        
                <button
                  className="btn min-h-max h-8 w-[85px] bg-Primary text-Light  transition ease-in-out delay-300 font-medium  text-xs hover:bg-Primary flex"
                  onClick={() => setAddNote(!addNote)}
                >
                  Add
                  <AddIcon className="" sx={{ fontSize: "18px" }} />
                </button>
              </div>
              {addNote && (
                <input
                  type="text"
                  className="bg-Secondary px-2 py-2 text-sm w-full my-4 rounded  transition ease-in-out duration-700  border-0 focus:outline-none"
                  placeholder="Add notes here..."
                />
              )}

              <div className="flex items-center flex-wrap gap-2 mt-2">
                <p
                  className={`text-[12px] border border-1 border-Secondary py-1 px-2 rounded-xl cursor-pointer select-none ${
                    selectedNotes.includes("Less spicy")
                      ? "bg-Secondary text-Primary"
                      : ""
                  }`}
                  onClick={() => toggleNote("Less spicy")}
                >
                  Less spicy
                </p>
                <p
                  className={`text-[12px] border border-1 border-Secondary py-1 px-2 rounded-xl cursor-pointer select-none ${
                    selectedNotes.includes("Spicy")
                      ? "bg-Secondary text-Primary"
                      : ""
                  }`}
                  onClick={() => toggleNote("Spicy")}
                >
                  Spicy
                </p>
                <p
                  className={`text-[12px] border border-1 border-Secondary py-1 px-2 rounded-xl cursor-pointer select-none ${
                    selectedNotes.includes("No salt")
                      ? "bg-Secondary text-Primary"
                      : ""
                  }`}
                  onClick={() => toggleNote("No salt")}
                >
                  No salt
                </p>
                <p
                  className={`text-[12px] border border-1 border-Secondary py-1 px-2 rounded-xl cursor-pointer select-none ${
                    selectedNotes.includes("Extra sweet")
                      ? "bg-Secondary text-Primary"
                      : ""
                  }`}
                  onClick={() => toggleNote("Extra sweet")}
                >
                  Extra sweet
                </p>
                <p
                  className={`text-[12px] border border-1 border-Secondary py-1 px-2 rounded-xl cursor-pointer select-none ${
                    selectedNotes.includes("Oilless")
                      ? "bg-Secondary text-Primary"
                      : ""
                  }`}
                  onClick={() => toggleNote("Oilless")}
                >
                  Oilless
                </p>
              </div>

              <div className="pt-6 flex justify-end gap-2">
                <button
                  onClick={() => {
                    toast.success("Updated Successfully");
                    handleInputClose();
                  }}
                  className="btn min-h-max h-[30px]  bg-Primary text-Light font-medium w-[90px] text-xs hover:bg-Primary"
                >
                  Save
                </button>

                <button
                  className="btn  min-h-max h-[30px]  text-xs"
                  onClick={handleInputClose}
                >
                  Cancel
                </button>
              </div>
            </TagModal> */}
          </div>

          <div className="bg-Secondary mt-3  rounded-lg">
            <table className="billingTable2 bg-Secondary">
              <tbody className="bg-Secondary text-DarkText">
                <tr className="">
                  <td className="font-bold w-[48%]">Sub Total</td>
                  <td className=""></td>
                  <td className="">13</td>
                  <td className="flex justify-evenly items-center">
                    <h4 className="w-[16%] text-center font-semibold"></h4>
                  </td>
                  <td className="text-end">
                    {" "}
                    <h4 className="text-end font-semibold">1400.00</h4>
                  </td>
                </tr>
                <tr className="">
                  <td className="font-bold">Tax(6%)</td>
                  <td className=""></td>
                  <td className=""></td>
                  <td className="flex justify-evenly items-center"></td>
                  <td className="text-end">
                    {" "}
                    <h4 className="text-end font-semibold">84.00</h4>
                  </td>
                </tr>
                <tr className="">
                  <td className="font-bold">VAT@5</td>
                  <td className=""></td>
                  <td className=""></td>
                  <td className="flex justify-evenly items-center"></td>
                  <td className="text-end">
                    {" "}
                    <h4 className="text-end font-semibold">89.00</h4>
                  </td>
                </tr>
                <tr className="">
                  <td className="font-bold">SGST</td>
                  <td className=""></td>
                  <td className=""></td>
                  <td className="flex justify-evenly items-center"></td>
                  <td className="text-end">
                    {" "}
                    <h4 className="text-end font-semibold">40.00</h4>
                  </td>
                </tr>

                <tr className="">
                  <td className="font-bold">Total</td>
                  <td className=""></td>
                  <td className=""></td>
                  <td className="flex justify-evenly items-center"></td>
                  <td className="text-end">
                    {" "}
                    <h4 className="text-end font-semibold">1484.00</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 text-sm  font-semibold">
            <div className="flex justify-between items-center my-2 bg-Secondary p-3 rounded-lg">
              <h4>Total</h4>
              <h4>Un-Paid</h4>
              <h4>1400.00</h4>
            </div>
            <div className="flex justify-between items-center bg-Secondary text-sm w-full p-3 mt-3 rounded-lg">
              {/* <div className="flex items-center justify-start gap-1 w-[10%] ">
                <input className="accent-Primary" type="checkbox" />
                <label htmlFor="">Cash</label>
              </div>
              <div className="flex items-center justify-center gap-1">
                <input className="accent-Primary" type="checkbox" />
                <label htmlFor="">Card</label>
              </div>
              <div className="flex items-center justify-end gap-1">
                <input className="accent-Primary" type="checkbox" />
                <label htmlFor="">Gpay</label>
              </div> */}
              <label htmlFor="Cash" className="select-none">
                <div className="flex items-center gap-2">
                  <input
                    className="accent-Primary focus: outline-w-0 relative;"
                    id="Cash"
                    name="payment"
                    type="radio"
                  />
                  Cash
                </div>
              </label>
              <label htmlFor="Card" className="select-none">
                <div className="flex items-center gap-2">
                  <input
                    className="accent-Primary"
                    id="Card"
                    name="payment"
                    type="radio"
                  />
                  Card
                </div>
              </label>
              <label htmlFor="GPay" className="select-none">
                <div className="flex items-center gap-2">
                  <input
                    className="accent-Primary"
                    id="GPay"
                    name="payment"
                    type="radio"
                  />
                  GPay
                </div>
              </label>
            </div>
          </div>
          <div className="flex items-center gap-1 pt-3">
            {/* <input className="accent-Primary" type="checkbox" /> */}
            <label
              htmlFor="Print"
              className="text-xs font-semibold select-none"
            >
              <div className="flex items-center gap-1">
                <input className="accent-Primary" id="Print" type="checkbox" />
                Auto Print
              </div>
            </label>
            {/* <label htmlFor="Auto Print" className="text-xs font-semibold">
              Auto Print
            </label> */}
          </div>
          <div className="flex justify-between pt-5">
            <button
              onClick={() => toast.success("Order Created Successfully")}
              className="rounded-lg btn text-Light bg-Primary text-xs px-2  w-[100px] h-[40px] min-h-max hover:bg-Primary"
            >
              Create Order
            </button>
            <button className="rounded-lg btn text-Primary bg-Light text-xs px-2  w-[100px] h-[40px] min-h-max hover:bg-Light">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pos;
