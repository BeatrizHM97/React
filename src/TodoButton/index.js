import React from "react";
import './TodoButton.css';

function TodoButton(props) {
  const onClickButton = (message) => {
    alert(message);
  }
  return (
    <button className="TodoButton" onClick={() => onClickButton('Aquí se debería abrir el modal')}>
      +
    </button>
  );
}

export { TodoButton };