enum Natural {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
}
enum Sharp {
  A = "A#",
  B = "B#",
  C = "C#",
  D = "D#",
  E = "E#",
  F = "F#",
  G = "G#",
}

enum Flat {
  A = "Ab",
  B = "Bb",
  C = "Cb",
  D = "Db",
  E = "Eb",
  F = "Fb",
  G = "Gb",
}
enum Accidental {
  Sharp = "Sharp",
  Flat = "Flat",
  Natural = "Natural",
  DoubleSharp = "DoubleSharp",
  DoubleFlat = "DoubleFlat",
}
type Note = Natural | Sharp | Flat;
