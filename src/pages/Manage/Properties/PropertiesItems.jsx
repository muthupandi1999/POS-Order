import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { PropertiesGroups } from "../../../utills/data";

import SearchIcon from "@mui/icons-material/Search";
import FoodGroup from "../../../components/modals/modalComponents/FoodGroup";
import ActionIconWithItems from "../../../components/Common/ActionIconWithItems";
import ActionIcon from "../../../components/Common/ActionIcon";
import PropertyItemAdd from "../../../components/modals/modalComponents/PropertyItemAdd";

function PropertiesItems() {
  const [currentPage, setCurrentPage] = useState(1);

  const [openModal, setOpenModal] = useState(false);

  const showCount = 5;

  let { id } = useParams();

  const listOutData = [
    {
      id: 1,
      info: {
        id: 1,
        name: "Spice Level",
        slug: "jLm-1698839724-spice-level",
        created_at: "2023-11-01T23:55:24.000000Z",
        updated_at: "2023-11-01T23:55:24.000000Z",
      },
      data: [
        {
          id: 1,
          name: "Mild",
          slug: "duf-1698840082-mild",
          extra_price: "10",
          allow_multi_quantity: "0",
          property_group_id: "1",
          created_at: "2023-11-01T23:55:51.000000Z",
          updated_at: "2023-11-02T00:01:22.000000Z",
        },
        {
          id: 2,
          name: "chili",
          slug: "ibq-1698840133-chili",
          extra_price: "0",
          allow_multi_quantity: "1",
          property_group_id: "1",
          created_at: "2023-11-01T23:56:02.000000Z",
          updated_at: "2023-11-02T00:02:13.000000Z",
        },
      ],
    },
    {
      id: 2,
      info: {
        id: 2,
        name: "Salads",
        slug: "hke-1698839997-salads",
        created_at: "2023-11-01T23:59:57.000000Z",
        updated_at: "2023-11-01T23:59:57.000000Z",
      },
      data: [
        {
          id: 3,
          name: "Garden Salad",
          slug: "bgn-1698840033-garden-salad",
          extra_price: "0",
          allow_multi_quantity: "0",
          property_group_id: "2",
          created_at: "2023-11-02T00:00:33.000000Z",
          updated_at: "2023-11-02T00:00:33.000000Z",
        },
        {
          id: 4,
          name: "Caesar Salad",
          slug: "Xwt-1698840047-caesar-salad",
          extra_price: "5",
          allow_multi_quantity: "1",
          property_group_id: "2",
          created_at: "2023-11-02T00:00:47.000000Z",
          updated_at: "2023-11-02T00:00:47.000000Z",
        },
        {
          id: 5,
          name: "Greek Salad",
          slug: "iNn-1698840062-greek-salad",
          extra_price: "7",
          allow_multi_quantity: "1",
          property_group_id: "2",
          created_at: "2023-11-02T00:01:02.000000Z",
          updated_at: "2023-11-02T00:01:02.000000Z",
        },
        {
          id: 6,
          name: "Spinach Salad",
          slug: "A5k-1698840076-spinach-salad",
          extra_price: "10",
          allow_multi_quantity: "1",
          property_group_id: "2",
          created_at: "2023-11-02T00:01:16.000000Z",
          updated_at: "2023-11-02T00:01:16.000000Z",
        },
      ],
    },
    {
      id: 3,
      info: {
        id: 3,
        name: "Extras",
        slug: "vN4-1698840089-extras",
        created_at: "2023-11-02T00:01:29.000000Z",
        updated_at: "2023-11-02T00:01:29.000000Z",
      },
      data: [
        {
          id: 7,
          name: "Coca-cola",
          slug: "09W-1698840161-coca-cola",
          extra_price: "5",
          allow_multi_quantity: "1",
          property_group_id: "3",
          created_at: "2023-11-02T00:02:41.000000Z",
          updated_at: "2023-11-02T00:02:41.000000Z",
        },
        {
          id: 8,
          name: "Mojito",
          slug: "r6l-1698840185-mojito",
          extra_price: "10",
          allow_multi_quantity: "1",
          property_group_id: "3",
          created_at: "2023-11-02T00:03:05.000000Z",
          updated_at: "2023-11-02T00:03:05.000000Z",
        },
      ],
    },
    {
      id: 6,
      info: {
        id: 6,
        name: "Add Ons",
        slug: "VJu-1705380733-add-ons",
        created_at: "2024-01-16T04:52:13.000000Z",
        updated_at: "2024-01-16T04:52:13.000000Z",
      },
      data: [
        {
          id: 9,
          name: "Beef Bacon",
          slug: "zqw-1705380769-beef-bacon",
          extra_price: "8",
          allow_multi_quantity: "1",
          property_group_id: "6",
          created_at: "2024-01-16T04:52:49.000000Z",
          updated_at: "2024-01-16T04:52:49.000000Z",
        },
        {
          id: 10,
          name: "Mushroom",
          slug: "n4Q-1705380814-mushroom",
          extra_price: "5",
          allow_multi_quantity: "1",
          property_group_id: "6",
          created_at: "2024-01-16T04:53:34.000000Z",
          updated_at: "2024-01-16T04:53:34.000000Z",
        },
        {
          id: 11,
          name: "Cheese",
          slug: "SNz-1705380850-cheese",
          extra_price: "3",
          allow_multi_quantity: "1",
          property_group_id: "6",
          created_at: "2024-01-16T04:54:10.000000Z",
          updated_at: "2024-01-16T04:54:10.000000Z",
        },
        {
          id: 12,
          name: "Grilled Chicken",
          slug: "hIx-1705380874-grilled-chicken",
          extra_price: "10",
          allow_multi_quantity: "1",
          property_group_id: "6",
          created_at: "2024-01-16T04:54:34.000000Z",
          updated_at: "2024-01-16T04:54:34.000000Z",
        },
      ],
    },
  ];

  console.log("iddddddddddddddd", id);
  // const PropertiesGroups = [];

  // for (let i = 0; i < 30; i++) {
  //   const dataItem = {
  //     id: i + 1,
  //     name: "Spicy Level",
  //   };

  //   PropertiesGroups.push(dataItem);
  // }

  let foundData = listOutData?.find((e) => e?.id == id);

  console.log("foundData", foundData);

  const totalPages = Math.ceil(foundData?.data?.length / showCount);

  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;
  const currentTableData = foundData?.data?.slice(startIndex, endIndex);
  console.log("currentTableData", currentTableData);
  return (
    <>
      <div className="flex justify-between items-center mx-auto flex-wrap">
        <h4 className="text-Primary text-xl capitalize font-bold w-[50%]">
          {foundData?.info?.name} List
        </h4>
        <div className="w-[50%] flex justify-between items-center">
          <div className="relative h-auto w-[50%] border border-1 border-Secondary">
            <input
              type="text"
              className="h-full w-[100%] focus:outline-none pr-3 pl-12 py-2"
            />
            <SearchIcon
              className="absolute left-[1px] top-[1px] bg-Pink text-Light p-2 cursor-pointer"
              sx={{ fontSize: "39px" }}
            />
          </div>
          <button
            className="btn bg-Pink border-0 rounded text-Light hover:bg-Pink h-[40px] min-h-max w-44 uppercase"
            onClick={() => setOpenModal(true)}
          >
            add new
          </button>
          <PropertyItemAdd
            heading="Add New Property Item"
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>
      </div>
      <div className="overflow-x-auto  bg-Light  my-3 h-[630px] rounded">
        <table className="table AllFoodGroupTable table-xs table-pin-rows">
          <thead className="z-10 bg-Primary">
            <tr>
              <th className="bg-Primar">S.No</th>
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="overflow-hidden z-0">
            {currentTableData?.map((e, index) => (
              <tr key={e?.id}>
                <td>{e?.id}</td>

                <td className="text-center">{e?.name}</td>
                <td className="text-center">{e?.extra_price}</td>

                <td className="text-center">
                  {/* <ActionIconWithItems /> */}
                  <ActionIcon openModal={openModal} setOpenModal={setOpenModal} />
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
          foundData?.data?.length
        )} of ${foundData?.data?.length}`}</h4>
      </div>
    </>
  );
}

export default PropertiesItems;
