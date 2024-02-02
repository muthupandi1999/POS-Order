import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import ActionIcon from "../../components/Common/ActionIcon";
import CustomerAddPOS from "../../components/modals/modalComponents/CustomerAddPOS";
import { CustomerList } from "../../utills/data";

function Customer() {
  const [currentOrder, setCurrentOrder] = useState("Online");

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
    fetch(
      currentOrder === "Online"
        ? "https://khadyo.softtechdemo.com/api/public/settings/get-website-customer"
        : "https://khadyo.softtechdemo.com/api/public/settings/get-customer",

      {
        method: "GET",
        headers: {
          // "X-RapidAPI-Key": "your-api-key",
          // "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTFhY2YzNzFiZTZmZGJiODNmNWVmMTU0YmYzYzg3ZmJlZWQyMGU3ZDRiNzc1ZWIxZGU0Y2FiYjIyYWY4MzdmMjIwOWYzNDdjYmIxMTMzNjkiLCJpYXQiOjE3MDY3MTExODUuMzM4NzYyLCJuYmYiOjE3MDY3MTExODUuMzM4NzY2LCJleHAiOjE3MzgzMzM1ODUuMzMxMjE4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ZiG9AWVwyd35_URst11op1OKLb_i4IPTFdtmO1OpPIR_f1ekhWpKajFD6AdfddP-cdJfrBCgr0YncAwXPD_lUxiUcEWj__-YNFA_DCZ9pcW96XVyohqo7WDi7OZGkfxCQhfqjGiAEP8BQLoLN8-3QkvtqfJ6PPsZPOO6B7fGdEbMACVK1mO8d0sYYxFXQ_8j821sSfXjjDJEuZagSf1Lc1affqULoyjo0tgMzN8wFSQjaXASrquwvZ9A58s5fNdL57ZmFV6qZkOs7NK2ES1NpECY3X91zApmRIYjPAPRVxoCkzQuNnFAuWc0Cmdvw92K4DV6FDJzO7a1dy6_bnu3xCf6THuvRKkkN2zsQFhxTBq5JVAmepn0oT4XXYUjNK7CWiNCljJzHdNoU_0dVlVxkWPCdUC_B6JavGkbp59W4W7T-1FSsairWh9U8bs7bBsBXNlhfIJDiUcCEeq0xX8ZfPzRDn-p1U59F9WiXyatMmGFdzH0J7HqguVDSaKDY-GHvkIqhb6lb_nXcCEoqb3eEv6dt9qAU5W8m_SEYeuou5aAvW9848CSnyN6v0YSYq5yXhKhrVdLS4E-5skcwqBLK_qZVtM6QNTdqeWaiWUfJnaHKeMtwdMTWVWHP0b-AgDxoZGjbGy5mF-9IFvQ5pwg-0qQO75AUIJeD8m9aQoYnl0",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data?.[1]);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [currentOrder]);

  // useEffect(() => {
  //   fetch(
  //     "https://khadyo.softtechdemo.com/api/public/settings/get-website-customer",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization:
  //           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTc1MzhlMWVjMGYzMzI1ZWU4ZjNmYTIzNmNhZWU0NzVlNDdlOTc3N2IyYjY4ZTk4YzFiNjJhMDVkZDIxNzhmNjljZTRhMjZjZWExYzE4ZDAiLCJpYXQiOjE3MDY1Mjg2ODguODE1MzYzLCJuYmYiOjE3MDY1Mjg2ODguODE1MzY3LCJleHAiOjE3MzgxNTEwODguODExNTkxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.cVOynx8FuaBcv9wv1bQB6cq2M9zOX3_GLaHnJresGatoFztL8SzFKZ46MJj4zhyuLBJIMdsTuSH-A9nUuZy3d13fxPw0ixirGbbiBJppvXXl9NH1c3HIRneJyTgcWMgEJQ9bUQsp_Y82JgsiVSqhl50-FGmBQO-LdSX9e1jBWI157TWFmGkjzB2XAQL_HLrkQ9oiDMNjjWcBQ9Mb_jwvT4wGjSpwWwsIBw0AsM9FLb8qfKJwbOEfioxfNWJ5-n1DjxJavN2BkKx_W6brxiB5LvJ5bJxzDb4MuyCti6-XJlzvjETm6-18ekdwsuVmdwOB-8Nv5NuzBG2DP4VuQj2lXfnUKl8HSzpWjUgIlWJGjZqHc4NBLB_TJL47_xN3e7vldZIav_Cn_KGtGnMGcOTjYtdYK8kN4Lr-1_8hW0_M2Oaw9mmkYzp3CEWfsn5YhQi5jBkLOfi2sH8rlqZhshBJeWxg8Le1tyI2zjZpU2SHNQrh0v3jbXMIczxt5PDvXETiNUHMGFiOFb6F2nDcJ-9t9H0J9CZWT4u-mP_giCpudvqg4a-XoI3H3irFA4RZujry9Og", // Replace with your actual access token
  //         // Other headers if needed
  //       },
  //     }
  //   )
  //     .then(async (response) => {
  //       console.log(await response.json());
  //     })
  //     .then((data) => {
  //       setCustomers(data?.[0]);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));

  //   // if (!response.ok) {
  //   //   console.log("hiiii")
  //   //   throw new Error(`HTTP error! Status: ${response.status}`);
  //   // } else {
  //   //   console.log("hloooooo")
  //   //   const result = await response.json();

  //   //   console.log("result", result);
  //   //   setCustomers(result); // Adjust this based on the actual structure of your API response
  //   // }
  // }, [currentOrder]);

  const [openModal, setOpenModal] = useState(false);

  const [dateInputType, setDateInputType] = useState("text");

  const [currentPage, setCurrentPage] = useState(1);

  const showCount = 10;
  const [search, setSearch] = React.useState("");

  const TableList = [];

  // for (let i = 0; i < 100; i++) {
  //   const dataItem = {
  //     id: i + 1,
  //     name: "test",
  //     email: "test@gmail.com",
  //     type: "-",
  //     phoneNo: 857458858,
  //     address: "Dhaka, Uttara",
  //     branch: "Uttara",
  //   };
  //   console.log("i", dataItem.id);
  //   TableList.push(dataItem);
  // }

  const totalPages = Math.ceil(customers.length / showCount);

  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;

  const filteredTableData = customers?.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(search.toLowerCase())
    )
  );
  const currentTableData = filteredTableData?.slice(startIndex, endIndex);
  console.log("customersData", customers);

  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  // https://khadyo.softtechdemo.com/api/public/settings/get-website-customer?page=1

  // useEffect(() => {
  //   fetch(
  //     "https://khadyo.softtechdemo.com/api/public/settings/get-order-history-all",
  //     {
  //       method: "GET",
  //       headers: {
  //         // "X-RapidAPI-Key": "your-api-key",
  //         // "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
  //         Authorization:
  //           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTc1MzhlMWVjMGYzMzI1ZWU4ZjNmYTIzNmNhZWU0NzVlNDdlOTc3N2IyYjY4ZTk4YzFiNjJhMDVkZDIxNzhmNjljZTRhMjZjZWExYzE4ZDAiLCJpYXQiOjE3MDY1Mjg2ODguODE1MzYzLCJuYmYiOjE3MDY1Mjg2ODguODE1MzY3LCJleHAiOjE3MzgxNTEwODguODExNTkxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.cVOynx8FuaBcv9wv1bQB6cq2M9zOX3_GLaHnJresGatoFztL8SzFKZ46MJj4zhyuLBJIMdsTuSH-A9nUuZy3d13fxPw0ixirGbbiBJppvXXl9NH1c3HIRneJyTgcWMgEJQ9bUQsp_Y82JgsiVSqhl50-FGmBQO-LdSX9e1jBWI157TWFmGkjzB2XAQL_HLrkQ9oiDMNjjWcH_KvWfS786vS9Zh7JIgACoy2JSQgtmjiy0UceMu6Zz49Tp5_UwdpGb1x-B5wuVPECV96PxXpiZXq1Q-QPqffSYwPBo2GGbQJqaOeAWJXaHv8eI33JF9C-C5bGM2mbdOqyj6cEO8VmpZCHq7e7D7eab8rPRx0jxd1BjrpdKxc3dSjL_wxdQgnBXi3DkPCf685BzaW2ojaGopgAg5VoqohuYtKnN7GAyHdxynrjSsxVk9e4hAn0P2OFN3l6-0xX_ztIKFD9iW9WMQ8Ti3sQ7Jf6OxXPZpHhjnlu0mGVbVDJsGvd6t5JHrx_oLiy0tzWHKuE2mWGkl0GyupfjvKhSCsTK-OCgFV5vRSdidDreAZ7DgMJhAe_t3GsI59tGtSlfYSCq694DjP4LHQc9xJKMhBFO1ZcDVu2YwnaN-cFz4QvL6REUGAaCbeSXB4lMeZmhEhKFh3TO9PKVw-XoI3H3irFA4RZujry9Og",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       set(data?.data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         currentOrder === "Online"
  //           ? "https://khadyo.softtechdemo.com/api/public/settings/get-website-customer?page=1"
  //           : "https://khadyo.softtechdemo.com/api/public/settings/get-customer?page=1",
  //         {
  //           method: "GET",
  //           headers: {
  //             Authorization:
  //               "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTc1MzhlMWVjMGYzMzI1ZWU4ZjNmYTIzNmNhZWU0NzVlNDdlOTc3N2IyYjY4ZTk4YzFiNjJhMDVkZDIxNzhmNjljZTRhMjZjZWExYzE4ZDAiLCJpYXQiOjE3MDY1Mjg2ODguODE1MzYzLCJuYmYiOjE3MDY1Mjg2ODguODE1MzY3LCJleHAiOjE3MzgxNTEwODguODExNTkxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.cVOynx8FuaBcv9wv1bQB6cq2M9zOX3_GLaHnJresGatoFztL8SzFKZ46MJj4zhyuLBJIMdsTuSH-A9nUuZy3d13fxPw0ixirGbbiBJppvXXl9NH1c3HIRneJyTgcWMgEJQ9bUQsp_Y82JgsiVSqhl50-FGmBQO-LdSX9e1jBWI157TWFmGkjzB2XAQL_HLrkQ9oiDMNjjWcBQ9Mb_jwvT4wGjSpwWwsIBw0AsM9FLb8qfKJwbOEfioxfNWJ5-n1DjxJavN2BkKx_W6brxiB5LvJ5bJxzDb4MuyCti6-XJlzvjETm6-18ekdwsuVmdwOB-8Nv5NuzBG2DP4VuQj2lXfnUKl8HSzpWjUgIlWJGjZqHc4NBLB_TJL47_xN3e7vldZIav_Cn_KGtGnMGcOTjYtdYK8kN4Lr-1_8hW0_M2Oaw9mmkYzp3CEWfsn5YhQi5jBkLOfi2sH8rlqZhshBJeWxg8Le1tyI2zjZpU2SHNQrh0v3jbXMIczxt5PDvXETiNUHMGFiOFb6F2nDcJ-9t9H0J9CZWT4u-mP_giCpudvqg4a-XoI3H3irFA4RZujry9Og",
  //           },
  //         }
  //       );
  //       if (!response.ok) {
  //         console.log("REs", response)
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setCustomers(data?.[1]);
  //       console.log("data", data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [currentOrder]);
  return (
    <div className="mx-8 my-3">
      <div className="py-2 bg-Light px-3">
        <h4 className="text-Primary font-bold text-lg uppercase pb-3">
          Customers
        </h4>
        <div className="flex justify-between mx-auto flex-wrap">
          <div className="w-[29%]">
            <div className="relative h-auto w-[100%] border border-1 border-Secondary">
              <input
                type="text"
                className="h-full w-[100%] focus:outline-none pr-3 pl-12 py-2"
                onChange={handleSearch}
              />
              <SearchIcon
                className="absolute left-[1px] top-[1px] bg-Pink text-Light p-2 cursor-pointer"
                sx={{ fontSize: "39px" }}
              />
            </div>
          </div>

          <div className="w-[50%] flex justify-between flex-wrap">
            <button
              className="btn bg-Primary border-0 rounded text-Light hover:bg-Primary h-[40px] min-h-max w-44 uppercase"
              onClick={() => {
                if (currentOrder === "Online") {
                  setCurrentOrder("POS");
                  navigate("/dashboard/customers/online");
                } else {
                  setCurrentOrder("Online");
                  navigate("/dashboard/customers/pos");
                }
              }}
            >
              {currentOrder === "Online" && "Online Orders"}

              {currentOrder === "POS" && "POS Orders"}
            </button>
            {currentOrder === "POS" && (
              <button
                className="btn bg-Pink border-0 rounded text-Light hover:bg-Pink h-[40px] min-h-max w-44 uppercase"
                onClick={() => setOpenModal(true)}
              >
                add new
              </button>
            )}

            <CustomerAddPOS
              heading="Add New Customer"
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-hidden bg-Light p-3  my-3 h-[630px] rounded">
        <table className="table ordersTable table-xs table-pin-rows">
          <thead className="z-10">
            {currentOrder === "POS" && (
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th className="text-center">Email</th>
                <th className="text-center">Type</th>
                <th>Phone No</th>
                <th className="text-center">Address</th>
                <th className="text-center">Branch</th>
              </tr>
            )}

            {currentOrder === "Online" && (
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th className="text-center">Email</th>

                <th>Phone No</th>
                <th className="text-center">Address</th>
              </tr>
            )}
          </thead>
          <tbody className="overflow-hidden z-0">
            {currentOrder === "POS" &&
              currentTableData.map((e, index) => (
                <tr key={e?.id}>
                  <td>{e?.id}</td>
                  <td>{e?.name}</td>
                  <td className="text-center">{e?.email ? e?.email : "-"} </td>
                  <td className="text-center">{e?.type || "-"} </td>
                  <td>{e?.phn_no || null}</td>
                  <td className="text-center">{e?.address || "-"}</td>
                  <td className="text-center">{e?.branch_name || "-"}</td>
                </tr>
              ))}

            {currentOrder === "Online" &&
              currentTableData.map((e, index) => (
                <tr key={e?.id}>
                  <td>{e?.id}</td>
                  <td>{e?.name}</td>
                  <td className="text-center">{e?.email ? e?.email : "-"} </td>

                  <td>{e?.phn_no}</td>
                  <td className="text-center">{e?.address || "-"}</td>
                </tr>
              ))}
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
          filteredTableData.length
        )} of ${filteredTableData.length}`}</h4>
      </div>
    </div>
  );
}

export default Customer;
