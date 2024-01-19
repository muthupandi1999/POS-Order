import React from "react";
import TimerIcon from "@mui/icons-material/Timer";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ScaleIcon from "@mui/icons-material/Scale";
import { useNavigate } from "react-router-dom";

function SingleReceipe() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="w-[100%] py-3 px-5 my-2 bg-Light">
        <div className="flex justify-between items-center mx-auto flex-wrap">
          <h4 className="text-Primary text-xl capitalize font-bold w-[50%]">
            Classic Chicken Pizza
          </h4>

          <button
            className="btn bg-blue-500 border-0 rounded text-Light hover:bg-blue-500 w-44 uppercase"
            onClick={() => navigate("/manage/food/all-receipes")}
          >
            Back To Recipe List
          </button>
        </div>
      </div>
      <div className="py-3 px-5 bg-Light">
        <ul className="flex justify-evenly items-center">
          <li className="flex flex-col justify-center items-center gap-1">
            <TimerIcon />
            <p>30mins</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-1">
            <ScaleIcon />
            <p>Easy</p>
          </li>
          <li className="flex flex-col justify-center items-center gap-1">
            <RestaurantIcon />
            <p>4Servings</p>
          </li>
        </ul>
      </div>
      <div className="my-2 w-[100%] bg-Light flex items-start justify-evenly">
        <div className=" p-3 w-[90%] ">
          <img
            src="https://img.freepik.com/premium-photo/chicken-bbq-ranch-pizza-served-dish-isolated-grey-background-side-view-fastfood_689047-1742.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais"
            alt=""
          />
        </div>
        <div>
          <div className="p-3">
            <h4 className="font-bold text-xl pb-2">Ingredients</h4>
            <ul className="flex gap-8">
              <li className="flex items-center py-2 gap-2">
                <p className="font-semibold">Chicken</p>
                <button className="min-w-[70px] min-h-max h-7 bg-Primary text-Light px-2 py-1 text-xs rounded-lg hover:bg-Primary">
                  20gram
                </button>
              </li>
              <li className="flex items-center py-2 gap-2">
                <p className="font-semibold">Onion</p>
                <button className="min-w-[70px] min-h-max h-7 bg-Primary text-Light px-2 py-1 text-xs rounded-lg hover:bg-Primary">
                  20gram
                </button>
              </li>
              <li className="flex items-center py-2 gap-2">
                <p className="font-semibold">Oil</p>
                <button className="min-w-[70px] min-h-max h-7 bg-Primary text-Light px-2 py-1 text-xs rounded-lg hover:bg-Primary">
                  100ml
                </button>
              </li>
            </ul>
          </div>
          <div className="p-3">
            <h4 className="font-bold text-xl pb-4">Instructions</h4>
            <p className=" text-md">
              Classic Chicken Pizza features a homemade crust topped with
              flavorful ingredients. For the dough, mix yeast, sugar, warm
              water, flour, salt, and olive oil. Roll out the dough, add pizza
              sauce, shredded mozzarella, cooked chicken, red onions, bell
              peppers, and black olives. Bake at 475°F (245°C) until golden.
              Garnish with oregano and garlic powder, then slice and enjoy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleReceipe;
