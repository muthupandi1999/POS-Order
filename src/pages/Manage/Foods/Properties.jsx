import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ActionIcon from "../../../components/Common/ActionIcon";
import FoodGroup from "../../../components/modals/modalComponents/FoodGroup";
import { PropertiesGroups } from "../../../utills/data";
import ActionIconWithItems from "../../../components/Common/ActionIconWithItems";
import PropertiesList from "../../../pages/Manage/Properties/index";
import PropertiesItems from "../Properties/PropertiesItems";

function Properties() {
  return (
    <div className="bg-Light py-3 px-5 my-2 w-full my-element">
      <div className="w-[90%]">
        {/* Hellooooo */}
        <Routes>
          <Route path="/" element={<PropertiesList />} />
          <Route path="/:id" element={<PropertiesItems />} />
        </Routes>
      </div>
    </div>
  );
}

export default Properties;
