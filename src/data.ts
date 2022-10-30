interface SynthsType {
  id: number;
  name: string;
  synth: string;
}

export const synths: SynthsType[] = [
  {
    id: 1,
    name: "Piano",
    synth: "piano",
  },
  {
    id: 2,
    name: "Sax",
    synth: "sax",
  },
];

interface Key {
  id: number;
  note: string;
  type: string;
  playKey: string;
}

export const keys = [
  {
    id: 1,
    note: "c4",
    type: "white",
    playKey: "KeyZ",
  },
  {
    id: 2,
    note: "csh4",
    type: "black",
    playKey: "KeyX",
  },
  {
    id: 3,
    note: "d4",
    type: "white",
    playKey: "KeyC",
  },
  {
    id: 4,
    note: "dsh4",
    type: "black",
    playKey: "KeyV",
  },
  {
    id: 5,
    note: "e4",
    type: "white",
    playKey: "KeyB",
  },
  {
    id: 6,
    note: "f4",
    type: "white",
    playKey: "KeyN",
  },
  {
    id: 7,
    note: "fsh4",
    type: "black",
    playKey: "KeyM",
  },
  {
    id: 8,
    note: "g4",
    type: "white",
    playKey: "Comma",
  },
  {
    id: 9,
    note: "gsh4",
    type: "black",
    playKey: "Period",
  },
  {
    id: 10,
    note: "a4",
    type: "white",
    playKey: "Slash",
  },
  {
    id: 11,
    note: "ash4",
    type: "black",
    playKey: "KeyA",
  },
  {
    id: 12,
    note: "b4",
    type: "white",
    playKey: "KeyS",
  },
  {
    id: 13,
    note: "c5",
    type: "white",
    playKey: "KeyD",
  },
  {
    id: 14,
    note: "csh5",
    type: "black",
    playKey: "KeyF",
  },
  {
    id: 15,
    note: "d5",
    type: "white",
    playKey: "KeyG",
  },
  {
    id: 16,
    note: "dsh5",
    type: "black",
    playKey: "KeyH",
  },
  {
    id: 17,
    note: "e5",
    type: "white",
    playKey: "KeyJ",
  },
  {
    id: 18,
    note: "f5",
    type: "white",
    playKey: "KeyK",
  },
  {
    id: 19,
    note: "fsh5",
    type: "black",
    playKey: "KeyL",
  },
  {
    id: 20,
    note: "g5",
    type: "white",
    playKey: "Semicolon",
  },
  {
    id: 21,
    note: "gsh5",
    type: "black",
    playKey: "Quote",
  },
  {
    id: 22,
    note: "a5",
    type: "white",
    playKey: "KeyQ",
  },
  {
    id: 23,
    note: "ash5",
    type: "black",
    playKey: "KeyW",
  },
  {
    id: 24,
    note: "b5",
    type: "white",
    playKey: "KeyE",
  },
  {
    id: 25,
    note: "c6",
    type: "white",
    playKey: "KeyR",
  },
  {
    id: 26,
    note: "csh6",
    type: "black",
    playKey: "KeyT",
  },
  {
    id: 27,
    note: "d6",
    type: "white",
    playKey: "KeyY",
  },
  {
    id: 28,
    note: "dsh6",
    type: "black",
    playKey: "KeyU",
  },
  {
    id: 29,
    note: "e6",
    type: "white",
    playKey: "KeyI",
  },
  {
    id: 30,
    note: "f6",
    type: "white",
    playKey: "KeyO",
  },
  {
    id: 31,
    note: "fsh6",
    type: "black",
    playKey: "KeyP",
  },
  {
    id: 32,
    note: "g6",
    type: "white",
    playKey: "BracketLeft",
  },
];
