import React from "react";

const App = () => {
  let beef = "beef";
  let chicken=null;
  let goat ;




// in the whole chain js engine will look for one single first expression which will not be undefined or null
// first it will look if chicken is undefined or null/not,

//in other word js engine will for that value which is not undefined or not null
  
// once the expected value is found the value will passed to the result variable(in this case)

// among the six falsy value in coalescing operator null and undefined is considered undesired value
let result = chicken ?? goat??beef;
  console.log("result", result);

// DEMO OF TERNARY OPERATOR:
//unlike the coalescing operator ternary take into account all the falsy values

let result2=chicken?beef:goat;
// guess the value inside the result2

console.log("value of result2",result2)


//DEMO OF shortcircuit somehow it is related to 
chicken="chicken"
let result3=chicken && goat;
//guess the answer
console.log("value of result 3 : ",result3)

// if there are multiple expression with this operator the result will be "a"
//a will be that value the left expression of which is true,a could contain a false value.

  return <div>sokal a call dio,shuye porbo!!!</div>;
};

export default App;
