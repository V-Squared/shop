import * as angular from "angular";
import * as ngSanitize from "angular-sanitize";
import * as ngAnimate  from "angular-animate";
// import * as ngMaterial from "angular-material";

angular
  .module("app", [
    ngSanitize,
    ngAnimate
    // ngMaterial
  ]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ["app"], {
    strictDi: true
  });
});