import React, { useRef, useState, useEffect } from "react";
import Login from "../pages/Authentication/Login";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import HomeIcon from "@mui/icons-material/Home";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Authentication/Signup";
import Pos from "../pages/POS/index"
import Clock from "../components/Common/Clock";
import Kitchen from "../pages/Kitchen";
import Orders from "../pages/Orders";
import Manage from "../pages/Manage";
import Customer from "../pages/Customers";
import WorkPeriod from "../pages/WorkPeriod";
import Reports from "../pages/Reports";
import Test from "../pages/Test";

export default function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const [action, setAction] = useState(false);

  useEffect(() => {
    console.log("text123");
    let scrollDiv = document.getElementById("reportPage");
    scrollDiv?.scrollTo({
      top: 0,
    });
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setAction(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickAction = (e) => {
    setAction(!action);
  };

  return (
    <>
      {!location?.pathname.includes("/auth") && (
        <div className="bg-Primary h-[50px] px-3 fixed top-0 w-[100%] z-50 flex justify-between items-center">
          <div className="w-42 flex items-center justify-end gap-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100px"
              height="50px"
              viewBox="0 0 512 512"
              color="#fff"
              style={{ color: "#fff" }}
            >
              <path
                fill="#ffffff"
                d="M316.5 70.25c-.72 6.95-1.734 13.736-3 20.344 12.315 10.112 23.644 22.72 33.375 38.53-12.47-9.09-25.16-14.98-38.28-18.405-1.58 5.215-3.355 10.31-5.376 15.25 8.883 4.326 17.547 9.732 25.874 16.436-11.392-1.21-22.253-1.648-32.844-1.72-2.29 4.25-4.795 8.353-7.5 12.345 37.188 5.378 74.36 17.742 111.03 37.376-.772-36.935-26.11-81.666-83.28-120.156zM15.47 93.125c8.837 10.885 16.473 22.046 22.686 33.53 23.477 5.784 47.696 16.287 72.03 34-21.74-6.466-41.183-7.49-59.5-4.436 2.955 9.607 4.9 19.456 5.752 29.56l28.406 8.126-28.125 11c-.637 12.014-2.822 24.396-6.69 37.188 10.02 2.278 20.572 2.518 31.97.28-13.162 9.942-26.297 16.16-39.22 19.657-3.955 9.28-8.777 18.785-14.53 28.5 55.874-11.275 92.37-27.547 113.47-46.03-6.286-3.173-12.748-6.244-19.407-9.25-8.642-3.9-15.25-8.45-19.72-14.375-4.47-5.925-6.265-13.815-4.343-20.75 3.844-13.87 17.296-22.617 35.78-29.53 6.17-2.31 12.36-4.42 18.564-6.345-22.876-33.16-75.31-61.603-137.125-71.125zm231.155 74.438c-49.666-.092-99.264 12.687-145.938 37.562 10.067 4.313 19.585 8.538 28.626 12.75.233.11.446.204.687.313 39.04 18.24 69.042 36.415 94.75 61.75l24.03-12.438 8.595 16.594L234 296.188c9.052 8.52 19.78 14.486 31.688 18.625-18.848 2.345-37.715 1.337-56.563-5.72l-22.438 11.626c31.974 17.63 71.257 20.563 97.25 5.28l9.47 16.094c-6.117 3.596-12.608 6.41-19.376 8.47 7.396 15.617 18.3 31.395 32.75 48.092 35.162 40.627 80.495 48.148 99.064 3.875-14.172 10.394-39.122 9.802-51.313 1.19-25.038-17.697-11.577-52.194 2.5-78.126 11.844-21.817 42-34.654 57.908-25.47 12.553 7.248 15.24 24.905 8.437 42.532 16.457-9.064 33.79-9.677 43.53.78 7.308 7.84 8.207 19.94 4.158 32.252 46.384-47.552 5.884-114.95-47.625-149.032-55.533-39.73-116.22-58.982-176.813-59.094zm145.563 63.75c.45-.02.892-.012 1.343 0 3.284.084 6.583.962 9.626 2.718 9.737 5.623 13.092 18.074 7.47 27.814-5.623 9.737-18.077 13.06-27.813 7.437-9.737-5.62-13.09-18.074-7.47-27.81 3.624-6.277 10.1-9.886 16.844-10.157zm68.187 163.875c-8.3 25.18-29.67 34.388-52.344 42l41.158 6.406c2.32 32.026 10.377 48.196 39.53 43.53 11.6-26.25.588-45.847-26.562-55.25l-1.78-36.687z"
              />
            </svg> */}
            <img
              width={"50px"}
              src="https://res.cloudinary.com/dmmsjhioj/image/upload/v1706014842/quickdine_logo_final_i8hcnf.png"
              alt=""
            />
            <span className="text-Light font-semibold text-2xl">𝙌𝙪𝙞𝙘𝙠𝘿𝙞𝙣𝙚</span>
          </div>
          <div className="flex items-center gap-5">
            <HomeIcon
              className="text-Light cursor-pointer"
              sx={{ color: "#fff" }}
              onClick={() => navigate("/")}
            />
            <div
              className="cursor-pointer relative"
              ref={dropdownRef}
              onClick={handleClickAction}
            >
              <AccountCircleOutlinedIcon sx={{ color: "#fff" }} />
              <span className="text-Light px-1">Admin</span>
              <ArrowDropDownOutlinedIcon sx={{ color: "#fff" }} />
              {action && (
                <div className="border border-1 border-Secondary bg-[white] p-1 w-40 absolute top-[38px] right-[0%] z-10">
                  <ul>
                    <li
                      className="hover:bg-Secondary text-sm py-1 px-1 flex justify-start gap-1 items-center"
                      onClick={() => navigate("/dashboard")}
                    >
                      Dashboard
                    </li>
                    <li className="hover:bg-Secondary text-sm py-1 px-1 flex justify-start gap-1 items-center">
                      Change Password
                    </li>
                    <li
                      className="hover:bg-Secondary text-sm py-1 px-1 flex justify-start gap-1 items-center"
                      onClick={() => navigate("/auth/login")}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="py-[50px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/pos/*" element={<Pos />} />
          <Route path="/kitchen/*" element={<Kitchen />} />
          <Route path="/orders/*" element={<Orders />} />
          <Route path="/manage/*" element={<Manage />} />
          <Route path="/dashboard/customers/*" element={<Customer />} />
          <Route path="/dashboard/work-periods" element={<WorkPeriod />} />
          <Route path="/reports/*" element={<Reports />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>

      {!location?.pathname.includes("/auth") && (
        <div className="bg-Primary flex justify-between items-center h-[50px] px-3 mt-4 fixed bottom-0 w-[100%]">
          <div className="w-[200px]"></div>
          <p className="text-Light text-xs">
            © © 2021 - 2024 Khadyo. All rights reserved.
          </p>
          <Clock />
        </div>
      )}
    </>
  );
}
