import React, { useState } from "react";
import "../App.css";
const DisplayPerCard = (props) => {
  const [toggleDescription, setToggleDescription] = useState(true);
  const clickHandler = () => {
    setToggleDescription(!toggleDescription);
  };
  return (
    <div key={props.idx} className="container">
      <div className="container__img ">
        <img className="images" src={props.value.image} alt=""></img>
      </div>
      {toggleDescription ? (
        <div className="container__description">
          <div className="item">
            <strong>{props.value.title}</strong>
          </div>
          <div className="item">
            <strong>${props.value.price}</strong>
          </div>
          <button className="Btn" onClick={clickHandler}>
            View Description
          </button>
        </div>
      ) : (
        <div className="container__description">
          <div className="item">{props.value.description}</div>
          <button className="Btn" onClick={clickHandler}>
            Close{" "}
          </button>
        </div>
      )}
    </div>
  );
};
export default DisplayPerCard;
