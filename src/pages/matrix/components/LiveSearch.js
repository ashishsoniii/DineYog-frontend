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
      { id: 4, plot: "Dine In", value: "dinein" },
      { id: 5, plot: "Dine Out", value: "dineout" },
      // { id: 6, plot: "All", value: "all" },
    ];
  } else {
    options = [
      { id: 7, plot: "All Day Brunch", value: "All Day Brunch" },
      { id: 8, plot: "Appetiser", value: "Appetiser" },
      { id: 9, plot: "Artisanal Pizza", value: "Artisanal Pizza" },
      { id: 10, plot: "Burgers & Sandwiches", value: "Burgers & Sandwiches" },
      { id: 11, plot: "Coffee", value: "Coffee" },
      { id: 12, plot: "Cold Pressed Juices", value: "Cold Pressed Juices" },
      { id: 13, plot: "Desserts", value: "Desserts" },
      { id: 14, plot: "Freshly Baked Bread", value: "Freshly Baked Bread" },
      { id: 15, plot: "Kulturd Kombucha", value: "Kulturd Kombucha" },
      { id: 16, plot: "Main Course", value: "Main Course" },
      { id: 17, plot: "Make Your Own Pizza", value: "Make Your Own Pizza" },
      { id: 18, plot: "Pasta", value: "Pasta" },
      { id: 19, plot: "Salads", value: "Salads" },
      { id: 20, plot: "Sides", value: "Sides" },
      { id: 21, plot: "Soup", value: "Soup" },
      { id: 22, plot: "Summer Coolers", value: "Summer Coolers" },
      { id: 23, plot: "TEA", value: "TEA" },
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
