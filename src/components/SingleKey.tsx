import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface SingleKeyProps {
  note: string;
  currSynth: string;
  type: string;
  playKey: string;
}

let SingleKey = ({ note, currSynth, type, playKey }: SingleKeyProps) => {
  const divKey = useRef<HTMLDivElement>(null);
  const sound = useMemo(() => new Audio(), []);
  sound.src = `../assets/${currSynth}/${note}.mp3`;

  const playNote = useCallback(() => {
    divKey.current?.classList.add("active");
    sound.currentTime = 0;
    sound.play();
  }, [sound]);
  const stopNote = useCallback(() => {
    divKey.current?.classList.remove("active");
  }, []);

  const playNoteKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === playKey) {
        playNote();
      }
    },
    [playKey, playNote]
  );

  const stopNoteKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === playKey) {
        stopNote();
      }
    },
    [playKey, stopNote]
  );

  useEffect(() => {
    const key = divKey.current;
    key?.addEventListener("mousedown", playNote);
    key?.addEventListener("mouseup", stopNote);
    key?.addEventListener("mouseleave", stopNote);
    document.addEventListener("keydown", (e: KeyboardEvent) => playNoteKey(e));
    document.addEventListener("keyup", (e: KeyboardEvent) => stopNoteKey(e));

    return () => {
      document.removeEventListener("keydown", (e: KeyboardEvent) => playNoteKey(e));
      document.removeEventListener("keyup", (e: KeyboardEvent) => stopNoteKey(e));
      key?.removeEventListener("mousedown", playNote);
      key?.removeEventListener("mouseup", stopNote);
      key?.removeEventListener("mouseleave", stopNote);
    };
  }, [playNote, stopNote, playNoteKey, stopNoteKey]);

  return <div ref={divKey} className={`key ${type}`}></div>;
};

export default SingleKey;
