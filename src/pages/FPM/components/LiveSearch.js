import React, { useState, useRef, useEffect } from "react";

function LiveSearch(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.selectedOption);
  const [selectedOptionId, setSelectedOptionId] = useState(
    props.selectedOptionId
  );

  // Create options based on selectedOption prop
  let options = [];
  if (props.selectedOptionId === 101 || props.selectedOptionId <= 2) {
    options = [
      { id: 1, plot: "Profit", value: "profit" },
      { id: 2, plot: "Sales", value: "sales" },
    ];
  } else if (props.selectedOptionId === 102 || props.selectedOptionId <= 6) {
    options = [
      { id: 4, plot: "Dine In", value: "Dine in" },
      { id: 5, plot: "Dine Out", value: "Dine out" },
      // { id: 6, plot: "All", value: "all" },
    ];
  } else {
    options = [
      { id: 7, plot: "2", value: "2" },
      { id: 8, plot: "3", value: "3" },
    ];
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
            <span className="sBtn-text">{selectedOption}</span>
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

export default LiveSearch;
