import React, { useState } from "react";
import LiveSearch from "./components/LiveSearch";
import Graph from "./Graph";
import "./Content.css";

function MatrixPlot(props) {
  const [selectedOptions, setSelectedOptions] = useState([
    { id: 101, option: "Type", value: "" },
    { id: 102, option: "Dine Out", value: "dineout" },
    { id: 103, option: "Category", value: "" },
  ]);

  const [temporalPossible, setTemporalPossible] = useState(false);
  const [daysPossible, setDaysPossible] = useState(false);
  const [monthPossible, setMonthPossible] = useState(false);
  const [weekendWeekday, setWeekendWeekday] = useState(true);

  const handleOptionClick = (index, item) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = {
      id: item.id,
      option: item.plot,
      value: item.value,
    };
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <>
      <div className="on-home-bg">
        <div className="main-home-text">{"Matrix Plot"}</div>
        <div className="main-home-sub-text">
          {props.topic} Lhiorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eveniet odit quo, maiores magni quod consequatur recusandae
          officia, sequi exercitationem, quos quaerat unde dolor accusamus
          corporis commodi dolores explicabo incidunt ducimus nulla ab? At
          doloribus dolores nam repellat sit sed eveniet nesciunt, est ratione
          alias vel consequatur necessitatibus, atque quos provident.
          {selectedOptions[0].value}
          {selectedOptions[1].value}
          {selectedOptions[2].value}
        </div>

        <div className="dashboard-look-main">
          <div className="dashboard-look">
            <div className="no-graph">Select Options to Start Analysis!</div>
            <div className="select-box-non-temporal">
              <LiveSearch
                topic={props.topic}
                selectedOptionId={selectedOptions[1].id}
                selectedOption={selectedOptions[1].option}
                handleOptionClick={(item) => handleOptionClick(1, item)}
              />
              <LiveSearch
                topic={props.topic}
                selectedOptionId={selectedOptions[2].id}
                selectedOption={selectedOptions[2].option}
                handleOptionClick={(item) => handleOptionClick(2, item)}
              />
            </div>
            {/* <div className="graph-div-set"> */}
          </div>
        </div>
        <Graph
          selectedOption1={selectedOptions[0].value}
          selectedOption2={selectedOptions[1].value}
          selectedOption3={selectedOptions[2].value}
          selectedOptionId1={selectedOptions[0].id}
          selectedOptionId2={selectedOptions[1].id}
          selectedOptionId3={selectedOptions[2].id}
          topic={props.topic}
          setTemporalPossible={setTemporalPossible}
          setDaysPossible={setDaysPossible}
          setMonthPossible={setMonthPossible}
          setWeekendWeekday={setWeekendWeekday}
        />
        {/* </div> */}
      </div>

      <br />
    </>
  );
}

export default MatrixPlot;
