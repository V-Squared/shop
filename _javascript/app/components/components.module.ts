import {v2Accordian} from "./accordian/accordian.module.ts";
import {multiTabButton} from "./multiTabButton/multiTabButton.module.ts";

export const componentsModule = angular
  .module("app.components", [
    v2Accordian,
    multiTabButton
  ])
  .name;