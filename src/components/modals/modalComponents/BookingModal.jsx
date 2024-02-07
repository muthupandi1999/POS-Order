import React, { useState, useEffect } from "react";
import DynamicModal from "../DynamicModal";
import CloseIcon from "@mui/icons-material/Close";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import {
  bookedTimeSlots,
  bookedTimeSlotsForVip,
  peoples,
  monthNames,
  daysOfWeek,
} from "../../../utills/data";

const colourStyles = {
  menuList: (styles) => ({
    ...styles,
    background: "#f8f8f8",
    fontSize: "14px",
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    background: isFocused ? "#FF6969" : isSelected ? "#454859" : undefined,
    color: isFocused ? "#F9F7F7" : isSelected ? "#F9F7F7" : undefined,
    zIndex: 1,
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,
  }),
  
};

function BookingModal({ openModal, setOpenModal }) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 to match the format of selected month
  const [selectedPeoples, setSelectedPeoples] = useState({
    value: 1,
    text: "Person1 ",
  });
  const [selectedMonth, setSelectedMonth] = useState(
    `${currentYear}-${currentMonth.toString().padStart(2, "0")}`
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedBookingTimeSlot, setSelectedBookingTimeSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dates, setDates] = useState([]);
  const [showSlots, setShowSlots] = useState(null);

  //Datas

  // Generate time slots every 30 minutes from 9:00 AM to 9:00 PM
  const generateTimeSlots = () => {
    const slots = [];
    const startTime = 9 * 60; // 9:00 AM in minutes
    const endTime = 23 * 60; // 11:00 PM in minutes
    const interval = 60; // 30 minutes interval

    for (let i = startTime; i < endTime; i += interval) {
      const hour = Math.floor(i / 60);
      const minute = i % 60;
      let ampm = "AM";
      let displayHour = hour;

      if (hour >= 12) {
        ampm = "PM";
        if (hour > 12) {
          displayHour -= 12;
        }
      }

      if (hour === 0) {
        displayHour = 12;
      }

      const timeString = `${displayHour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")} ${ampm}`;
      slots.push({ value: timeString, label: timeString });
    }

    return slots;
  };
  const filteredTimeSlots = generateTimeSlots();

  // Function to check if a time slot is disabled (booked)
  const isDisabledTimeSlotForVIP = (timeSlot) => {
    return bookedTimeSlotsForVip.includes(timeSlot.value);
  };

  const isDisabledTimeSlot = (timeSlot) => {
    return bookedTimeSlots.includes(timeSlot.value);
  };

  // Filter out disabled time slots
  const getOptionLabel = (option) => {
    // const isDisabled = isDisabledTimeSlot(option);
    return (
      <button
        className={`px-2 text-sm py-1 "text-Primary"
        `}
        // disabled={isDisabled}
        onClick={() => setSelectedTimeSlot(option)}
      >
        {option.label}
      </button>
    );
  };

  const handleChangePeoples = (e) => {
    setSelectedPeoples(e);
  };

  const handleBookingSlotSelect = (selectedTimeSlots) => {
    setSelectedBookingTimeSlot(selectedTimeSlots);
  };

  const handleTimeSlotClick = (e) => {
    setSelectedTimeSlot(e);
    // Find the index of the selected time slot
  };

  // Function to get the dates of the selected month
  const getDatesOfMonth = (selectedMonth) => {
    const [year, month] = selectedMonth.split("-");
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);

    const dates = [];
    let currentDatePointer = new Date(firstDayOfMonth);

    // Push dates until reaching the last day of the month
    while (currentDatePointer <= lastDayOfMonth) {
      dates.push(new Date(currentDatePointer));
      currentDatePointer.setDate(currentDatePointer.getDate() + 1); // Move to the next day
    }

    return dates;
  };

  const renderDateButtons = () => {
    return dates.map((date, index) => (
      <div
        key={index}
        className="select-none relative"
        onClick={() => handleDateClick(date)}
      >
        <p className="day text-xs text-center pb-2">
          {daysOfWeek[date.getDay()]}
        </p>
        <button
          key={date.getDate()}
          className={`text-center p-[10px] cursor-pointer w-10 h-10 flex items-center justify-center border-none transition-colors duration-300 ease-in-out ${
            isActiveDate(date)
              ? "bg-Pink text-Light"
              : "bg-[#4548591d] text-Black"
          }`}
        >
          <div className="date">{date.getDate()}</div>
        </button>
        {console.log("Date", date)}
        {new Date(date).getDate() === new Date().getDate() && (
          <p className="w-2 h-2 absolute bottom-[-4px] right-2 bg-Primary rounded-full"></p>
        )}
      </div>
    ));
  };

  const isActiveDate = (date) => {
    // Determine if the date is active (e.g., matches selectedDate)
    return date.getDate() === selectedDate?.getDate();
  };

  const handleDateClick = (selectedDate) => {
    // Handle the selected date here, for example, set it to state
    setSelectedDate(selectedDate);
  };

  const handleInputClose = () => {
    setOpenModal(false);
  };

  const handleMonthChange = (selectedOption) => {
    setSelectedMonth(selectedOption.value);
  };

  const monthsOptions = [];
  for (let i = 0; i < 12; i++) {
    const month = (currentMonth + i) % 12 || 12; // Ensure month is not 0
    const year = currentYear + Math.floor((currentMonth + i - 1) / 12);
    const monthYear = `${monthNames[month - 1]} ${year}`; // Subtract 1 to match the array index
    monthsOptions.push({
      value: `${year}-${month.toString().padStart(2, "0")}`,
      label: monthYear,
    });
  }

  useEffect(() => {
    // Update the dates when the selected month changes
    setDates(getDatesOfMonth(selectedMonth));
  }, [selectedMonth]);

  useEffect(() => {
    const selectedIndex = filteredTimeSlots?.findIndex(
      (slot) => slot.value === selectedTimeSlot?.value
    );

    // Extract the previous three and next three time slots
    const startIdx = Math.max(0, selectedIndex - 3);
    const endIdx = Math.min(filteredTimeSlots?.length, selectedIndex + 4);
    const nearbyTimeSlots = filteredTimeSlots?.slice(startIdx, endIdx);

    setShowSlots(nearbyTimeSlots);
  }, [selectedTimeSlot]);

  return (
    <DynamicModal
      open={openModal}
      onClose={handleInputClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      maxWidth={600}
    >
      <div className="max-w-[600px]">
        <div className="py-3 flex justify-between items-center">
          <h4 className="text-md capitalize font-semibold text-Primary">
            New Table Booking
          </h4>
          <CloseIcon onClick={handleInputClose} className="cursor-pointer" />
        </div>

        <div className="pt-4">
          <div className="w-[100%] flex justify-end items-center relative">
            <Select
              options={monthsOptions}
              onChange={handleMonthChange}
              value={monthsOptions.find(
                (option) => option.value === selectedMonth
              )}
              placeholder="Select Month"
              className="w-[100%] md:w-[30%]"
              styles={colourStyles}
            />
           
          </div>

          <div className="dates pt-6 pb-4 flex flex-row gap-2 overflow-x-scroll border-b border-Secondary">
            {renderDateButtons()}
          </div>

          <div className="flex justify-between flex-wrap items-center pt-5">
            <div className="form-floating pt-1 relative w-[100%] md:w-[48%] ">
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
                      fontWeight: 400,
                    }}
                  >
                    <span style={{ marginLeft: 5, fontSize: "14px" }}>
                      {e.text}
                    </span>
                  </div>
                )}
              />
               {/* <PersonOutlineOutlinedIcon className="absolute left-0 top-0" /> */}
            </div>
            <div className="form-floating pt-1 relative w-[100%] md:w-[48%]">
              <Select
                className="w-[100%]"
                placeholder="Select a time slot"
                isClearable={true}
                value={selectedTimeSlot}
                options={filteredTimeSlots}
                onChange={handleTimeSlotClick}
                getOptionLabel={getOptionLabel}
              />
            </div>
          </div>
          {selectedTimeSlot !== null && (
            <div className="pt-4 transition-height duration-1000 ease-out">
              <h4 className="font-semibold text-md">
                Future availability around {selectedTimeSlot?.label}
              </h4>

              <div className="pt-4">
                <h6 className="font-semibold text-sm pb-2">Dining Room</h6>

                <div className="flex gap-2 overflow-x-auto ">
                  {showSlots?.map((timeSlot, index) => (
                    <button
                      key={index}
                      className={`text-center text-xs cursor-pointer p-2 h-10 w-[75px] rounded-lg flex items-center justify-center border-none transition-colors duration-300 ease-in-out ${
                        isDisabledTimeSlot(timeSlot)
                          ? "opacity-[0.4] bg-[#4548591d] cursor-not-allowed"
                          : selectedBookingTimeSlot === timeSlot
                          ? "bg-Pink text-Light"
                          : "bg-Primary text-Light hover:bg-Pink"
                      }`}
                      onClick={() => handleBookingSlotSelect(timeSlot)}
                      disabled={isDisabledTimeSlot(timeSlot)}
                    >
                      {timeSlot.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <h6 className="font-semibold text-sm pb-2">VIP Dining Room</h6>

                <div className="flex gap-2 overflow-x-auto ">
                  {showSlots?.map((timeSlot, index) => (
                    <button
                      key={index}
                      className={`text-center text-xs cursor-pointer p-2 h-10 w-[75px] rounded-lg flex items-center justify-center border-none transition-colors duration-300 ease-in-out ${
                        isDisabledTimeSlotForVIP(timeSlot)
                          ? "opacity-[0.4] bg-[#4548591d] cursor-not-allowed"
                          : selectedBookingTimeSlot === timeSlot
                          ? "bg-Pink text-Light"
                          : "bg-Primary text-Light hover:bg-Pink"
                      }`}
                      onClick={() => handleBookingSlotSelect(timeSlot)}
                      disabled={isDisabledTimeSlotForVIP(timeSlot)}
                    >
                      {timeSlot.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <button
            className="w-full bg-Primary text-Light text-sm text-center py-3 rounded mt-8"
            onClick={() => {}}
          >
            Continue
            <ArrowForwardIcon
              className="text-Light ml-1"
              sx={{ fontSize: "18px" }}
            />
          </button>
        </div>
      </div>
    </DynamicModal>
  );
}

export default BookingModal;
