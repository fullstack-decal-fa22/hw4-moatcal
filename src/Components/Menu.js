import React from "react";
/* Add any imports you think you might need here! */
import Color from "./Color";

const Menu = (props) => {
  return (
    <div className="colorOptions">
      <Color color="red" handleClick={props.update}></Color>
      <Color color="pink" handleClick={props.update}></Color>
      <Color color="blue" handleClick={props.update}></Color>
      <Color color="green" handleClick={props.update}></Color>
    </div>
  );
};

export default Menu;
