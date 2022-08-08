import { useState } from "react";

function withStorageListener(WrappedComponent) {
  return function WarappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log("sip");
        setStorageChange(true);
      }
    });

    const tpggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    }

    return ( 
      <WrappedComponent 
        show={storageChange}
        toggleShow={tpggleShow}
      />
    );
  }
}

export { withStorageListener };