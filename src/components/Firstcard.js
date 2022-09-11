import React, { useState } from "react";
import Card from "./Card";
import Secondcard from "./Secondcard";
import { ReactComponent as Star } from "../images/icon-star.svg";

function Firstcard() {
  const [activeRate, setActiveRating] = useState(0);
  const [showMe, setShowMe] = useState(false);

  const rateClick = (e) => {
    let value = e.target.value;
    setActiveRating(+value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeRate) {
      setShowMe(true);
    }
  };

  return (
    <>
    {!showMe && (
      <Card>
        <div className="starContainer">
          <Star />
        </div>
        <div className="cardText">
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All feedback
            is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="rateNum">
          <input
            type="button"
            value="1"
            className={activeRate === 1 ? "rateNum-btn active" : "rateNum-btn"}
            onClick={rateClick}
          />
          <input
            type="button"
            value="2"
            className={activeRate === 2 ? "rateNum-btn active" : "rateNum-btn"}
            onClick={rateClick}
          />
          <input
            type="button"
            value="3"
            className={activeRate === 3 ? "rateNum-btn active" : "rateNum-btn"}
            onClick={rateClick}
          />
          <input
            type="button"
            value="4"
            className={activeRate === 4 ? "rateNum-btn active" : "rateNum-btn"}
            onClick={rateClick}
          />
          <input
            type="button"
            value="5"
            className={activeRate === 5 ? "rateNum-btn active" : "rateNum-btn"}
            onClick={rateClick}
          />
        </div>
        <button
          type="button"
          className={activeRate ? "btn" : "btn disabled"}
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </Card>

    )}
    {showMe && <Secondcard value={activeRate}/>}
    </>
  );
}

export default Firstcard;
