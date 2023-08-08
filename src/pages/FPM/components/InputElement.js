import React, { useState } from "react";
import { render } from "react-dom";
import "./style.css";

const InpurElement = (props) => {
  const [active, setActive] = useState((props.locked && props.active) || false);
  const [value, setValue] = useState(props.value || "");
  const [error, setError] = useState(props.error || "");
  const label = props.label || "Label";

  const changeValue = (event) => {
    const value = event.target.value;
    setValue(value);
    setError("");
  };

  const handleKeyPress = (event) => {
    if (event.which === 13) {
      setValue(props.predicted);
    }
  };

  const onFocus = () => {
    if (!props.locked) {
      setActive(true);
    }
  };

  const onBlur = () => {
    if (!props.locked) {
      setActive(false);
    }
  };

  const predictedValue =
    active && value && props.predicted && props.predicted.includes(value)
      ? props.predicted
      : null;

  const fieldClassName = `field ${(props.locked ? active : active || value) &&
    "active"} ${props.locked && !active && "locked"}`;

  return (
    <div className={fieldClassName}>
      {predictedValue && <p className="predicted">{predictedValue}</p>}
      <InpurElement
        id={1}
        type="text"
        value={value}
        placeholder={label}
        onChange={changeValue}
        onKeyPress={handleKeyPress}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <label htmlFor={1} className={error && "error"}>
        {error || label}
      </label>
    </div>
  );
};

render(
  <InpurElement
    id={1}
    label="Field label"
    predicted="California"
    locked={false}
    active={false}
  />,
  document.getElementById("root")
);

export default InpurElement;
