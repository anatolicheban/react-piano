import React, { useState } from "react";
import Keys from "./Keys";
import Synths from "./Synths";

const Piano = () => {
  const [synth, setSynth] = useState("piano");

  const changeSynth = (name: string) => {
    setSynth(name);
  };

  return (
    <div className="piano">
      <Synths currSynth={synth} onClick={changeSynth} />
      <Keys currSynth={synth} />
    </div>
  );
};

export default Piano;
