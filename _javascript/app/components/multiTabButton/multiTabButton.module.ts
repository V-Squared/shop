import {multiTabButtonDirective} from "./multiTabButton.directive.ts";

export const multiTabButton = angular
  .module("multi-tab.button", [])
  .directive("multiTabButton", multiTabButtonDirective)
  .name;