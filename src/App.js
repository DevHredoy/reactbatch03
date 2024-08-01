import { Button } from "antd";
import React, { useState } from "react";

const App = () => {
  let [num, setNumber] = useState(10);

  const nicks = ["mamu", "kakke", "major"];

  // if condition 1 is correct the clg will show you are in an university but if it is not correct it will show you are in a bay

  const flag = true;

  flag
    ? console.log("you are in an university")
    : console.log("you are in bay");

  //flag?console.log("you are in an university"):console.log("you are in bay");


//&& operation

const a=12;
const b=14;
const c=30;
console.log(b>a && c>b);


  return (
    <div>
      sokal a call dio,shuye porbo!!!
      <div>
        <Button
          onClick={() => {
            setNumber(--num);
            console.log("clicked in minus button:", num);
          }}
        >
          -
        </Button>
        {num}
        <Button
          onClick={() => {
            setNumber(++num);
            console.log("clicked in minus button:", num);
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default App;
