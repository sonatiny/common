type Tempo =
  | {
      name: "Custom";
      bpm: number;
    }
  | {
      name: "Largo";
    }
  | {
      name: "Larghetto";
    }
  | {
      name: "Adagio";
    }
  | {
      name: "Andante";
    }
  | {
      name: "Moderato";
    }
  | {
      name: "Allegro";
    }
  | {
      name: "Presto";
    }
  | {
      name: "Prestissimo";
    };
