import React from "react";
import { synths } from "../data";
const Synths = ({ currSynth, onClick }: { currSynth: string; onClick: (name: string) => void }) => {
  return (
    <ul className="instruments">
      {synths.map(({ id, name, synth }) => {
        return (
          <li
            className={`instruments__item ${currSynth === synth ? "active" : ""}`}
            key={id}
            onClick={() => {
              onClick(synth);
            }}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default Synths;
