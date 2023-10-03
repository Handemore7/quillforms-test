import { registerBlockType } from "@quillforms/blocks";
import display from "./display";

/// registramos nuevo bloque
registerBlockType("sliderMeses2", {
  supports: {
    editable: true
  },
  attributes: {
    min: {
      type: "number",
      default: 1
    },
    max: {
      type: "number",
      default: 10 
    },
    step: {
      type: "number",
      default: 10 
    },
    prefix: {
      type: "string",
      default: ' ' 
    },
    suffix: {
      type: "string",
      default: ' ' 
    }},
  display
});
