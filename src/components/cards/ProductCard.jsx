import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PropTypes from "prop-types";
function ProductCard({ e }) {
  const [count, setCount] = useState(0);
  return (
    <div key={e?.id} className="p-3 bg-white rounded-lg max-h-[295px]">
      <div className="rounded-lg pb-2 min-w-[187px] h-[134px] w-[100%] object-cover">
        <img
          width={"100%"}
          style={{ height: "100%" }}
          className="rounded-lg"
          src={e?.image}
          alt=""
        />
      </div>
      <h4 className="text-sm font-bold pb-2 min-h-[48px]">{e?.name}</h4>
      <p className="text-xs min-h-12 mb-4">
        {e?.description.length > 60
          ? e?.description.substring(0, 60) + "..."
          : e?.description}
      </p>
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-Pink">${e?.price}</h3>
        <div className="flex items-center gap-3">
          <button onClick={() => setCount(count - 1)} disabled={count <= 0}>
            <RemoveIcon
              className="bg-[#f0f0ec] rounded-full p-1 cursor-pointer"
              sx={{ fontSize: "25px" }}
            />
          </button>

          <h4 className="min-w-[20px] text-center">{count}</h4>
          <button onClick={() => setCount(count + 1)}>
            <AddIcon
              className={`${
                count > 0 ? "bg-Pink text-Light" : "bg-[#f0f0ec] text-Primary"
              } rounded-full p-1 cursor-pointer`}
              sx={{ fontSize: "25px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  e: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default ProductCard;
