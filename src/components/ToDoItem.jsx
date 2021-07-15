import React, { useState } from "react";

function ToDoItem(props) {
  const [isStrikeThrough, setIsStrikeThrough] = useState(false);

  function updateItemEffect(event) {
    // let strikeThroughFlag = isStrikeThrough;

    // if (strikeThroughFlag === false) {
    //   strikeThroughFlag = true;
    // } else {
    //   strikeThroughFlag = false;
    // }

    // easy way is to just negate the previous value
    setIsStrikeThrough((prevState) => !prevState);
  }

  return (
    <li
      style={{ textDecoration: isStrikeThrough ? "line-through" : "none" }}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
