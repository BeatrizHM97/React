import React from "react";
import './TodoHeader.css';

function TodoHeader({setCallModal}) {
  const onClickButton = () => {
    setCallModal(prevState => !prevState);
  }

  return (
  <div className="TodoHeader">
      <h3>TODO Machine</h3>
      <button className="TodoButton" onClick={onClickButton}>
        +
      </button>
    </div>
  );
}

export { TodoHeader };