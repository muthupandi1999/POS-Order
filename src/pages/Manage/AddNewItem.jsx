import React, { useState } from "react";
import Select from "react-select";

function AddNewItem() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionSort, setSelectedOptionSort] = useState(null);
  const [selectedReceipe, setSelectedReceipe] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
  };

  const handleChangeSort = (e) => {
    setSelectedOptionSort(e);
  };

  const handleReceipe = (e) => {
    setSelectedReceipe(e)
  }

  // handle custom filter
  const filterOptionGroup = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const filterOptionSort = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const filterReceipe = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const foodGroups = [
    {
      value: 1,
      text: "All",
    },
    {
      value: 2,
      text: "Pizza",
    },
    {
      value: 3,
      text: "Burgers",
    },
    {
      value: 4,
      text: "Sandwich",
    },
    {
      value: 5,
      text: "Fried Chicken",
    },
  ];
  const branches = [
    {
      value: 1,
      text: "Madurai",
    },
    {
      value: 2,
      text: "Chennai",
    },
    {
      value: 3,
      text: "Coimbatore",
    },
    {
      value: 4,
      text: "Trichy",
    },
  ];
  const Receipes = [
    {
      value: 1,
      text: "Chicken Pizza",
    },
    {
      value: 2,
      text: "Egg Pizza",
    },
    {
      value: 3,
      text: "Veg Pizza",
    },

  ];
  return (
    <div className="bg-Light py-3 px-5 my-2">
      <h4 className="text-Primary text-xl capitalize font-bold">
        Add new item
      </h4>
      <div className="mb-2 mt-4 bg-Light border border-1 border-Secondaryp py-5 px-5 w-[60%]">
        <div className="pb-2">
          <label htmlFor="branch" className="">
            Branch
          </label>
          <Select
            className="w-[100%] my-2"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
              },
            }}
            placeholder="Please select a branch"
            isClearable={true}
            value={selectedOptionSort}
            options={branches}
            onChange={handleChangeSort}
            getOptionLabel={(e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize:"14px"
                }}
              >
                {/* {e.icon} */}
                <span style={{ marginLeft: 5 }}>{e.text}</span>
              </div>
            )}
            filterOption={filterOptionSort}
          />
        </div>
        <div className="pb-2">
          <label htmlFor="food group" className="">
            Food Group
          </label>
          <Select
            className="w-[100%] mt-2"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
              },
            }}
            placeholder="Please select a food group"
            isClearable={true}
            value={selectedOption}
            options={foodGroups}
            onChange={handleChange}
            getOptionLabel={(e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize:"14px"
                }}
              >
                {/* {e.icon} */}
                <span style={{ marginLeft: 5 }}>{e.text}</span>
              </div>
            )}
            filterOption={filterOptionGroup}
          />
        </div>
        <div className="pb-2">
          <label htmlFor="food group" className="">
            Name
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 px-2 my-2 rounded border border-1 border-Secondary focus:outline-none"
            placeholder="e.g Spicy chicken burger"
          />
        </div>
        <div className="pb-2">
          <label htmlFor="Properties" className="select-none">
            <div className="flex items-center gap-2">
              <input
                className="checkbox checkbox-sm accent-Primary relative top-[-1px] left-[2px]"
                id="Properties"
                type="checkbox"
              />
              Has Properties?
            </div>
          </label>
          {/* <input type="checkbox" className="accent-Primary mr-3" />
            <label htmlFor="HasProperties">Has Properties?</label> */}
        </div>
        <div className="pb-2">
          <label htmlFor="Variations" className="select-none">
            <div className="flex items-center gap-2">
              <input
                className="checkbox checkbox-sm accent-Primary relative top-[-1px] left-[2px]"
                id="Variations"
                type="checkbox"
              />
              Has Variations?
            </div>
          </label>
          {/* <input type="checkbox" className="accent-Primary mr-3" />
            <label htmlFor="HasProperties">Has Variations?</label> */}
        </div>
        <div className="pb-2">
          <label htmlFor="food group" className="">
            Price
          </label>
          <br />
          <input
            type="number"
            step={"0.01"}
            className="w-full py-1.5 px-2 my-2 rounded border border-1 border-Secondary focus:outline-none"
            placeholder="e.g Spicy chicken burger"
          />
        </div>
        <div className="pb-2">
          <label htmlFor="Special" className="select-none">
            <div className="flex items-center gap-2">
              <input className="checkbox checkbox-sm accent-Primary relative top-[-1px] left-[2px]" id="Special" type="checkbox" />
              Is Special?
            </div>
          </label>
        </div>
        <div className="pb-2">
          <label htmlFor="food group" className="">
            Select Receipe
          </label>
          <Select
            className="w-[100%] mt-2"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
              },
            }}
            placeholder="Please select a receipe"
            isClearable={true}
            value={selectedReceipe}
            options={Receipes}
            onChange={handleReceipe}
            getOptionLabel={(e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize:"14px"
                }}
              >
                {/* {e.icon} */}
                <span style={{ marginLeft: 5 }}>{e.text}</span>
              </div>
            )}
            filterOption={filterReceipe}
          />
        </div>
        <button className="btn mt-3 bg-Primary text-Light w-40 hover:bg-Primary">Save</button>
      </div>
    </div>
  );
}

export default AddNewItem;
