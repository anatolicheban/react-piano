import React, { useEffect, useState } from "react";
import { keys } from "../data";
import SingleKey from "./SingleKey";

const Keys = ({ currSynth }: { currSynth: string }) => {
  return (
    <div className="keys">
      {keys.map(({ id, note, type, playKey }) => (
        <SingleKey
          note={note}
          currSynth={currSynth}
          key={id}
          type={type}
          playKey={playKey as string}
        />
      ))}
    </div>
  );
};

export default Keys;
