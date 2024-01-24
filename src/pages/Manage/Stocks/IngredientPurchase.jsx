import React, { useState } from "react";
import Select from "react-select";

function IngredientPurchase() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionSort, setSelectedOptionSort] = useState(null);
  const [selectedReceipe, setSelectedReceipe] = useState(null);

  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState(null);
  // handle onChange event of the dropdown

  const handleChangeSupplier = (e) => {
    setSelectedSupplier(e);
  };

  const handleChangeIngredients = (e) => {
    setSelectedIngredients(e);
  };

  const handleChangeSort = (e) => {
    setSelectedOptionSort(e);
  };

  // handle onChange event of the dropdown

  // handle custom filter

  const filterOptionIngredients = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  // handle custom filter

  const filterOptionForSupplier = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const filterOptionGroup = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const filterOptionSort = (option, inputValue) => {
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

  const Suppliers = [
    {
      value: 1,
      text: "Jhon",
    },
    {
      value: 2,
      text: "Kennady",
    },
    {
      value: 3,
      text: "Mike",
    },
    {
      value: 4,
      text: "Hesson",
    },
  ];

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
    <div className=" py-3 px-5 my-2 h-auto overflow-y-scroll">
      <h4 className="text-Primary text-xl capitalize font-bold">
        Add New Purchase
      </h4>
      <div className="mb-2 mt-4 bg-Light border border-1 border-Secondary h-auto py-5 px-5 w-[60%]">
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
                  fontSize: "14px",
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
            Supplier
          </label>
          <Select
            className="w-[100%] mt-2"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
              },
            }}
            placeholder="Please select a supplier"
            isClearable={true}
            value={selectedSupplier}
            options={Suppliers}
            onChange={handleChangeSupplier}
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
            filterOption={filterOptionForSupplier}
          />
        </div>
        <div>
          <div className="pb-2">
            <label htmlFor="food group" className="">
              Invoice *
            </label>
            <br />
            <input
              type="text"
              className="w-full py-1.5 px-2 my-2 rounded border border-1 border-Secondary focus:outline-none"
              placeholder="e.g 123"
            />
          </div>

          <div className="pb-2">
            <label htmlFor="food group" className="">
              Purchase Date *
            </label>
            <br />
            <input
              type="date"
              className="w-full py-1.5 px-2 my-2 rounded border border-1 border-Secondary focus:outline-none"
              placeholder="e.g Cash, Bank payment"
            />
          </div>
        </div>
        <div className="pb-2">
          <label htmlFor="food group" className="">
            Description
          </label>
          <br />
          <textarea
            className="w-full py-3 px-2 my-2 rounded border border-1 border-Secondary resize-none focus:outline-none placeholder:text-sm"
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Short Description"
          ></textarea>
        </div>
        <div className="pb-2">
          <label htmlFor="food group" className="">
            Paymeny Type *
          </label>
          <br />
          <input
            type="text"
            className="w-full py-1.5 px-2 my-2 rounded border border-1 border-Secondary focus:outline-none"
            placeholder="e.g Cash, Bank payment"
          />
        </div>
        <div className="pb-2">
          <label htmlFor="branch" className="">
            Add Ingredients
          </label>
          <Select
            isMulti
            className="w-[100%] my-2 customZIndex"
            styles={{
              "&.css-13cymwt-control": {
                minHeight: "46px",
              },
            }}
            placeholder="Please select a items"
            isClearable={true}
            value={selectedIngredients}
            options={Ingredients}
            onChange={handleChangeIngredients}
            getOptionLabel={(e) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  zIndex: 10,
                }}
              >
                {/* {e.icon} */}
                <span style={{ marginLeft: 5 }}>{e.text}</span>
              </div>
            )}
            filterOption={filterOptionIngredients}
          />
        </div>

        {selectedIngredients?.length > 0 && (
          <div className="overflow-x-auto  bg-Light my-3 rounded">
            <table className="table purchaseIngredientsTable table-xs table-pin-rows">
              <thead className="z-10 bg-Primary">
                <tr>
                  <th className="bg-Primary">Name</th>
                  <th>Stock</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="overflow-hidden z-0">
                {selectedIngredients?.map((e, index) => (
                  <tr key={index}>
                    <td>{e?.text}</td>

                    <td>0</td>
                    <td>
                      <input
                        type="number"
                        placeholder="Qty"
                        className="m-1 px-2 py-2 w-[90%]"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="Price in usd"
                        className="m-1 px-2 py-2 w-[90%]"
                      />
                    </td>
                    <td>Rs.0.00</td>
                  </tr>
                ))}
                <tr>
                  <td></td>

                  <td></td>
                  <td></td>
                  <td className="font-semibold text-sm">Total Bill</td>
                  <td className="font-semibold text-sm">Rs.0.00</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="font-semibold text-sm">Paid</td>
                  <td>
                    <input
                      type="number"
                      placeholder="In usd"
                      className="m-1 px-2 py-2 w-[90%]"
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="font-semibold text-sm">Due</td>
                  <td className="font-semibold text-sm">Rs.0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <button className="btn mt-3 bg-Primary text-Light w-40 hover:bg-Primary">
          Save
        </button>
      </div>
    </div>
  );
}

export default IngredientPurchase;
