import { useState } from "react";

type ButtonProps = {
  text:string;
}

export function Button(props: ButtonProps){
  const [counter, setCounter] = useState(0);

  function soma(){
    setCounter(counter+1)
    console.log();
  }


  return (
    <div>
      <button onClick={soma}>
        {counter}
        </button>
    </div>
  );
}
