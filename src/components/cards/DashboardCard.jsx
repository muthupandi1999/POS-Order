import React from "react";
import PlusButton from "../buttons/PlusButton";
import { Link } from "react-router-dom";

function DashboardCard({ e }) {
  return (
    <div className="bg-Snow max-w-[421px] m-auto shadow-[0_5px_10px_rgba(34,39,54,0.15)] cursor-pointer relative">
       <Link to={`${e.router}`}>
        {/* Your content */}
        <div className="m-auto max-w-[90%] m-auto">
        <img className="" src={e?.image} alt="cardImage" />
      </div>
      <div className="bg-Snow p-8">
        <div className="flex items-center py-2">
          {e?.icon}
          <h6 className={`text-sm uppercase font-bold text-[${e?.color}] pl-1`}>
            {e?.iconText}
          </h6>
        </div>

        <h2 className="font-semibold capitalize text-3xl text-Primary">{e?.title}</h2>
      </div>
      <PlusButton />
      </Link>
 
    </div>
  );
}

export default DashboardCard;
