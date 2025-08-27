import { useState } from "react";


function Greeting () {
  const [pupil, setPupil] = useState(" ");
  
  return (
    <>
      <h1>Salam, mən {pupil}</h1>
      <button type="button" onClick={() => setPupil("Sevincəm")}>0</button>
      <button type="button" onClick={() => setPupil("əlaçıyam")}>1</button>
      <button type="button" onClick={() => setPupil("yaxşi oxuyanam")}>2</button>
      <button type="button" onClick={() => setPupil("orta oxuyanam")}>3</button>
    </>
  )
    
  
}

export default Greeting;
