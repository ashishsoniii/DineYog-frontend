import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import LoginAlert from "./LoginAlert";

function LiveSearch(props) {
  const [plotName, setPlotName] = useState([]);
  // eslint-disable-next-line
  const [displayOption, setDisplayOption] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select your option");
  // eslint-disable-next-line
  const [selectedOptionId, setSelectedOptionId] = useState(0);

  const selectMenuRef = useRef(null);

  const handleOptionClick = (item) => {
    setSelectedOption(item.plot);
    setSelectedOptionId(item.id);
    props.setDisplayStart(item.SingleYear);
    props.setDisplayEnd(item.YearChange);

    props.handleOptionClick(item);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOptionId(0);
    setSelectedOption("Select your option");
  }, [props.topic]); // reset the state variables when props.topic changes

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://dineyog-env-1.eba-47rmdqhp.eu-north-1.elasticbeanstalk.com/forcastdata/store?id=${props.topic}`,
          {
            // cancelToken: source.token,
            withCredentials: true, // Set withCredentials to true
          }
        );
        // const response = await axios.get(
        //   `http://127.0.0.1:5000/store?id=${props.topic}`,
        //   { withCredentials: true } // Alternative way to set withCredentials
        // );
        const { plot_name, display_option } = response.data;
        setPlotName(plot_name);
        setDisplayOption(display_option);
      } catch (error) {
        if (axios.isCancel(error)) {
          // Handle cancelation
        } else {
          // console.error(error);
        }
      }
    };
    fetchData();

    return () => {
      source.cancel(); // Cancel the request on cleanup
    };
  }, [props.topic]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectMenuRef.current &&
        !selectMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [selectMenuRef]);

  return (
    <div>
      <div className="select-container">
        <div
          className={`select-menu ${isOpen && props.loggedIn ? "active" : ""}`}
          ref={selectMenuRef}
        >
        {isOpen && !props.loggedIn
        && <LoginAlert setOpen ={props.setOpen} />
        }
          <button className="select-btn" onClick={() => setIsOpen(!isOpen)}>
            <span className="sBtn-text">{selectedOption}</span>
            <i className="bx bx-chevron-down"></i>
          </button>
          <ul className="options">
            {plotName.map((item) => (
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
