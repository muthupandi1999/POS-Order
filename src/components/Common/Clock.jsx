import React, { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDay = currentTime.toDateString();

  return (
    <div className="flex items-center text-Light px-5">
      <AccessTimeIcon className="bg-Light rounded text-Primary mr-3 p-1" style={{fontSize:"40px"}}  />
      <div>
        <p className="text-sm font-semibold">{formattedTime}</p>

        <p className="text-xs">{formattedDay}</p>
      </div>
    </div>
  );
};

export default Clock;
