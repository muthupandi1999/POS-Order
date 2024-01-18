// import React, { Suspense } from 'react'
// import Layout from '@layouts/Layout'
// import Login from '@pages/Login'
// import { routes_here } from './routes'
// import { Route, Routes } from 'react-router-dom'
// import ScrollTop from '@components/ScrollTop'

// export default function AppRoutes() {

//     const isAuthenticated = true; // bool, based on token availabilty

//     const renderRoute = (route, isAuthenticated) => {
//         if (route.isPrivate || isAuthenticated) {
//             return route.element;
//         }
//     };

//     return (
//         <Suspense fallback={<h1>Loading....</h1>}>
//             <React.Fragment>

//                 <ScrollTop />
//                 <Routes>
//                     {/* ================= All Routes ================ */}
//                     {routes_here.map((route, key) => (
//                         !isAuthenticated ?
//                             <Route key={key} path="/login" element={<Login />} />
//                             :
//                             <Route
//                                 // index
//                                 key={key}
//                                 path={route.path}
//                                 element={
//                                     <Layout>
//                                         <Suspense fallback={<h1>Loading....</h1>}>
//                                             {renderRoute(route, isAuthenticated)}
//                                         </Suspense>
//                                     </Layout>
//                                 }
//                             />
//                     ))}
//                 </Routes>

//             </React.Fragment>
//         </Suspense>
//     )
// }

import React, { Suspense } from "react";
import Layout from "@layouts/Layout";
import Login from "@pages/Login";
import { routes_here } from "./routes";
import { Route, Routes } from "react-router-dom";
import ScrollTop from "@components/ScrollTop";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Signup";
import Pos from "../pages/POS";
import { useLocation } from "react-router-dom";
import Clock from "../components/Common/Clock";
import Kitchen from "../pages/Kitchen";
import Orders from "../pages/Orders";
import Manage from "../pages/Manage";

export default function AppRoutes() {
  const isAuthenticated = true; // bool, based on token availabilty

  const location = useLocation();
  // console.log("location", location);

  const renderRoute = (route, isAuthenticated) => {
    if (route.isPrivate || isAuthenticated) {
      return route.element;
    }
  };

  return (
    // <Suspense fallback={<h1>Loading....</h1>}>
    // <React.Fragment>

    //     <ScrollTop />

    // </React.Fragment>
    // </Suspense>
    <>
      {!location?.pathname.includes("/auth") && (
        <div className="bg-Primary h-[50px] mx-8 my-1 rounded-md "></div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/pos/*" element={<Pos />} />
        <Route path="/kitchen/*" element={<Kitchen />} />
        <Route path="/orders/*" element={<Orders/>} />
        <Route path="/manage/*" element={<Manage/>} />
      </Routes>
      {!location?.pathname.includes("/auth") && (
        <div className="bg-Primary mx-9  my-2 rounded-md flex justify-between items-center px-3 py-1 fixed bottom-0 w-[97%]">
          {/* <div className="w-[200px] h-[60px]">
            <img className="w-full h-full" src="https://res.cloudinary.com/dmmsjhioj/image/upload/v1705031540/Grocery/Quick__3_-removebg-preview_dda2oe.png" alt="" />
          </div> */}
          <p className="text-Light">© © 2021 - 2024 Khadyo. All rights reserved.</p>
          <Clock  />
        </div>
      )}
    </>
  );
}
