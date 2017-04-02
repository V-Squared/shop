import * as angular from "angular";
import * as ngSanitize from "angular-sanitize";
import * as ngAnimate  from "angular-animate";
import "../vendors/ng-juxtapose.min.js";

angular
  .module("app", [
    ngSanitize,
    ngAnimate,
    "ngJuxtapose"
    // ngMaterial
  ]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ["app"], {
    strictDi: true
  });
});