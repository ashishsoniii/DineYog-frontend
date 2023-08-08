import React, { useState, useRef, useEffect } from "react";

function TButton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.selectedOption);
  const [selectedOptionId, setSelectedOptionId] = useState(
    props.selectedOptionId
  );

  // daysPossible={props.daysPossible}
  // monthPossible={props.monthPossible}
  // weekendWeekday={props.weekendWeekday}

  // Create options based on selectedOption prop
  let options = [];
  if (props.selectedOptionId === 1001 || props.selectedOptionId <= 107) {
    options = [
      { id: 101, plot: "Monday", value: "Monday" },
      { id: 102, plot: "Tuesday", value: "Tuesday" },
      { id: 103, plot: "Wednesday", value: "Wednesday" },
      { id: 104, plot: "Thursday", value: "Thursday" },
      { id: 105, plot: "Friday", value: "Friday" },
      { id: 106, plot: "Saturday", value: "Saturday" },
      { id: 107, plot: "Sunday", value: "Sunday" },
    ];
  } else if (props.selectedOptionId === 2001 || props.selectedOptionId <= 212) {
    options = [
      { id: 201, plot: "January", value: "Jan" },
      { id: 202, plot: "February", value: "Feb" },
      { id: 203, plot: "March", value: "Mar" },
      { id: 204, plot: "April", value: "Apr" },
      { id: 208, plot: "August", value: "Aug" },
      { id: 209, plot: "Sepetember", value: "Sep" },
      { id: 210, plot: "October", value: "Oct" },
      { id: 211, plot: "November", value: "Nov" },
      { id: 212, plot: "December", value: "Dec" },
    ];
  } else {
    options = [
      { id: 301, plot: "Week", value: "week" },
      { id: 302, plot: "Month", value: "month" },
      // { id: 303, plot: "Week Day & Weekend", value: "weekdaysandweekend" },
    ];

    // options.push({ id: 301, plot: "Week", value: "week" });
    // options.push({ id: 302, plot: "Month", value: "month" });
    // options.push({
    //   id: 303,
    //   plot: "Week Day & Weekend",
    //   value: "weekdaysandweekend",
    // });

    if (props.weekendWeekday === true) {
      options.push({
        id: 303,
        plot: "Week Day & Weekend",
        value: "weekdaysandweekend",
      });
    }
    //     if (props.monthPossible === true) {
    //       options.push({ id: 302, plot: "Month", value: "month" });

    //       // options = options.filter((option) => option.id !== 303);
    //     }
    //     if (props.daysPossible === true) {
    //       options.push({ id: 301, plot: "Week", value: "week" });
    //     }
  }

  const selectMenuRef = useRef(null);

  const handleOptionClick = (item) => {
    setSelectedOption(item.plot);
    setSelectedOptionId(item.id);
    props.handleOptionClick(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectMenuRef.current &&
        !selectMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectMenuRef]);

  return (
    <div>
      <div className="select-container multi">
        <div
          className={`select-menu ${isOpen ? "active" : ""}`}
          ref={selectMenuRef}
        >
          <button className="select-btn" onClick={() => setIsOpen(!isOpen)}>
            <span className="sBtn-text">{props.selectedOption}</span>
            <i className="bx bx-chevron-down"></i>
          </button>
          <ul className="options">
            {options.map((item) => (
              <li
                className="option"
                key={item.id}
                onClick={() => {
                  handleOptionClick(item);
                }}
              >
                <span className="option-color"></span>
                <span className="option-text">{item.plot}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TButton;
