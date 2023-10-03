import { registerBlockType } from "@quillforms/blocks";
import display from "./display";

/// registramos nuevo bloque
registerBlockType("sliderMeses", {
  supports: {
    editable: true
  },
  display
});
