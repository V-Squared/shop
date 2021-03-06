import {v2Accordian} from "./accordian/accordian.module.ts";
import {multiTabButton} from "./multiTabButton/multiTabButton.module.ts";
import {childScope} from "./childScope/childScope.module.ts";
import {slickSlide} from "./slickSlide/slickSlide.module.ts";

export const componentsModule = angular
  .module("app.components", [
    v2Accordian,
    multiTabButton,
    childScope,
    slickSlide
  ])
  .name;
