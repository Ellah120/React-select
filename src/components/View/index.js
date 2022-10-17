import { useState } from "react";

function View(){
  const [login, setLogin] = useState(false);

  function revealHandler(){
 setLogin(!login)
  }
  return( 
    <>
    {login && <h1>This is conditional rendering</h1>}
    <button onClick={revealHandler}>click me</button>
    </>
  )
}

export default View;