import React, { useState, useEffect } from "react";
import axios from "axios";
import Plot from "react-plotly.js";
import { motion } from "framer-motion";
import "./Content.css";

function Graph(props) {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [noGraph, setNoGraph] = useState(true);
  const [temporalPossible, setTemporalPossible] = useState(true);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(true);
  const [four, setFour] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post(
        "http://dineyog-env-1.eba-47rmdqhp.eu-north-1.elasticbeanstalk.com/matrix",
        {
          dine: props.selectedOption2,
          categoryNm: props.selectedOption3,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      console.log("Im here");
      if (response.data && response.data.data) {
        const data = response.data.data;
        console.log(data);
        props.setTemporalPossible(response.data["Temporal Analysis"]);
        props.setDaysPossible(response.data["Per Day Possible"]);
        props.setMonthPossible(response.data["Per Month Possible"]);
        props.setWeekendWeekday(response.data["WeekDay and Weekend Present"]);
        setPlots(data);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (props.selectedOption2 !== 102 && props.selectedOption3 !== 103) {
      setNoGraph(false);
      fetchData();
    } else {
      setNoGraph(true);
    }
  }, [props.selectedOption2, props.selectedOption3]);

  return (
    <>
      {noGraph ? (
        <div className="no-graph">Select any option to start Analysis!</div>
      ) : loading ? (
        <>
          <br />
          <br />
          <motion.div
            className="boxi no-graph"
            animate={{
              scale: [1, 1.3, 1.3, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["10%", "10%", "50%", "50%", "10%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          ></motion.div>
        </>
      ) : error ? (
        <div className="no-graph">No data found for the selected options!</div>
      ) : (
        <div className="graph-section-removethis graph-div-set">
          <Plot
            data={plots}
            layout={
              {
                // ... Customize the layout as needed ...
              }
            }
            useResizeHandler={true}
            style={{
              width: "60%",
              height: "100%",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              hyphens: "auto",
            }}
            config={{
              scrollZoom: true,
              displaylogo: false,
              responsive: true,
            }}
          />
        </div>
      )}
    </>
  );
}

export default Graph;
