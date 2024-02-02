import React, { useState, useEffect } from "react";
import Select from "react-select";
function ReceipeBuilder() {
  const [selectedIngredients, setSelectedIngredients] = useState(null);


  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedIngredients(e);
  };

  // handle custom filter
  const filterOptionIngredients = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const Ingredients = [
    {
      value: 1,
      text: "Tomato",
    },
    {
      value: 2,
      text: "Bun",
    },
    {
      value: 3,
      text: "Onion",
    },
    {
      value: 4,
      text: "Lettuce",
    },
    {
      value: 5,
      text: "Chicken",
    },
  ];

  return (
    <div className="bg-Light py-3 px-5 my-2 my-element">
      <h4 className="text-Primary text-xl capitalize font-bold">
        Add new Receipe
      </h4>
      <div className="mb-2 mt-4 bg-Light border border-1 border-Secondaryp py-5 px-5 w-[60%]">
        <div className="pb-2">
          <label htmlFor="food group" className="">
            Name
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 px-2 my-2 rounded border border-1 border-Secondary focus:outline-none"
            placeholder="e.g Spicy chicken Curry"
          />
        </div>
        <div className="pb-2">
          <label htmlFor="food group" className="">
            Instructions
          </label>
          <br />
          <textarea
            className="w-full py-3 px-2 my-2 rounded border border-1 border-Secondary resize-none focus:outline-none"
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="e.g Spicy chicken Curry"
          ></textarea>
        </div>
        <div className="pb-2">
          <label htmlFor="branch" className="">
            Add Ingredients
          </label>
          <Select
            isMulti
            className="w-[100%] my-2"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
              },
            }}
            placeholder="Please select a branch"
            isClearable={true}
            value={selectedIngredients}
            options={Ingredients}
            onChange={handleChange}
            getOptionLabel={(e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                }}
              >
                {/* {e.icon} */}
                <span style={{ marginLeft: 5 }}>{e.text}</span>
              </div>
            )}
            filterOption={filterOptionIngredients}
          />
        </div>

        {/* <div className="pb-2">
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

        </div> */}
        {/* <div className="pb-2">
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
          
        </div> */}
        {/* <div className="pb-2">
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
        </div> */}
        {/* <div className="pb-2">
          <label htmlFor="Special" className="select-none">
            <div className="flex items-center gap-2">
              <input className="checkbox checkbox-sm accent-Primary relative top-[-1px] left-[2px]" id="Special" type="checkbox" />
              Is Special?
            </div>
          </label>
        </div> */}
        {/* <div className="pb-2">
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
                <span style={{ marginLeft: 5 }}>{e.text}</span>
              </div>
            )}
            filterOption={filterReceipe}
          />
        </div> */}
        {selectedIngredients?.map((e, index) => (
          <div className="pb-2" key={index}>
            <label htmlFor="food group" className="">
              {e?.text} (Qty, gm)
            </label>
            <br />
            <input
              type="text"
              className="w-full py-1.5 px-2 my-2 rounded border border-1 border-Secondary focus:outline-none"
              placeholder="e.g 10"
            />
          </div>
        ))}
        <button className="btn mt-3 bg-Primary text-Light w-40 hover:bg-Primary">
          Save
        </button>
      </div>
    </div>
  );
}

export default ReceipeBuilder;
