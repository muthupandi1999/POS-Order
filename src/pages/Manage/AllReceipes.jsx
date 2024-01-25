import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/modals/modalComponents/DeleteModal";

function AllReceipes() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const showCount = 5;

  const receipeData = [
    {
      id: 1,
      name: "Classic Chicken Pizza",
      instruction:
        "Topped with cheese, chicken, onion, capsicum, oregano & garlic",
    },
    {
      id: 2,
      name: "Vegetarian Delight",
      instruction: "A medley of fresh vegetables on a crispy crust",
    },
    {
      id: 3,
      name: "Pepperoni Paradise",
      instruction: "Loaded with spicy pepperoni slices and extra cheese",
    },
    {
      id: 4,
      name: "Margherita Magic",
      instruction: "Simple yet delicious with tomato, mozzarella, and basil",
    },
    {
      id: 5,
      name: "BBQ Chicken Feast",
      instruction: "Savory barbecue chicken with a blend of veggies",
    },
    {
      id: 6,
      name: "Hawaiian Bliss",
      instruction: "A tropical delight with ham, pineapple, and cheese",
    },
    {
      id: 7,
      name: "Mushroom Symphony",
      instruction: "A rich combination of mushrooms, cheese, and herbs",
    },
    {
      id: 8,
      name: "Meat Lovers Extravaganza",
      instruction: "For those who love a variety of meats on their pizza",
    },
    {
      id: 9,
      name: "Spinach and Feta Delight",
      instruction: "Healthy greens with the creamy goodness of feta",
    },
    {
      id: 10,
      name: "Four Cheese Marvel",
      instruction: "A cheesy blend of mozzarella, cheddar, feta, and parmesan",
    },
    {
      id: 11,
      name: "Buffalo Chicken Kick",
      instruction: "Spicy buffalo chicken with a kick of hot sauce",
    },
    {
      id: 12,
      name: "Veggie Supreme",
      instruction: "An assortment of the freshest vegetables for veggie lovers",
    },
    {
      id: 13,
      name: "Sausage Sensation",
      instruction: "Sausage lovers' dream with a mix of sausages and herbs",
    },
    {
      id: 14,
      name: "Pesto Perfection",
      instruction:
        "Pesto sauce, cherry tomatoes, and pine nuts for a unique flavor",
    },
    {
      id: 15,
      name: "Seafood Sensation",
      instruction: "Delicious seafood toppings for a taste of the ocean",
    },
  ];

  const totalPages = Math.ceil(receipeData.length / showCount);

  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;
  const currentTableData = receipeData.slice(startIndex, endIndex);
  return (
    <div className="bg-Light py-3 px-5 my-2 w-full">
      <div className="w-[90%]">
        <div className="flex justify-between items-center mx-auto flex-wrap">
          <h4 className="text-Primary text-xl capitalize font-bold w-[50%]">
            All Receipes
          </h4>
        </div>
        <div className="overflow-x-auto  bg-Light  my-3 h-[630px] rounded">
          <table className="table AllFoodGroupTable table-xs table-pin-rows">
            <thead className="z-10 bg-Primary">
              <tr>
                <th className="bg-Primar">S.No</th>

                <th>Name</th>
                <th>Instructions</th>

                <th className="text-center">View</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="overflow-hidden z-0">
              {currentTableData.map((e, index) => (
                <tr key={e?.id}>
                  <td>{e?.id}</td>

                  <td>{e?.name}</td>
                  <td>{e?.instruction}</td>

                  <td className="text-center">
                    <VisibilityIcon
                      onClick={() => navigate(`single-receipe/${e?.id}`)}
                      className="cursor-pointer"
                    />
                  </td>
                  <td className="text-center">
                    <DeleteIcon
                      className="cursor-pointer"
                      onClick={() => setOpenDeleteModal(true)}
                    />
                  </td>
                </tr>
              ))}

              {/* <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr> */}
            </tbody>
          </table>
        </div>
        <DeleteModal
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
        <div className="flex items-center justify-between bg-Light p-3 rounded">
          <div className="pagination flex gap-0.5">
            <a
              className={`border border-1 border-Secondary px-3 py-1 ${
                currentPage === 1 ? "cursor-not-allowed" : ""
              }`}
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            >
              &laquo;
            </a>

            {/* Page Buttons */}
            {Array.from({ length: totalPages }).map((_, index) => (
              <a
                key={index + 1}
                className={`border border-1 border-Secondary px-3 py-1 ${
                  currentPage === index + 1 ? "bg-Pink text-Light" : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </a>
            ))}

            {/* Next Button */}
            <a
              className={`border border-1 border-Secondary px-3 py-1 ${
                currentPage === totalPages ? "cursor-not-allowed" : ""
              }`}
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
            >
              &raquo;
            </a>
          </div>
          <h4>{`Showing ${startIndex + 1} - ${Math.min(
            endIndex,
            receipeData.length
          )} of ${receipeData.length}`}</h4>
        </div>
      </div>
    </div>
  );
}

export default AllReceipes;
