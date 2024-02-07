import React, { useRef, useState, useEffect } from "react";
import Login from "../pages/Authentication/Login";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Authentication/Signup";
import Pos from "../pages/POS/index";
import Clock from "../components/Common/Clock";
import Kitchen from "../pages/Kitchen";
import Orders from "../pages/Orders";
import Manage from "../pages/Manage";
import Customer from "../pages/Customers";
import WorkPeriod from "../pages/WorkPeriod";
import Reports from "../pages/Reports";
import Test from "../pages/Test";
import CommonDrawer from "../components/Drawer/CommonDrawer";
import Booking from "../pages/Bookings"

export default function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const [action, setAction] = useState(false);
  const [isHumburgerOpen, setIsHumburgerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const scrollRef = useRef();

  // useEffect(() => {
  //   console.log("scrollRef.current", scrollRef.current)
  //   const handleScroll = (event) => {
  //     if (event.current) {

  //       console.log("currentPOs", currentPosition)
  //       // Get the scroll position from the ref's current property
  //       const currentPosition = event.current.scrollTop;

  //       console.log("currentPOs", currentPosition)
  //       // Update the scroll position state
  //       setScrollPosition(currentPosition);
  //     }
  //   };

  //   // Attach scroll event listener to the scrollable element
  //   if (scrollRef.current) {
  //     scrollRef.current.addEventListener("scroll", handleScroll);
  //   }

  //   // Cleanup: remove scroll event listener
  //   return () => {
  //     if (scrollRef.current) {
  //       scrollRef.current.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);
  const toggleHumburgerMenu = () => {
    setIsHumburgerOpen(!isHumburgerOpen);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsHumburgerOpen(!isHumburgerOpen);
  };

  const handleRoute = (route) => {
    handleClose();
    navigate(route);
  };
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      {!location?.pathname.includes("/auth") && (
        <>
          <div className="bg-Primary h-[50px] px-3 fixed top-0 w-[100%] z-50 flex justify-between items-center">
            <div className="w-42 flex items-center justify-end gap-2">
              <img
                width={"50px"}
                src="https://res.cloudinary.com/dmmsjhioj/image/upload/v1706014842/quickdine_logo_final_i8hcnf.png"
                alt=""
              />
              <span className="text-Light font-semibold text-2xl">
                𝙌𝙪𝙞𝙘𝙠𝘿𝙞𝙣𝙚
              </span>
            </div>
            <div className=" items-center gap-5 hidden md:flex">
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

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleHumburgerMenu}
                className="text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {!isHumburgerOpen && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <CommonDrawer open={open} onClose={handleClose}>
            <div className="w-[300px] transition-[width] duration-[1s] ease-in-out p-6 ">
              <div className="flex justify-end items-center">
                <CloseIcon
                  onClick={handleClose}
                  className="cursor-pointer text-Primary"
                />
              </div>
              <div className="pt-5 pb-3 border-b border-Secondary">
                <div className="w-[40px] h-[40px] mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
                    alt=""
                  />
                </div>
                <h4>Test Admin</h4>
              </div>
              <ul className="pt-3">
                <li className="text-sm pb-3" onClick={() => handleRoute("/")}>
                  Home
                </li>
                <li
                  className="text-sm pb-3"
                  onClick={() => handleRoute("/dashboard")}
                >
                  Dashboard
                </li>
                <li className="text-sm pb-3" onClick={() => handleRoute("/")}>
                  Change Password
                </li>
                <li
                  className="text-sm pb-3"
                  onClick={() => handleRoute("/auth/login")}
                >
                  Logout
                </li>
              </ul>
            </div>
          </CommonDrawer>
        </>
      )}
      {/* {scrollPosition && (
        <button
          className="bg-white z-30 fixed bottom-[10%] right-[10%]"
          onClick={scrollToTop}
        >
          Scroll to top
        </button>
      )} */}

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
          <Route path="/bookings" element={<Booking />} />
        </Routes>
      </div>

      {!location?.pathname.includes("/auth") && (
        <div className="bg-Primary flex flex-col-reverse justify-center items-center z-20 h-[50px] px-3 mt-4 fixed bottom-0 w-[100%] md:flex-row md:!justify-between">
          <div className="w-[200px]"></div>
          <p className="text-Light text-xs">
            © © 2021 - 2024 Khadyo. All rights reserved.
          </p>
          <Clock />
        </div>
      )}
    </div>
  );
}
