import * as angular from "angular";
import * as ngSanitize from "angular-sanitize";
import * as ngAnimate  from "angular-animate";

// Juxtapose (Before / After Slider)
import "../vendors/ng-juxtapose.min.js";

/*
// Videogular
import "../vendors/videogular.min.js";
import "../vendors/vg-controls.min.js";
import "../vendors/vg-overlay-play.min.js";
*/

// Common
import { commonModule } from "./common/common.modules.ts";

import { appConfig } from "./app.config.ts";

angular
  .module("app", [
    ngSanitize,
    ngAnimate,
    "ngJuxtapose",
/*    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.buffering",*/
    commonModule
  ])
  .config(appConfig);

angular.element(document).ready(() => {
  angular.bootstrap(document, ["app"], {
    strictDi: true
  });
});