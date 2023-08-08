import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import thumbImage from "./sunbust.png";

const marks = Array.from({ length: 91 }, (_, index) => ({
  value: index + 10,
//   label: (index + 10).toString(),
}));

export default function DiscreteSlider({ onChange }) {
  const styles = {
    thumb: {
      height: 20,
      width: 20,
      marginTop: -8,
      marginLeft: -11,
      background: `url(${thumbImage})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      cursor: "pointer",
    },
  };

  const handleChange = (event, value) => {
    onChange(value);
  };

  return (
    <Box sx={{ width: "65%" }}>
      <Slider
        sx={styles}
        aria-label="Slider"
        defaultValue={10}
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={50}
        max={100}
        onChange={handleChange}
      />
    </Box>
  );
}
