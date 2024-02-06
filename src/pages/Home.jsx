import React, { useState } from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import Select from "react-select";
import { foodItemListDatas } from "../utills/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const homepageChefCard = [
  {
    id: 1,
    name: "Sophia Reynolds",
    designation: "Executive Chef",
    image: "https://themewagon.github.io/restoran/img/team-1.jpg",
    desc: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    id: 2,
    name: "Marco Rodriguez",
    designation: "Sous Chef",
    image: "https://themewagon.github.io/restoran/img/team-2.jpg",
    desc: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    id: 3,
    name: "Emily Chen",
    designation: "Pastry Chef",
    image: "https://themewagon.github.io/restoran/img/team-3.jpg",
    desc: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
  {
    id: 4,
    name: "Alejandro Martinez",
    designation: "Head Chef",
    image: "https://themewagon.github.io/restoran/img/team-4.jpg",
    desc: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
  },
];

export default function Home() {
  const [activepopularItems, setActivePopularItems] = useState("Breakfast");
  const [filterItem, setFilterItem] = useState([0, 10]);
  const [startBookDate, setStartBookDate] = useState();

  const [selectedPeoples, setSelectedPeoples] = useState(null);

  const handleChangePeoples = (e) => {
    setSelectedPeoples(e);
  };

  var settings = {
    centerMode: true,
    className: "center",
    // infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 8000,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 1000,
    arrows: false,
  };

  const peoples = [
    {
      value: 1,
      text: "People1",
    },
    {
      value: 2,
      text: "People2",
    },
    {
      value: 3,
      text: "People3",
    },
  ];
  const handlePopularItems = (e, filterCount) => {
    setActivePopularItems(e);
    setFilterItem(filterCount);
  };

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
            className="slideInLeft text-Light text-5xl font-bold w-[50%] pb-4"
            style={{ lineHeight: "60px" }}
          >
            Enjoy Our Delicious Foods
          </h1>
          <p className="slideInLeft w-[70%] text-Light font-semibold pb-8 ">
            Discover culinary bliss at QuickDine. Indulge in our delicious food,
            a symphony of flavors awaits. Elevate your dining experience with us
            today!"
          </p>
          <button className=" btn bg-Pink py-3 w-[150px] border-0 text-Light uppercase hover:bg-Pink">
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
      <div className="py-10 px-5 bg-Light flex flex-wrap justify-between items-center  my-element">
        <div className="group bg-white max-w-[300px] p-4 rounded hover:bg-Pink transition-colors duration-500 ease-in-out">
          <PeopleAltIcon
            className="my-3 text-Pink group-hover:text-Light"
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
        <div className="group bg-white max-w-[300px] p-4 rounded transition-colors duration-500 ease-in-out hover:bg-Pink">
          <RestaurantIcon
            className="my-3 text-Pink group-hover:text-Light"
            sx={{ fontSize: "50px" }}
          />
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
        <div className="group bg-white max-w-[300px] p-4 rounded transition-colors duration-500 ease-in-out hover:bg-Pink">
          <ShoppingCartIcon
            className="my-3 text-Pink group-hover:text-Light"
            sx={{ fontSize: "50px" }}
          />
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
        <div className="group bg-white max-w-[300px] p-4 rounded transition-colors duration-500 ease-in-out hover:bg-Pink">
          <HeadsetMicIcon
            className="my-3 text-Pink group-hover:text-Light"
            sx={{ fontSize: "50px" }}
          />
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
      <div className="pb-5 bg-Light px-5 flex flex-wrap items-center w-[100%]">
        <div className="w-[48%] flex flex-col gap-4 ">
          <div className="flex items-end gap-4">
            <div className="w-[300px] h-[300px]">
              <img
                className="aboutImg w-[100%] h-[100%] zoomIn"
                src="https://themewagon.github.io/restoran/img/about-1.jpg"
                alt=""
              />
            </div>
            <div className="mt-[25%] w-[225px] h-[225px]">
              <img
                className="aboutImg w-[100%] h-[100%]"
                src="https://themewagon.github.io/restoran/img/about-2.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex items-start flex-wrap gap-4">
            <div className="w-[225px] h-[225px] ml-[10.6%]">
              <img
                className="aboutImg w-[100%] h-[100%]"
                src="https://themewagon.github.io/restoran/img/about-3.jpg"
                alt=""
              />
            </div>
            <div className="w-[300px] h-[300px]">
              <img
                className="aboutImg w-[100%] h-[100%]"
                src="https://themewagon.github.io/restoran/img/about-4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[49%]">
          <div className="relative flex items-center gap-2">
            <h4
              className="text-xl text-Pink capitalize font-semibold"
              style={{ fontFamily: "'Satisfy', cursive" }}
            >
              about us
            </h4>
            <p className="h-0.5 w-12 text-Primary bg-Pink"></p>
          </div>
          <h2 className="text-4xl font-bold pb-6">
            Welcome to{" "}
            <RestaurantIcon
              className="my-3 text-Pink"
              sx={{ fontSize: "50px" }}
            />{" "}
            QuickDine
          </h2>
          <p className="leading-8 pb-2">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
            sit.
          </p>
          <p className="leading-8 pb-3">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="flex flex-wrap gap-[50px] pb-8">
            <div className="flex items-center justify-between gap-3">
              <p className="p-2 pl-4 border-l-4 border-Pink text-5xl text-Pink font-bold">
                15
              </p>
              <div>
                <h4 className="text-md font-medium">Years of</h4>
                <h4 className="font-semibold uppercase text-lg">experience</h4>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="p-2 pl-4 border-l-4 border-Pink text-5xl text-Pink font-bold">
                50
              </p>
              <div>
                <h4 className="text-md font-medium">Popular</h4>
                <h4 className="font-semibold uppercase text-lg">
                  Master Chefs
                </h4>
              </div>
            </div>
          </div>
          <button className="btn bg-Pink py-3 w-[150px] border-0 text-Light uppercase hover:bg-Pink">
            read more
          </button>
        </div>
      </div>
      <div className="bg-Light px-5 py-5">
        <div className="flex justify-center items-center pt-10 gap-1 pb-3">
          <p className="h-0.5 w-12 text-Primary bg-Pink"></p>
          <h4
            className="text-Pink font-semibold text-xl capitalize"
            style={{ fontFamily: "'Satisfy', cursive" }}
          >
            food menu
          </h4>
          <p className="h-0.5 w-12 text-Primary bg-Pink"></p>
        </div>
        <h2 className="text-center font-bold text-3xl capitalize">
          most popular items
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4 border-b border-Secondary w-fit m-auto pt-8">
          <div
            className={`w-[145px] flex items-center gap-2 cursor-pointer transition-colors duration-300 ${
              activepopularItems === "Breakfast"
                ? "border-b-2 border-Pink"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => handlePopularItems("Breakfast", [0, 10])}
          >
            <LocalCafeIcon
              className="my-3 text-Pink"
              sx={{ fontSize: "50px" }}
            />
            <div>
              <h4>Popular</h4>
              <h4 className="font-semibold">Breakfast</h4>
            </div>
          </div>
          <div
            className={`w-[145px] flex items-center gap-2 cursor-pointer transition-colors duration-300 ${
              activepopularItems === "Lunch"
                ? "border-b-2 border-Pink"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => handlePopularItems("Lunch", [11, 21])}
          >
            <LunchDiningIcon
              className="my-3 text-Pink"
              sx={{ fontSize: "50px" }}
            />
            <div>
              <h4>Special</h4>
              <h4 className="font-semibold">Lunch</h4>
            </div>
          </div>
          <div
            className={`w-[145px] flex items-center gap-2 cursor-pointer transition-colors duration-300 ${
              activepopularItems === "Dinner"
                ? "border-b-2 border-Pink"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => handlePopularItems("Dinner", [22, 32])}
          >
            <RestaurantIcon
              className="my-3 text-Pink"
              sx={{ fontSize: "50px" }}
            />
            <div>
              <h4>Lovely</h4>
              <h4 className="font-semibold">Dinner</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 w-[100%] py-10">
          {foodItemListDatas?.slice(filterItem[0], filterItem[1])?.map((e) => (
            <div className="flex items-center gap-5 w-[49%] m-auto">
              <div className="w-[80px] h-[80px] object-cover">
                <img
                  src={e?.image}
                  width={"100%"}
                  style={{ height: "100%" }}
                  alt=""
                />
              </div>
              <div className="w-[80%]">
                <div className="flex justify-between pb-1 border-b border-Secondary">
                  <h4 className="font-semibold">{e?.name}</h4>
                  <h4 className="text-Pink font-semibold">${e?.price}</h4>
                </div>
                <p className="pt-2 text-sm">
                  {e?.description.length > 40
                    ? e?.description.substring(0, 40) + ""
                    : e?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="home-page-video w-[50%]">
          <button
            type="button"
            className="btn-play-home"
            data-bs-toggle="modal"
            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
            data-bs-target="#videoModal"
          >
            <span></span>
          </button>
        </div>
        <div className="bg-Primary p-[2.9rem] w-[50%]">
          <div className="flex justify-start items-center gap-1 pb-3">
            <h4
              className="text-Pink font-semibold text-xl capitalize"
              style={{ fontFamily: "'Satisfy', cursive" }}
            >
              reservation
            </h4>
            <p className="h-0.5 w-12 text-Primary bg-Pink"></p>
          </div>
          <h2 className="text-Light text-3xl font-semibold capitalize">
            Book a table online
          </h2>
          <div className="w-[100%] flex flex-wrap gap-3 pt-5">
            <div className="form-floating w-[48%] relative">
              <input
                type="text"
                className="form-control px-[12px] w-[100%] py-[16px] text-[16px] font-medium border border-Secondary rounded-sm transition-colors transition"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-floating w-[48%] relative">
              <input
                type="email"
                className="form-control px-[12px]  w-[100%]  py-[16px]  text-[16px] font-medium border border-Secondary rounded-sm transition-colors transition"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div
              className="form-floating relative pt-1 w-[48%]"
              style={{
                "& .react-datepicker-wrapper": {
                  width: "100%",
                },
              }}
            >
              <DatePicker
                // showIcon
                showTimeInput
                selected={startBookDate}
                onChange={(date) => setStartBookDate(date)}
                placeholderText={"Date & Time"}
                className="px-[12px] py-[16px] border w-[100%] border-Secondary rounded focus:outline-none"
              />
            </div>
            <div className="form-floating pt-1  w-[48%] relative">
              <Select
                className="w-[100%]"
                styles={{
                  padding: "16px 12px",
                  "&.css-13cymwt-control": {
                    minHeight: "60px",
                    padding: "16px 12px",
                  },
                }}
                placeholder="Select a unit"
                isClearable={true}
                value={selectedPeoples}
                options={peoples}
                onChange={handleChangePeoples}
                getOptionLabel={(e) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "12px",
                    }}
                  >
                    {/* {e.icon} */}
                    <span style={{ marginLeft: 5, fontSize: "13px" }}>
                      {e.text}
                    </span>
                  </div>
                )}
              />
            </div>

            <div>
              <textarea
                rows="3"
                cols="80"
                type="text-area"
                className="form-control resize-none rounded-sm w-[100%] px-[12px] py-[16px]  text-[16px] font-medium border border-Secondary rounded-sm transition-colors transition"
                id="specialRequest"
                placeholder="Special Request"
              ></textarea>
            </div>
            <button className="bg-Pink w-[100%] py-3 rounded-sm uppercase text-Light">
              book now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-Light pt-10 my-element">
        <div className="flex justify-center items-center pt-10 gap-1 pb-3">
          <p className="h-0.5 w-12 text-Primary bg-Pink"></p>
          <h4
            className="text-Pink font-semibold text-xl capitalize"
            style={{ fontFamily: "'Satisfy', cursive" }}
          >
            Team Members
          </h4>
          <p className="h-0.5 w-12 text-Primary bg-Pink"></p>
        </div>
        <h4 className="font-semibold text-4xl capitalize text-center pb-6">
          our master chef's
        </h4>
        {/* <div className=" flex flex-wrap justify-evenly px-5 py-5">
          {homepageChefCard?.map((e) => (
            <div className="bg-white max-w-[300px] text-center rounded overflow-hidden group">
              <div className="rounded-full overflow-hidden m-4  transition-transform">
                <img
                  className="transition-all duration-500 group-hover:scale-110"
                  src={e?.image}
                  alt=""
                />
              </div>
              <h5 className="font-semibold">{e?.name}</h5>
              <small>{e?.designation}</small>

              <div className="flex justify-center mt-3 gap-3  transition-height gap-1 h-[0px] group-hover:h-[40px]">
                <a className="p-2bg-Pink text-Light p-2 bg-Pink rounded-t-full" href="">
                  <TwitterIcon />
                </a>
                <a className="p-2bg-Pink text-Light p-2 bg-Pink rounded-t-full" href="">
                  <TwitterIcon />
                </a>
                <a className="p-2bg-Pink text-Light p-2 bg-Pink rounded-t-full" href="">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          ))}
        </div> */}
        <div className=" flex flex-wrap justify-evenly px-5 py-5 h-[500px]">
          {homepageChefCard?.map((e, index) => (
            <div
              key={index}
              className="bg-white w-[300px] h-[360px] overflow-hidden pb-10 transition-all ease-in-out duration-500 text-center rounded  group hover:h-[405px] group hover:overflow-visible"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            >
              <div className="rounded-full overflow-hidden m-4  transition-transform">
                <img
                  className="transition-all duration-500 group-hover:scale-110"
                  src={e?.image}
                  alt=""
                />
              </div>
              <h5 className="font-semibold">{e?.name}</h5>
              <small>{e?.designation}</small>

              <div className="flex justify-center gap-3 pt-4 bg-white">
                <a className="p-2 bg-Pink text-Light rounded-t-full" href="">
                  <TwitterIcon />
                </a>
                <a className="p-2 bg-Pink text-Light rounded-t-full" href="">
                  <YouTubeIcon />
                </a>
                <a className="p-2 bg-Pink text-Light rounded-t-full" href="">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-Light pb-10 my-element">
        <div className="flex justify-center items-center pt-10 gap-1 pb-3">
          <p className="h-0.5 w-12 text-Primary bg-Pink"></p>
          <h4
            className="text-Pink font-semibold text-xl capitalize"
            style={{ fontFamily: "'Satisfy', cursive" }}
          >
            Testimonial
          </h4>
          <p className="h-0.5 w-12 text-Primary bg-Pink"></p>
        </div>
        <h4 className="font-semibold text-4xl capitalize text-center pb-6">
          our clients say !!!
        </h4>

        <div className=" px-5 py-5 mx-1 pb-10 overflow-hidden slider-container">
          <Slider className="testimonial" {...settings}>
            {homepageChefCard?.map((e, index) => (
              <div
                key={index}
                className="bg-white duration-500 transition-colors border  max-w-[420px] p-3  border-Secondary"
              >
                <FormatQuoteIcon
                  className="mb-3 text-Pink quoteIcon"
                  sx={{ fontSize: "50px" }}
                />
                <p>{e?.desc}</p>

                <div className="flex items-center pt-3">
                  <img
                    className="rounded-full w-[50px] h-[50px]"
                    src={e?.image}
                  />
                  <div className="ps-3">
                    <h5 className="mb-1 font-semibold">{e?.name}</h5>
                    <small>{e?.designation}</small>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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
