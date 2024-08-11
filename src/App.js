const App = () => {
  

let symbolA=Symbol('A');
let symbolB=Symbol('A');

let number1=undefined;
let number2=undefined;
console.log("others  ",number1==number2);




let hredoyNames=["rafiul","kaka","kallu"];

console.log("array type is :",typeof hredoyNames)


let set=new Set([22,2,2]);
console.log("set =",set,typeof set)

let map=new Map()

map.set(1,1);
map.set(3,4)
map.set("district","dhaka")
console.log("map:",map)
//console.log("check if a and b is equal or not",symbolA==symbolB)






let a=10;

let b=a;
b=20;

console.log("a : ,b:",a,b)



let num = 50;

function modifyNumber(n) {
  n = n + 100;
  return n;
}

let result = modifyNumber(num);

console.log(num);    // What will this log?
console.log(result); // What will this log?

  return;

};

export default App;
