import { Button } from "antd";
import React, { useState } from "react";

const App = () => {
  let [num, setNumber] = useState(10);

  const catchFish = (net) => {
    //console.log("net name is :", net);

    for (let i = 0; i < 2; i++) {
      if ((i = 1)) {
        var specialnet = "mangonet";
      }
    }
    // console.log(
    //   "accesing mangonet insdie function but out side of the for loop where it has been declared:",
    //   specialnet
    // );
  };
  catchFish("currentjal");
  // console.log(
  //   "accesing mango net from outside of the function , in global scope",
  //   specialnet
  // );
  const nicks = ["mamu", "kakke", "major"];

  const modNicks = nicks.map((name) => {
    //console.log("the name is before :", name);
    return name + "san";
  });

  //console.log("the new array is now :", modNicks);

  // string

  // let joyvai = "hamidur";
  // var hredoy = "hredoy";

  // const armanvai = "arman";

  //console.log("joy vai,hredoy,armanvai:", joyvai, hredoy, armanvai);
  //number
  // let independenceYear = 2024;
  // var languageYear = 1952;
  // const blacknight = 1971;

  //console.log("inde,lang,black:", independenceYear, languageYear, blacknight);
  //undefined
  let unde1;

  //unde1 = "joy";
  console.log("type of unde1", typeof unde1);
  //const unde2 = undefined;
  var unde3 = undefined;

  console.log("all undes:", unde1, unde3);

  let joysName = "joy";

  console.log("joy's name type is ", typeof joysName);





  
  //boolean

  //big integer.

  //Symbol

  return (
    <div>
      sokal a call dio,shuye porbo!!!
      <div>
        <Button
          onClick={() => {
            setNumber(--num);
            //console.log("clicked in minus button:", num);
          }}
        >
          -
        </Button>
        {num}
        <Button
          onClick={() => {
            setNumber(++num);
            //console.log("clicked in minus button:", num);
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default App;
