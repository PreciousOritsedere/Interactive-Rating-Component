import React from "react";
import Card from "./Card";
import { ReactComponent as Thanks } from "../images/illustration-thank-you.svg";

function Secondcard({ value }) {
  return (
    <Card>
      <div className="thanksCard">
        <Thanks />
      </div>
      <div className="selectMsg">
        <p>You selected {value} out of 5</p>
      </div>
      <div className="thanksMsg">
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </Card>
  );
}

export default Secondcard;
