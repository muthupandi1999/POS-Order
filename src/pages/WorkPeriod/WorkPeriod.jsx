import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ActionIcon from "../../components/Common/ActionIcon";
import Select from "react-select";

function WorkPeriod() {
  const [currentPage, setCurrentPage] = useState(1);
  const [userModal, setUserModal] = useState(false);

  const [search, setSearch] = React.useState("");

  const showCount = 14;

  const [selectedBranch, setSelectedBranch] = useState(null);

  // handle onChange event of the dropdown
  const handleChangeBranch = (e) => {
    setSelectedBranch(e);
  };

  // handle custom filter
  const filterOptionBranches = (option, inputValue) => {
    return option.data.text.toLowerCase().includes(inputValue.toLowerCase());
  };

  const branches = [
    {
      value: 1,
      text: "Uttara",
    },
    {
      value: 2,
      text: "Dhanmondi",
    },
    {
      value: 3,
      text: "Gulshan",
    },
    {
      value: 4,
      text: "Banani",
    },
    {
      value: 5,
      text: "Mirpur",
    },
  ];

  const TableList = [];

  for (let i = 0; i < 100; i++) {
    const dataItem = {
      id: i + 1,
      branch: generateRandomBranch(),
      startedBy: generateRandomUser(),
      date: generateRandomDate(),
      startedAt: generateRandomTime(),
      endedAt: generateRandomTime(),
      endedBy: generateRandomUser(),
      totalTime: generateRandomTimeDuration(),
    };

    TableList.push(dataItem);
  }

  // Helper functions to generate random data
  function generateRandomBranch() {
    const branches = ["Uttara", "Dhanmondi", "Gulshan", "Banani", "Mirpur"];
    return branches[Math.floor(Math.random() * branches.length)];
  }

  function generateRandomUser() {
    const users = ["admin", "user1", "user2", "user3", "user4"];
    return users[Math.floor(Math.random() * users.length)];
  }

  function generateRandomDate() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const randomDay = days[Math.floor(Math.random() * days.length)];
    const randomMonth = months[Math.floor(Math.random() * months.length)];
    const randomDate = Math.floor(Math.random() * 31) + 1;
    const randomYear = 2024; // Change the year if needed

    return `${randomDay}, ${randomDate} ${randomMonth}, ${randomYear}`;
  }

  function generateRandomTime() {
    const hours = Math.floor(Math.random() * 12) + 1;
    const minutes = Math.floor(Math.random() * 60);
    const period = Math.random() < 0.5 ? "AM" : "PM";

    return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
  }

  function generateRandomTimeDuration() {
    const hours = Math.floor(Math.random() * 5);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);

    return `${hours} hr - ${minutes} min - ${seconds} sec`;
  }

  // Get the current page items based on the showCount
  const startIndex = (currentPage - 1) * showCount;
  const endIndex = startIndex + showCount;

  // const filteredTableData = TableList.filter((item) =>
  //   Object.values(item).some(
  //     (value) =>
  //       typeof value === "string" &&
  //       value.toLowerCase().includes(search.toLowerCase())
  //   )
  // );

  const filteredTableData = TableList.filter((item) => {
    const isBranchSelected =
      selectedBranch &&
      item.branch.toLowerCase().includes(selectedBranch.text.toLowerCase());

    const isSearchMatch = Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(search.toLowerCase())
    );

    return !selectedBranch || (isBranchSelected && isSearchMatch);
  });
  const totalPages = Math.ceil(filteredTableData.length / showCount);
  const currentTableData = filteredTableData.slice(startIndex, endIndex);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="bg-Light py-3 px-5 my-2 w-full m-auto my-element">
      <div className="mx-8">
        <h4 className="text-Primary text-xl capitalize font-bold py-3">
          Work Periods
        </h4>
        <div className=" mx-auto flex-wrap">
          <div className="w-[100%] flex justify-start items-center gap-8">
            <div className="relative h-[100%] w-[15%] border border-1 border-Secondary">
              <input
                type="text"
                className="h-[40px] w-[100%] focus:outline-none pr-3 pl-12 py-2"
                onChange={handleSearch}
              />
              <SearchIcon
                className="absolute left-[1px] top-[1px] bg-Pink text-Light p-2 cursor-pointer"
                sx={{ fontSize: "38px" }}
              />
            </div>
            <div className="w-[15%] h-[40px]">
              <Select
                className="w-[100%]  customZIndex"
                styles={{
                  control: (base) => ({
                    ...base,
                    height: "41px",
                    outline: "none",
                    ":focus-visible": {
                      outline: "none",
                    },
                    ":focus": {
                      outline: "1px solid #fff",
                    },
                  }),
                  height: "40px",
                  "& .css-13cymwt-control": {
                    minHeight: "40px",
                    height: "100%",
                  },
                }}
                placeholder="Please select a branch"
                isClearable={true}
                value={selectedBranch}
                options={branches}
                onChange={handleChangeBranch}
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
                filterOption={filterOptionBranches}
              />
            </div>
            <button
              className="btn bg-Pink border-0 rounded text-Light hover:bg-Pink h-[40px] min-h-max w-[10%] uppercase"
              onClick={() => setUserModal(true)}
            >
              start work period
            </button>
            {/* <UserAdd
                heading="Add New Admin / Staff"
                userModal={userModal}
                setUserModal={setUserModal}
              /> */}
          </div>
        </div>
        <div className="overflow-x-auto  bg-Light my-4 h-[628px] rounded">
          <table className="table WorkPeriodTable table-xs table-pin-rows">
            <thead className="z-10 bg-Primary">
              <tr>
                <th className="">S.No</th>
                <th className="">Branch</th>
                <th className="">Started by</th>
                <th className="">Date</th>
                <th className="">Started at</th>
                <th className="">Ended at</th>
                <th className="">Ended by</th>
                <th className="text-center">Total time</th>
              </tr>
            </thead>
            <tbody className="overflow-hidden z-0">
              {currentTableData.map((e, index) => (
                <tr key={e?.id}>
                  <td>{e?.id}</td>
                  <td>{e?.branch}</td>
                  <td>{e?.startedBy}</td>
                  <td>{e?.date}</td>
                  <td>{e?.startedAt}</td>
                  <td>{e?.endedAt}</td>
                  <td>{e?.endedBy}</td>

                  <td className="text-center">{e?.totalTime}</td>
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
            filteredTableData.length
          )} of ${filteredTableData.length}`}</h4>
        </div>
      </div>
    </div>
  );
}

export default WorkPeriod;
