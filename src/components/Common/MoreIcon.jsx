import React, { useState, useLayoutEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { saveAs } from "file-saver";
function MoreIcon({ chartId }) {
  const [showOption, setShowOption] = useState(false);

  const handleOption = () => {
    setShowOption(!showOption);
  };

  const handleDownload = () => {
    const canvasSave = document.getElementById(chartId);

    canvasSave.toBlob(function (blob) {
      saveAs(blob, "testing.png");
    });
  };
  return (
    <div className="relative">
      <MenuIcon className="cursor-pointer" onClick={handleOption} />
      {showOption && (
        <div className="absolute right-0 top-6">
          <ul className="bg-white p-2 w-[120px]">
            <li
              className="text-center hover:bg-Secondary"
              onClick={(e) => handleDownload(e)}
            >
              <a className="text-xs">Download PNG</a>
            </li>
            <li className="text-center hover:bg-Secondary">
              <a className="text-xs">Download CSV</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MoreIcon;
