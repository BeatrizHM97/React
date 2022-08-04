import { Children, cloneElement } from "react";

function TodoContainer({ children, loading }){
  return (
    <>
      {  Children.toArray(children)
      .map(child => cloneElement(child, { loading: loading })) }
    </>
  );
}

export { TodoContainer };