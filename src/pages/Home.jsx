import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const homepageCard = [
  {
    id: 1,
    title: "master chefs",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 2,
    title: "quality food",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 3,
    title: "online order",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 4,
    title: "24/7 service",
    description:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
];

export default function Home() {
  return (
    <div className="max-w-[1440px] m-auto">
      <div
        style={{
          background:
            "linear-gradient(rgba(69, 72, 89, .9), rgba(69, 72, 89, .9)), url(https://themewagon.github.io/restoran/img/bg-hero.jpg)",
        }}
        className="bg-center bg-no-repeat bg-cover flex justify-between items-center py-10 px-10"
      >
        <div>
          <h1
            className="text-Light text-5xl font-bold w-[50%] pb-4"
            style={{ lineHeight: "60px" }}
          >
            Enjoy Our Delicious Foods
          </h1>
          <p className="w-[70%] text-Light font-semibold pb-8 ">
            Discover culinary bliss at QuickDine. Indulge in our delicious food,
            a symphony of flavors awaits. Elevate your dining experience with us
            today!"
          </p>
          <button className="btn bg-Pink py-3 w-[150px] border-0 text-Light uppercase hover:bg-Pink">
            Book a table
          </button>
        </div>
        <div className="headerRightSection">
          <img
            src="https://themewagon.github.io/restoran/img/hero.png"
            alt=""
          />
        </div>
      </div>
      <div className="py-10 px-3 flex flex-wrap justify-between items-center">
        <div className="group bg-Light max-w-[300px] p-4 rounded hover:bg-Pink transition-colors duration-500 ease-in-out">
          <PeopleAltIcon
            className="my-3 group-hover:text-Light"
            sx={{ fontSize: "50px" }}
          />
          <h4
            className={
              "text-xl capitalize pb-2 font-semibold group-hover:text-Light"
            }
          >
            master chefs
          </h4>
          <p className="text-md group-hover:text-Light">
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
            diam
          </p>
        </div>
        <div className="group bg-Light max-w-[300px] p-4 rounded transition-colors duration-500 ease-in-out hover:bg-Pink">
          <RestaurantIcon className="my-3 group-hover:text-Light" sx={{ fontSize: "50px" }} />
          <h4
            className={
              "text-xl capitalize pb-2 font-semibold group-hover:text-Light"
            }
          >
            quality foods
          </h4>
          <p className="text-md group-hover:text-Light">
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
            diam
          </p>
        </div>
        <div className="group bg-Light max-w-[300px] p-4 rounded transition-colors duration-500 ease-in-out hover:bg-Pink">
          <ShoppingCartIcon className="my-3 group-hover:text-Light" sx={{ fontSize: "50px" }} />
          <h4
            className={
              "text-xl capitalize pb-2 font-semibold group-hover:text-Light"
            }
          >
            online order
          </h4>
          <p className="text-md group-hover:text-Light">
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
            diam
          </p>
        </div>
        <div className="group bg-Light max-w-[300px] p-4 rounded transition-colors duration-500 ease-in-out hover:bg-Pink">
          <HeadsetMicIcon className="my-3 group-hover:text-Light" sx={{ fontSize: "50px" }} />
          <h4
            className={
              "text-xl capitalize pb-2 font-semibold group-hover:text-Light"
            }
          >
            24/7 services
          </h4>
          <p className="text-md group-hover:text-Light">
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
            diam
          </p>
        </div>
      </div>
    </div>
    // <div className="flex flex-col gap-y-4">
    //   <div className="flex items-center justify-center gap-y-4 flex-col mt-16">
    //     {/* <h2 className="text-3xl text-white font-semibold">
    //       <Translate text="Localization Setup Integrated" />
    //     </h2>
    //     <Select
    //       defaultValue={localStorage.getItem("locale") ?? "en"}
    //       className="h-16 w-20"
    //       style={{
    //         width: "200px",
    //       }}
    //       options={languages}
    //     /> */}
    //   </div>

    //   <h2 className="text-3xl text-center text-white font-semibold mt-20">
    //     {/* <Translate text="Libraries used in this stater" /> */}
    //   </h2>
    //   <div className="grid grid-cols-5 items-center justify-center px-16 gap-4 text-LightGray">
    //     <Card title="Ant Design" />
    //     <Card title="React Intl" />
    //     <Card title="React Query" />
    //     <Card title="Axios" />
    //     <Card title="Vite-Plugin-SVGR" />
    //     <Card title="React-Router-DOM" />
    //     <Card title="Lazy Loading" />
    //     <Card title="Dayjs" />
    //     <Card title="TailwindCSS" />
    //     <Card title="Sass" />
    //   </div>
    // </div>
  );
}
