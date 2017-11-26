import * as angular from "angular";
import * as ngSanitize from "angular-sanitize";
import * as ngAnimate  from "angular-animate";

// Juxtapose (Before / After Slider)
import "../vendors/ng-juxtapose.min.js";

// UI Bootstrap
import "../vendors/ui-bootstrap-collapse.js";

// angular slick slide Handler
import "../vendors/angular-slick.min.js"

// Common
import { commonModule } from "./common/common.modules";

// Components
import { componentsModule } from "./components/components.module";

import { appConfig } from "./app.config";

angular
  .module("app", [
    ngSanitize,
    ngAnimate,
    "ngJuxtapose",
    "ui.bootstrap.collapse",
    'slick',
    commonModule,
    componentsModule
  ])
  .config(appConfig);

angular.element(document).ready(() => {
  angular.bootstrap(document, ["app"], {
    strictDi: true
  });
});
