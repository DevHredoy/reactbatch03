import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // This code runs after the component mounts
    const danger_button = document.getElementById("one");
    console.log("danger button:", danger_button);

    const clkActionOne = (e) => {
      console.log("the event is:", e);
      alert("one clicked");
    };

    if (danger_button) {
      danger_button.addEventListener("click", clkActionOne);
    }

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      if (danger_button) {
        danger_button.removeEventListener("click", clkActionOne);
      }
    };
  }, []);

  return (
    <div>
      <button id="one">Click Me!</button>
    </div>
  );
};

export default App;
