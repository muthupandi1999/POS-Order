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
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookingModal from "../components/modals/modalComponents/BookingModal";

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
  const [openModal, setOpenModal] = useState(false)
  const [startBookDate, setStartBookDate] = useState();
  const [startBookTime, setStartBookTime] = useState();

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Generate time slots every 30 minutes from 9:00 AM to 9:00 PM
  const generateTimeSlots = () => {
    const slots = [];
    const startTime = 9 * 60; // 9:00 AM in minutes
    const endTime = 23 * 60; // 11:00 PM in minutes
    const interval = 60; // 30 minutes interval
  
    for (let i = startTime; i < endTime; i += interval) {
      const hour = Math.floor(i / 60);
      const minute = i % 60;
      let ampm = 'AM';
      let displayHour = hour;
      
      if (hour >= 12) {
        ampm = 'PM';
        if (hour > 12) {
          displayHour -= 12;
        }
      }
      
      if (hour === 0) {
        displayHour = 12;
      }
      
      const timeString = `${displayHour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${ampm}`;
      slots.push({ value: timeString, label: timeString });
    }
  
    return slots;
  };
  
  const bookedTimeSlots = ["09:00 AM", "12:00 PM", "03:00 PM"];

  // Function to check if a time slot is disabled (booked)
  const isDisabledTimeSlot = (timeSlot) => {
    return bookedTimeSlots.includes(timeSlot.value);
  };

  // Filter out disabled time slots
  const filteredTimeSlots = generateTimeSlots()

  const getOptionLabel = (option) => {
    const isDisabled = isDisabledTimeSlot(option);
    return (
      <button
        className={`px-2 text-sm m-1 ${isDisabled ? 'opacity-[0.2] cursor-not-allowed' : 'text-Primary'} `}
        disabled={isDisabled}
        onClick={() => !isDisabled && setSelectedTimeSlot(option)}
        
      >
        {option.label}
      </button>
    );
  };

  const handleChangeTimeSlot = (selectedOption) => {
    setSelectedTimeSlot(selectedOption);
  };
  const [selectedPeoples, setSelectedPeoples] = useState(null);

  const navigate = useNavigate();

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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
        },
      },
    ],
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
        className="bg-center bg-no-repeat bg-cover flex flex-col-reverse gap-4 justify-between items-center px-4 py-5 md:flex-row md:py-10 md:px-10"
      >
        <div>
          <h4
            style={{ fontFamily: "Caveat, cursive" }}
            className="text-Light capitalize font-semibold pb-3 text-2xl md:text-4xl "
          >
            on-the-go goodness
          </h4>
          <h1
            className="slideInLeft text-Light  uppercase font-bold text-2xl w-[80%] pb-4 md:text-[60px] md:leading-[70px]"
            // style={{ lineHeight: "70px" }}
          >
            Quick bites, big flavors
          </h1>
          <p className="slideInLeft  text-Light  text-sm font-semibold pb-8 md:text-xl md:w-[70%] md:tracking-[1px]">
            Don't wait for food, let food wait for you!
          </p>
          <button
            className=" btn bg-Pink py-4 w-[200px] border-0 text-Light uppercase hover:bg-Pink"
            onClick={() => navigate("/test")}
          >
            Order Here
          </button>
        </div>
        <div className="headerRightSection">
          <img
            className="w-[78%] m-auto sm:w-[50%]"
            src="https://themewagon.github.io/restoran/img/hero.png"
            alt=""
          />
        </div>
      </div>
      <div className="py-5 px-5 bg-Light flex flex-wrap gap-5 justify-between items-center  my-element md:py-10 md:gap-0">
        <div className="group bg-white max-w-[300px] m-auto p-4 rounded hover:bg-Pink transition-colors duration-500 ease-in-out">
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
        <div className="group bg-white max-w-[300px] m-auto p-4 rounded transition-colors duration-500 ease-in-out hover:bg-Pink">
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
        <div className="group bg-white max-w-[300px] m-auto p-4 rounded transition-colors duration-500 ease-in-out hover:bg-Pink">
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
        <div className="group bg-white max-w-[300px] m-auto p-4 rounded transition-colors duration-500 ease-in-out hover:bg-Pink">
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
      <div className="pb-5 bg-Light px-5 flex flex-col-reverse flex-wrap items-center gap-4 w-[100%] md:flex-row md:gap-3">
        <div className="w-[100%] flex flex-col gap-4 md:w-[48%] ">
          <div className="flex flex-wrap justify-center items-end gap-4">
            <div className="w-[128px] h-[128px] sm:w-[190px] sm:h-[190px] lg:w-[300px] lg:h-[300px]">
              <img
                className="aboutImg w-[100%] h-[100%] zoomIn"
                src="https://themewagon.github.io/restoran/img/about-1.jpg"
                alt=""
              />
            </div>
            <div className="w-[96px] h-[96px] sm:w-[135px] sm:h-[135px] lg:w-[225px] lg:h-[225px] md:mt-[25%]">
              <img
                className="aboutImg w-[100%] h-[100%]"
                src="https://themewagon.github.io/restoran/img/about-2.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-start flex-wrap gap-4">
            <div className="w-[96px] h-[96px] sm:w-[135px] sm:h-[135px] lg:w-[225px] lg:h-[225px] ml-[10.6%]">
              <img
                className="aboutImg w-[100%] h-[100%]"
                src="https://themewagon.github.io/restoran/img/about-3.jpg"
                alt=""
              />
            </div>
            <div className="w-[128px] h-[128px] sm:w-[190px] sm:h-[190px] lg:w-[300px] lg:h-[300px]">
              <img
                className="aboutImg w-[100%] h-[100%]"
                src="https://themewagon.github.io/restoran/img/about-4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="md:w-[49%]">
          <div className="relative flex items-center gap-2">
            <h4
              className="text-xl text-Pink capitalize font-semibold"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              about us
            </h4>
            <p className="h-0.5 w-12 text-Primary bg-Pink"></p>
          </div>
          <h2 className="text-4xl font-bold pb-6">
            Welcome to{" "}
            <RestaurantIcon
              className="my-3 text-Pink text-2xl md:text-4xl"
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
            style={{ fontFamily: "Caveat, cursive" }}
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
            className={`w-[100%] flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 md:w-[145px] ${
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
            className={`w-[100%] flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 md:w-[145px] ${
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
            className={`w-[100%] flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 md:w-[145px] ${
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
          {foodItemListDatas?.slice(filterItem[0], filterItem[1])?.map((e, index) => (
            <div key={index} className="flex items-center gap-5  m-auto md:w-[49%]">
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
      <div className="flex flex-col-reverse md:flex-row">
        <div className="home-page-video w-[100%] md:w-[50%]">
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
        <div className="bg-Primary p-[1.9rem] w-[100%] md:w-[50%] md:p-[2.9rem]">
          <div className="flex justify-start items-center gap-1 pb-3">
            <h4
              className="text-Pink font-semibold text-xl capitalize"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              reservation
            </h4>
            <p className="h-0.5 w-12 text-Primary bg-Pink"></p>
          </div>
          <h2 className="pt-4 text-Light text-5xl font-semibold capitalize leading-[70px">
            Get a 25% off for tables booking online
          </h2>
          <h4 className="text-Light pt-4 leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet distinctio tenetur vero similique sapiente voluptatibus qui expedita. Consequatur velit quis illum?</h4>
          <div className="w-[100%] flex flex-wrap justify-between gap-3 pt-10">
            <div className="form-floating relative w-[100%] md:w-[48%] ">
              <input
                type="text"
                className="form-control px-[12px] w-[100%] py-[5px] text-[16px] font-medium border border-Secondary rounded-sm transition-colors focus:outline-none"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-floating relative w-[100%] md:w-[48%] ">
              <input
                type="email"
                className="form-control px-[12px]  w-[100%]  py-[5px]  text-[16px] font-medium border border-Secondary rounded-sm transition-colors focus:outline-none"
                id="email"
                placeholder="Your Email"
              />
            </div>
            {/* <div
              className="form-floating relative pt-1 w-[100%] md:w-[48%]"
              style={{
                // "& .react-datepicker-wrapper": {
                //   width: "100%",
                // },
              }}
            >
              <DatePicker
                selected={startBookDate}
                onChange={(date) => setStartBookDate(date)}
                placeholderText={"Select Date"}
                className="px-[12px] py-[5px] border w-[100%] border-Secondary rounded focus:outline-none"
              />
            </div>
            <div className="form-floating pt-1 relative w-[100%] md:w-[48%]">
              <Select
                className="w-[100%]"
                placeholder="Select a time slot"
                isClearable={true}
                value={selectedTimeSlot}
                options={filteredTimeSlots}
                onChange={handleChangeTimeSlot}
                getOptionLabel={getOptionLabel}
              />
            </div> */}
            {/* <div
              className="form-floating relative pt-1 w-[100%] md:w-[48%]"
              style={{
                "& .react-datepicker-wrapper": {
                  width: "100%",
                },
              }}
            >
              <DatePicker
                 showTimeSelect
                 showTimeSelectOnly
                 timeIntervals={15}
                 timeCaption="Time"
                 dateFormat="h:mm aa"
                selected={startBookTime}
                onChange={(date) => setStartBookTime(date)}
                placeholderText={"Select Time"}
                className="px-[12px] py-[5px] border w-[100%] border-Secondary rounded focus:outline-none"
              />
            </div> */}
            {/* <div className="form-floating pt-1 relative w-[100%] md:w-[100%] ">
              <Select
                className="w-[100%]"
                styles={{
                  padding: "16px 12px",
                  "&.css-13cymwt-control": {
                    minHeight: "60px",
                    padding: "16px 12px",
                  },
                }}
                placeholder="Select a people count"
                isClearable={true}
                value={selectedPeoples}
                options={peoples}
                onChange={handleChangePeoples}
                getOptionLabel={(e) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ marginLeft: 5, fontSize: "16px" }}>
                      {e.text}
                    </span>
                  </div>
                )}
              />
            </div> */}

            {/* <div>
              <textarea
                rows="3"
                cols="80"
                type="text-area"
                className="form-control resize-none rounded-sm w-[100%] px-[12px] py-[5px]  text-[16px] font-medium border border-Secondary  transition-colors focus:outline-none"
                id="specialRequest"
                placeholder="Special Request"
              ></textarea>
            </div> */}
            <button className="bg-Pink w-[100%] py-3 rounded-sm uppercase text-Light mt-4" onClick={() => setOpenModal(true)}>
              book now
            </button>

            <BookingModal openModal={openModal} setOpenModal={setOpenModal}/>
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
        <div className=" flex flex-wrap gap-12 justify-evenly px-5 py-5 min-h-[500px]">
          {homepageChefCard?.map((e, index) => (
            <div
              key={index}
              className="bg-white w-[300px] h-[387px]  pb-10 transition-all ease-in-out duration-500 text-center rounded  group hover:h-[405px] group hover:overflow-visible md:overflow-hidden md:h-[360px] md:w-[300px]"
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
  );
}
