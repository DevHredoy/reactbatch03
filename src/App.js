const App = () => {
  // let joyFriend0 = "arif";
  // let joyFriend1 = "ansar";
  // let joyFriend2 = "sajid";
  // let joyFriend3 = "afnan";
  // let joyFriend4 = "hasib";
  // let joyFriend5 = "pritom";
  // console.log("joy friend 0 :", joyFriend0);
  // console.log("joy friend 1:", joyFriend1);
  // console.log("joy friend 2:", joyFriend2);
  // console.log("joy friend 3:", joyFriend3);
  // console.log("joy friend 4:", joyFriend4);
  // console.log("joy friend 5:", joyFriend5);

  let joyVaibondhura = [
    "arif",
    "ansar",
    90,
    "sajid",
    "afnan",
    "hasib",
    "pritom",
    true,
    undefined,
    19938493409783904893843984938498394839849839489384999999999999999999999999999999999999930849238094821093840938204982309480238409839848928309482309840923840923804823094092389439999999999999849389384883n,
  ];

  for (let i = 0; i < joyVaibondhura.length; i++) {
    console.log(
      "joy vai friend no:",
      i,
      joyVaibondhura[i],
      typeof joyVaibondhura[i]
    );
  }

  // let arif = { name: "arif", age: 21 };
  // let ansar = { name: "ansar", age: 22 };

  // let sajid = { name: "sajid", age: 28 };

  // let afnan = { name: "afnan", age: 29 };
  // let afnanCar = "";

  // let hasib = { name: "hasib", age: 18 };

  // let pritom = { name: "pritom", age: 18 };

  // let joyVaiFriends = [arif, ansar, sajid, afnan, hasib, pritom];

  //splice demo:

  /* let myShirts = ["white", "blue", "green"];

  myShirts.splice(0, 0, "maroon");

  console.log("myShirts are:", myShirts);
*/

  // slice demo

  let myFriends = [
    "sharif",
    "sojib",
    "asif",
    "fahim",
    "jahid",
    "chishty",
    "mosharrof",
    "sharjid",
  ];

  let joynul = myFriends.slice(3);
  console.log("my friends after cutting short:", joynul);

  //DEMO Of concat

  let friendFromJainul = ["kawser", "momin", "hosein"];

  let friendsFromKudrat = ["nahid", "newaj", "tasnim"];

  let allFriends = friendFromJainul.concat(friendsFromKudrat);

  console.log("all friends:", allFriends);

  //demo of filter:

  let ageGroup = [12, 33, 56, 71, 56, 8, "ninety Seven"];
  let juniorFunction = (age) => {
    return age > 60;
  };

  let peoplewithsmallages = ageGroup.filter(juniorFunction);

  console.log("junior people:", peoplewithsmallages);

  // demo of find method in array

  let thefirstTopassthetest = ageGroup.find(juniorFunction);

  console.log(
    "demo of find funciton of array,using ageGroup array and the junior function",
    thefirstTopassthetest
  );

  let indexofthefirstTopassthetest = ageGroup.findIndex(juniorFunction);
  console.log(
    "demo of findindex funciton of array,using ageGroup array and the junior function",
    indexofthefirstTopassthetest
  );

  //demo of includes

  let checkiftheageisnot = ageGroup.includes(56);

  console.log("the exsitance of this number is :", checkiftheageisnot);

  //demo of indexof

  let indexofninetyseven = ageGroup.indexOf("ninety Seven");
  console.log("indexof ninetyseven", indexofninetyseven);

  // demo of join

  let arrayintext = ageGroup.join();
  console.log("array ageGroup into text:", arrayintext);

  // demo of join with modification

  let arrayintextcommabetween = ageGroup.join(",");
  console.log(
    "array ageGroup into text but there will be comma between each elements",
    arrayintextcommabetween
  );

  // demo of push

  ageGroup.push("eleven");

  console.log("now the array is with eleven at the end", ageGroup);

  // demo of shift. it actually leftshift the array and remove the first element. overrides the array

  ageGroup.shift();
  console.log("after shift the array is ", ageGroup);

  // demo of unshift

  console.log(
    "applying unshift in ageGroup array:",
    ageGroup.unshift("four"),
    ageGroup
  );

  //demo of pop. pop is directly opposite of shift

  console.log("after pop from the ageGroup:", ageGroup.pop(), ageGroup);

  // demo of reverse, reverse the array
  console.log("ageGroup reversed:", ageGroup.reverse());

  // demo of toString. join and tostring is similar but join give more flexibility

  console.log("applied tostring to ageGroup:", ageGroup.toString());

  //demo of sort. it sort the array's strings alphabetically

  console.log(
    "demo of sort that will be applied to ageGroup:",
    ageGroup.sort()
  );

  //DEMO of reduce ,doesn't override the array

  let descendingarray = [10, 4, 2];

  let subfunc = (bigest, totheright) => {
    return bigest - totheright;
  };
  let thesubfromtheleftmosttoitsright = descendingarray.reduce(subfunc);
  console.log("after reduce the ", thesubfromtheleftmosttoitsright);

  //demo of foreach

  //printing each of the element from ageGroup

  let myfavdishes = ["k", "a", "b", "a", "b"];
  let printing = (item) => {
    console.log("food name is ", item);
  };

  myfavdishes.forEach(printing);

  //demo of map

  let nameofhredoy = ["rafiul", "islam", "hredoy"];
  let newnamesofhredoy = nameofhredoy.map((eachword) => {
    let eeachword=eachword.toUpperCase();
    let newword = eeachword + "-";
    return newword;
  });

  console.log("newnamesofhredoy:", newnamesofhredoy);

  return;
};

export default App;
