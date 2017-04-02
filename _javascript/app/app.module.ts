import * as angular from "angular";
import * as ngSanitize from "angular-sanitize";
import * as ngAnimate  from "angular-animate";

// Juxtapose (Before / After Slider)
import "../vendors/ng-juxtapose.min.js";

// Videogular
import "../vendors/videogular.min.js";

angular
  .module("app", [
    ngSanitize,
    ngAnimate,
    "ngJuxtapose",
    "com.2fdevs.videogular"
  ]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ["app"], {
    strictDi: true
  });
});