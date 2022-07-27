import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoButton.css';

function TodoButton() {
  const {callModal, setCallModal} = useContext(TodoContext);

  const onClickButton = () => {
    setCallModal(!callModal);
  }
  return (
    <button className="TodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { TodoButton };