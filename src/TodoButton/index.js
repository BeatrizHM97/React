import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodoButton.css';

function TodoButton() {
  const {setCallModal} = useContext(TodoContext);

  const onClickButton = () => {
    setCallModal(prevState => !prevState);
  }

  return (
    <button className="TodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { TodoButton };