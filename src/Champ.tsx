import React from "react";

const Champ = () => {
  interface Champ {
    man: string;
    money: number;
    goodHealth: boolean;
  }

  let man = "homo sapiens";

  console.log("man:", man);

  return <div>App</div>;
};

export default Champ;
