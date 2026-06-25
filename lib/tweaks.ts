// Registry of design "Tweaks" (full-page visual variants).
//
// Each Tweak maps to a [data-tweak] value on <html>. The empty id is the base
// theme (no attribute = Clássico Editorial). A Tweak is driven entirely by CSS
// custom properties in app/globals.css, so adding one means: a new token block
// `[data-tweak="<id>"] { ... }` there plus a new entry here.
//
// `swatch` is only used to render the colour dots inside the preview switcher.

export type Tweak = {
  /** Value written to <html data-tweak>. Empty string = base theme. */
  id: string;
  label: string;
  /** [background, accent, text] preview dots. */
  swatch: [string, string, string];
};

export const TWEAKS: readonly Tweak[] = [
  {
    id: "",
    label: "Editorial Premium",
    swatch: ["#fbf9f4", "#b68a3e", "#1f3a5f"],
  },
  {
    id: "noturno",
    label: "Noturno Premium",
    swatch: ["#0f1216", "#d8a94e", "#f4f0e8"],
  },
];

/** localStorage keys shared between the inline preview script and the switcher. */
export const PREVIEW_KEY = "ld-preview";
export const TWEAK_KEY = "ld-tweak";
