import React, { useState } from "react";
import LiveSearch from "./components/LiveSearch";
import Graph from "./Graph";
import "./Content.css"

function FPMAnalysis(props) {
  const [selectedOptions, setSelectedOptions] = useState([
    { id: 101, option: "Type", value: "" },
    { id: 102, option: "Dine Out", value: "Dine out" },
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
        <div className="main-home-text">{"FPM Analysis"}</div>
        <div className="main-home-sub-text">
          {props.topic} Lhiorem ipsum dolor sit, amet consectetur adipisicing
          elit. Eveniet odit quo, maiores magni quod consequatur recusandae
          officia, sequi exercitationem, quos quaerat unde dolor accusamus
          corporis commodi dolores explicabo incidunt ducimus nulla ab? At
          doloribus dolores nam repellat sit sed eveniet nesciunt, est ratione
          alias vel consequatur necessitatibus, atque quos provident.
          {selectedOptions[0].option}
          {selectedOptions[1].option}
          {selectedOptions[2].option}
        </div>
        <div className="select-box-non-temporal">
          {/* <LiveSearch
            topic={props.topic}
            selectedOptionId={selectedOptions[0].id}
            selectedOption={selectedOptions[0].option}
            handleOptionClick={(item) => handleOptionClick(0, item)}
          /> */}
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
    
    
      {/* {temporalPossible && (
        <Temporal
          selectedOptionA={selectedOptions[0].value}
          selectedOptionB={selectedOptions[1].value}
          selectedOptionC={selectedOptions[2].value}
          selectedOptionIdA={selectedOptions[0].id}
          selectedOptionIdB={selectedOptions[1].id}
          selectedOptionIdC={selectedOptions[2].id}
          topic={props.topic}
          temporalPossible={temporalPossible}
          setTemporalPossible = {setTemporalPossible}
          daysPossible={daysPossible}
          monthPossible={monthPossible}
          weekendWeekday={weekendWeekday}
          setDaysPossible={setDaysPossible}
          setMonthPossible={setMonthPossible}
          setWeekendWeekday={setWeekendWeekday}
        />
      )} */}
    </>
  );
}

export default FPMAnalysis;
