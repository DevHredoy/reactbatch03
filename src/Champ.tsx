import React, { FC } from "react";

interface ChampProps {
  beef: string;
  chicken: string;
  mutton: string;
}

const Champ: FC<ChampProps> = ({ beef, chicken, mutton }) => {
  beef = "beef";

  return <div>sokal a call dio !</div>;
};

export default Champ;
