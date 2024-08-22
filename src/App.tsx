import React, { FC } from "react";

interface AppProps {
  beef: string;
  chicken: string;
  mutton: string;
}

const App: FC<AppProps> = ({ beef, chicken, mutton }) => {
  beef = "beef";

  return <div>sokal a call dio !</div>;
};

export default App;
