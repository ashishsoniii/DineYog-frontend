import analysiss from "../../../assets/analyyysis.png";
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function AnalysisShortcut() {
  const [AnalysisOpen, setAnalysisOpen] = useState(false);
  const selectMenuRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setAnalysisOpen((prevOpen) => !prevOpen);
  };

  const handleMenuClose = () => {
    setAnalysisOpen(false);
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

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [selectMenuRef]);


  return (
    <div className="analysisShortcut" >
      {/* <img
        src={analysiss}
        alt=""
       
        aria-expanded={AnalysisOpen}
      /> */}
      {/* {AnalysisOpen && (
        <div className="menu-area-shortcut-analysis">
          <NavLink to="/home">Modules</NavLink>
          <NavLink to="/upload">Upload Files</NavLink>
        </div>
      )} */}

      <div>
        <div className="select-container analysiis-btn-down-tp">
          <div
            className={`select-menu analysiis-btn-down-tp ${isOpen ? "active" : ""}`}
            ref={selectMenuRef}
          >
            <button className="select-btn analysiis-btn-down-tp " onClick={() => setIsOpen(!isOpen)}>
              {/* <span className="sBtn-text">{selectedOption}</span> */}
              <img
                src={analysiss}
                alt=""
                onClick={handleMenuToggle}
                aria-expanded={AnalysisOpen}
              />
              <i className="bx bx-chevron-down"></i>
            </button>
            <ul className="options up-option-show-up">
              <li className="option" onClick={handleMenuClose}>
                <span className="option-text"  >
                  <NavLink to="/matrix">Matrix</NavLink>
                </span>
              </li>
              <li className="option" onClick={handleMenuClose}>
                <span className="option-text">
                  <NavLink to="/nonTemporal">Non Temporal</NavLink>
                </span>
              </li>
              <li className="option" onClick={handleMenuClose}>
                <span className="option-text">
                  <NavLink to="/forcast">Forcast</NavLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalysisShortcut;


// import analysiss from "../../../assets/analysiss.jpg";
// import React, { useState, useRef, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// function AnalysisShortcut() {
//   const [isOpen, setIsOpen] = useState(false);

//   const selectMenuRef = useRef(null);

//   const handleMenuToggle = () => {
//     setIsOpen((prevOpen) => !prevOpen);
//   };

//   const handleMenuClose = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         selectMenuRef.current &&
//         !selectMenuRef.current.contains(event.target)
//       ) {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener("click", handleClickOutside);

//     return () => {
//       window.removeEventListener("click", handleClickOutside);
//     };
//   }, [selectMenuRef]);

//   return (
//     <div className={`analysisShortcut ${isOpen ? "open" : ""}`}>
//       <img
//         src={analysiss}
//         alt=""
//         onClick={handleMenuToggle}
//         aria-expanded={isOpen}
//       />
//       {isOpen && (
//         <ul
//           className="select-menu options up-option-show-up"
//           ref={selectMenuRef}
//         >
//           <li className="option" onClick={handleMenuClose}>
//             <span className="option-text">
//               <NavLink to="/home">Modules</NavLink>
//             </span>
//           </li>
//           <li className="option" onClick={handleMenuClose}>
//             <span className="option-text">
//               <NavLink to="/upload">Upload Files</NavLink>
//             </span>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default AnalysisShortcut;
