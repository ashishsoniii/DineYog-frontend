import React from "react";
import Switch from "react-switch";

export default function SwitchToggle({ checked, setChecked }) {
  const handleChange = (newChecked) => {
    setChecked(newChecked);
  };

  return (
    <label>
      {/* <span>Switch with default style</span> */}
      <Switch onChange={handleChange} checked={checked} />
    </label>
  );
}
