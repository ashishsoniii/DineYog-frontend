import React from "react";
import "./NewHome.css";
import img from "../../assets/one.png";
import Home from "../home/HomeIntro";

function NewHome() {
  return (
    <>
      <div className="newHome">
        <div className="newHome__container">
          <div className="newHome__row">
            <div className="main-text-new-home">DINEYOG</div>
            <div className="main-text-sub-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda soluta, repudiandae rem corrupti laudantium quae
              praesentium delectus nemo aliquid doloribus earum vero.
            </div>
          </div>
          <div className="newHome__row">
            <div className="img-home-pe">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Home/>
    </>
  );
}

export default NewHome;
