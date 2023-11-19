enum KeySignature {
  AM = "AM",
  Am = "Am",
  BM = "BM",
  Bm = "Bm",
  CM = "CM",
  Cm = "Cm",
  DM = "DM",
  Dm = "Dm",
  EM = "EM",
  Em = "Em",
  FM = "FM",
  Fm = "Fm",
  GM = "GM",
  Gm = "Gm",
}
type keySignatureAccendental =
  | {
      key: KeySignature.CM | KeySignature.AM;
      accendentalKeys: [];
    }
  | {
      key: KeySignature.GM | KeySignature.Em;
      accidental: [Sharp.F];
    }
  | {
      key: KeySignature.DM | KeySignature.Bm;
      accidental: [Sharp.F, Sharp.C];
    }
  | {
      key: "";
    };
