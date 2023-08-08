import React, { useEffect, useState } from "react";
import "./Temporal.css";
import TButton from "./T_Button";
import GraphTemporal from "./Graph_Temporal";

function Temporal(props) {
  const [selectedOptions, setSelectedOptions] = useState([
    { id: 1001, option: "Select Week", value: "" },
    { id: 2001, option: "Select Month", value: "" },
    { id: 3001, option: "Select Type", value: "" },
  ]);

  useEffect(() => {
    // console.log("Props updated:", props.selectedOptionA, props.selectedOptionB, props.selectedOptionC);

    setSelectedOptions([
      { id: 1001, option: "Select Week", value: "" },
      { id: 2001, option: "Select Month", value: "" },
      { id: 3001, option: "Select Type", value: "" },
    ]);
    // console.log("Props updated:", props.selectedOptionA, props.selectedOptionB, props.selectedOptionC);
    // console.log(selectedOptions[1].option);

    // props.setTemporalPossible(false);
  }, [props.selectedOptionA, props.selectedOptionB, props.selectedOptionC]);

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
      {/* <section className="temporal-bg"> */}
        {/* .{props.selectedOptionA}
        {props.selectedOptionB}
        {props.selectedOptionC}

        temporalPossible={temporalPossible}
          daysPossible={daysPossible}
          monthPossible={monthPossible}
          weekendWeekday={weekendWeekday} */}


          <div className="dashboard-look-main">
          <div className="dashboard-look">

          <div className="no-graph Temporal">
          Select any option to get into deep! {props.selectedOptionD}
          {/* No data found for the selected options! */}
        </div>
        <div className="select-box-non-temporal temporal-btn">
          {1 && (
            <TButton
              topic={props.topic}
              selectedOptionId={selectedOptions[2].id}
              selectedOption={selectedOptions[2].option}
              handleOptionClick={(item) => handleOptionClick(2, item)}
              daysPossible={props.daysPossible}
              monthPossible={props.monthPossible}
              weekendWeekday={props.weekendWeekday}
            />
          )}

          {props.daysPossible && selectedOptions[2].id === 301 && (
            <TButton
              topic={props.topic}
              selectedOptionId={selectedOptions[0].id}
              selectedOption={selectedOptions[0].option}
              handleOptionClick={(item) => handleOptionClick(0, item)}
            />
          )}
          {props.monthPossible && selectedOptions[2].id === 302 && (
            <TButton
              topic={props.topic}
              selectedOptionId={selectedOptions[1].id}
              selectedOption={selectedOptions[1].option}
              handleOptionClick={(item) => handleOptionClick(1, item)}
            />
          )}
        </div>
        </div>
        </div>
      {/* </section> */}
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <div className="tempo_graph">
    

      <GraphTemporal
        selectedOptionA={props.selectedOptionA}
        selectedOptionB={props.selectedOptionB}
        selectedOptionC={props.selectedOptionC}
        selectedOptionD={selectedOptions[0].value}
        selectedOptionE={selectedOptions[1].value}
        selectedOptionF={selectedOptions[2].value}
        // selectedOptionId1={selectedOptions[0].id}
        // selectedOptionId2={selectedOptions[1].id}
        // selectedOptionId3={selectedOptions[2].id}
        topic={props.topic}
      />
      </div>
    </>
  );
}

export default Temporal;

// setDaysPossible={setDaysPossible}
// setMonthPossible={setMonthPossible}
// setWeekendWeekday={setWeekendWeekday}

// temporalPossible={temporalPossible}
// daysPossible={daysPossible}
// monthPossible={monthPossible}
// weekendWeekday={weekendWeekday}
