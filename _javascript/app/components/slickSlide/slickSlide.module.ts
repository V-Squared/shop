import {slickSlideDirective} from "./slickSlide.directive.ts";

export const slickSlide = angular
  .module("slick-slide",[])
  .directive("slickSlide",slickSlideDirective)
  .name;
