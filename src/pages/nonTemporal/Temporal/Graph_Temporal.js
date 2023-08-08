import React, { useState, useEffect } from "react";
import axios from "axios";
import Plot from "react-plotly.js";
import { motion } from "framer-motion";
import "../Content.css";

function Graph_Temporal(props) {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [noGraph_Temporal, setNoGraph_Temporal] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/temporal",
        {
          type: props.selectedOptionA,
          dine: props.selectedOptionB,
          category: props.selectedOptionC,
          day: props.selectedOptionD,
          month: props.selectedOptionE,
          time: props.selectedOptionF,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        const data = response.data;
        setPlots([data]);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (
      props.selectedOption1 !== 101 &&
      props.selectedOption2 !== 201 &&
      props.selectedOption3 !== 301
    ) {
      setNoGraph_Temporal(false);
      fetchData();
    } else {
      setNoGraph_Temporal(true);
    }
  }, [
    props.selectedOptionA,
    props.selectedOptionB,
    props.selectedOptionC,
    props.selectedOptionD,
    props.selectedOptionE,
    props.selectedOptionF,
  ]);

  return (
    <>
      {noGraph_Temporal ? (
        <div className="no-graph_Temporal">
          Select any option to start Analysis!
        </div>
      ) : loading ? (
        <>
          <br />
          <br />
          <motion.div
            className="boxi no-graph_Temporal"
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
        <div className="no-graph Temporal">
          {/* Select any option to get into deep! {props.selectedOptionD} */}
          {/* No data found for the selected options! */}
        </div>
      ) : (
        <div className="graph_Temporal-section graph_Temporal-t-center ">
          {plots.length > 0 && plots[0].layout && plots[0].layout.legend ? (
            <div className="graph-section-removethis graph-div-set ">
              <Plot
                data={plots[0].data}
                layout={{
                  ...plots[0].layout,
                  legend: {
                    ...plots[0].layout.legend,
                    font: {
                      size: 7,
                      ...plots[0].layout.legend.font,
                    },
                  },
                  xaxis: {
                    ...plots[0].layout.xaxis,
                    tickfont: {
                      size: 7,
                      ...plots[0].layout.xaxis.tickfont,
                    },
                  },
                  yaxis: {
                    ...plots[0].layout.yaxis,
                    tickfont: {
                      size: 7,
                      ...plots[0].layout.yaxis.tickfont,
                    },
                  },
                  dragmode: "pan", // default is 'pan'
                }}
                useResizeHandler={true}
                style={{
                  // width: "100",
                  // height: "100%",
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
          ) : (
            <div className="no-graph Temporal">
              Loading graph... {/* Placeholder or loading message */}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Graph_Temporal;
