import {v2Accordian} from "./accordian/accordian.module.ts";

export const componentsModule = angular
  .module("app.components", [
    v2Accordian
  ])
  .name;