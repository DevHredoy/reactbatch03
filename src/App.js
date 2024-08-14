const App = () => {
  const employees = [
    {
      name: "John Doe",
      age: 28,
      salary: 50000,
      designation: "Software Engineer",
    },
    {
      name: "Jane Smith",
      age: 34,
      salary: 60000,
      designation: "Project Manager",
    },
    { name: "Emily Davis", age: 22, salary: 40000, designation: "Intern" },
    { name: "Michael Brown", age: 45, salary: 80000, designation: "CTO" },
    {
      name: "Sarah Wilson",
      age: 78,
      salary: 55000,
      designation: "QA Engineer",
    },
  ];

  const [firstEmployee, secondEmployee, thirdEmployee, lastEmployee] =
    employees;
  console.log("first employee:", firstEmployee);
  console.log("all employees", employees);
  console.log("last employee:", lastEmployee);

  // finding an employee whose age is below =??

  // let returnbelow60funciton = (item) => {
  //   return item.age > 28;
  // };

  let personbelow60 = employees.find((item) => {
    return item.age > 28;
  });

  console.log(personbelow60);

  // finding the project manager from the employee list

  let ProjectMan = employees.find((item) => {
    return item.designation === "Project Manager";
  });
  console.log("pm:", ProjectMan);

  // creating a list of the names from the employees array

  let employeeNames = employees.map((item) => {
    return item.name;
  });

  console.log("names of the employees:", employeeNames);

  //demo of filter: making a list of employees where employees will be 35<aged

  let listOf35Upaged = employees.filter((item) => {
    return item.age > 35;
  });

  console.log("listOf35Upaged", listOf35Upaged);

  // finding the list of employees who is either 30 years old or have a salary greater than $70k

  let listlikeAbove = employees.filter((item) => {
    return item.age < 30 && item.salary > 7000;
  });

  console.log("listlikeabove", listlikeAbove);

  //Find all employees who have a designation that includes the word "Engineer" and are older than 25 years.

  let listlikEAbove = employees.filter((item) => {
    let subDeg = "Engineer";

    return item.designation.includes(subDeg) && item.age > 25;
  });

  console.log("listlikEabove", listlikEAbove);

  //Find the average salary of employees who have a designation that includes the word "Engineer" and are under 40 years old.

  let thelistLiketheAbove = employees.filter((item) => {
    let subDeg = "Engineer";
    return item.designation.includes(subDeg) && item.age < 90;
  });

  console.log("thelistLiketheAbove:", thelistLiketheAbove);

  // array average calc

  //⚠  in the next phase i shall optimize the code below

  const average = (array) =>
    array.reduce((a, b) => {
      return a + b;
    }) / array.length;

  let listOfSal = thelistLiketheAbove.map((item) => {
    return item.salary;
  });
  console.log("average is :", average(listOfSal));

  //  finding the highest salary from the employeelist
  let salaryListOftheOriginalemployees = employees.map((item) => {
    return item.salary;
  });
  let highestSal = Math.max(...salaryListOftheOriginalemployees);
  console.log("highest sal:", highestSal);

  let lowestSal = Math.min(...salaryListOftheOriginalemployees);
  console.log("lowest sal:", lowestSal);

  //using array.sort()

  let sortedsalary = salaryListOftheOriginalemployees.sort((a, b) => {
    return b - a;
  });

  console.log("sorted list of salary o the employeesz:", sortedsalary);

  console.log("employee list now:", employees);
  // sorting age based imployees

  let employeesasPertheirage = employees.sort((a, b) => {
    return b.age - a.age;
  });

  console.log("employeews as per their age:", employeesasPertheirage);

  return;
};

export default App;
