import logoOn from "../../img/logoOn.png";
import logoOff from "../../img/logoOff.png";
import { useState } from "react";

export default function CPMLogo(props) {
  return (
    <img
      height="80"
      className="logo"
      src={props.lightIsOn ? logoOn : logoOff}
      onMouseEnter={() => props.changeLight(true)}
      onMouseLeave={() => props.changeLight(false)}
      alt="initials C p m in the shape of a lightbulb, which lights up when hovered"
    />
  );
}
