import React from "react";
import useLongPress from "../../components/events/LongPressEvent";

function ItemList({ setOpen }) {
  const productList = new Array(31).fill(null);

  const onLongPress = useLongPress();

  return (
    <>
      {productList.map((_, index) => (
        <div
          key={index}
          className={`card bg-Secondary cursor-pointer rounded-md m-1 relative ${
            index === 1 ? "border-[#0c8d0c] border-b-4" : ""
          }${index === 2 ? " border-[#FF8F8F] border-b-4" : ""}${
            index === 3 ? " border-[#ffa500] border-b-4" : ""
          } ${
            index !== 2 && index !== 3 ? " border-[#0c8d0c] border-b-4" : ""
          }`}
          onClick={() => console.log("click still working")}
          {...onLongPress(() => setOpen(true))}
        >
          <div className="card-body items-center text-center">
            <h4 className="text-Primary font-medium text-sm">Chicken</h4>
          </div>
          <span className="absolute right-[-4%] top-[-4%] text-Light bg-Primary w-6 h-6 rounded-full flex justify-center items-center text-xs">
            1
          </span>
        </div>
      ))}
    </>
  );
}

export default ItemList;
