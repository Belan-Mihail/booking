import React from "react";
import "./Header.css";

import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // 28 and below to searcg button. also create navifate var (28) 
  // 29 add destination state (12) and onchage (93)
  // 30 list
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    
    <div className="header">
      <div
        className={
          // classname according type in header component exist list
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
          <i class="fa-solid fa-bed"></i>
            <span>Stays</span>
          </div>
          <div className="headerListItem">
          <i class="fa-solid fa-plane"></i>
            <span>Flights</span>
          </div>
          <div className="headerListItem">
          <i class="fa-solid fa-car"></i>
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
          <i class="fa-solid fa-bed"></i>
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
          <i class="fa-solid fa-taxi"></i>
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
              <i className="headerIcon" class="fa-solid fa-bed"></i> 
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
              <i className="headerIcon" class="fa-solid fa-calendar"></i> 
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
              <i class="fa-solid fa-person" className="headerIcon"></i>
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn specialBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;


// 1 add base html (header and list items with icons and span)
// 2 instal fontawesome for react
// 3 add styles
// 4 add header and description block and styles
// 5 add search div with 1 input and 2 span
// 6 install react date range npm install react-date-range
// 7 import and add started states (view example from docs) (date and SetDate in our case)
// 8 instal date-fns npm install date-fns --save to format js date to normal date 98-101
// 9 add open date state to show/hide date inputs 
// (96 - onclick and 102-103 openDate (means if openDate is True) && <DateRange>
// 10 openOption and setOpenOption - show/hide option inputs 
// 11 option and setOption = state to chose options
// default values (118) {`${options.adult} adult · ${options.children} children · ${options.room} room`}
// 12 add html for each options (adults, children and rooms) with button + count and button -
// 13 add styles
// 14 add handleOptions functions to each options items: (for example 169 and 178)
// onClick={() => handleOption("room", "i")} i-increase
// onClick={() => handleOption("room", "d")} d-discrease
// room and i/d = name and operation props in handleOption function (30)
// 15 add disable options to discrease button if value < 1 and styles
// 16 next list page (add navbar and header components) but step 17 Here. 
// 17 we don't want to show part of the header component on the List page. 
// so we pass the type property to Header components (11) it and wraps the HTML () 
// that we want to show only if the type property !== list (73).
// In List page we add list as type property inside header components to hide unnecessary for this page HTML   

