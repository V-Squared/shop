import * as angular from "angular";
import * as ngSanitize from "angular-sanitize";
import * as ngAnimate  from "angular-animate";
import * as ngAria from "angular-aria";
import * as ngMaterial from "angular-material";

angular
  .module("app", [
    ngSanitize,
    ngAnimate,
    ngAria,
    ngMaterial
  ]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ["app"], {
    strictDi: true
  })
});