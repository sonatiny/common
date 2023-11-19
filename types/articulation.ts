type Articulation =
  /**
   * Play the note short and detached
   */
  | "Staccato"
  /**
   * play the note louder, emphasized or accented.
   */
  | "Accent"
  /**
   * Hold the note for its full value and/or give a slight emphasis to the note
   */
  | "Tenuto"
  /**
   * A sudden, excited, stronger accent
   */
  | "Sforzando"
  | "Subito"
  | "Fermata";
