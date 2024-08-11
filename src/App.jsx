import React from "react";

const App = () => {
  console.log("hello");

  const danger_button = document.getElementById("one");
  console.log("danger button:", danger_button);
  const clkActionOne = () => {
    alert("one clicked");
  };

  danger_button.addEventListener("click", clkActionOne);

  return (
    <div>
      <button id="one">l</button>
    </div>
  );
};

export default App;
