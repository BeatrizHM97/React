import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css';

function ChangeAlert({show, toggleShow}) {
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert">
          <p>Le informamos que se realizaron cambios en una ventana diferente del mismo navegador.</p>
          <span>Para visualizar los cambios debe </span>
          <button onClick={() => toggleShow(false)}>Volver a cargar</button>
        </div>
      </div>
      );
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };