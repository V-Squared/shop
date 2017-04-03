import { CommonController } from "./common.controller.ts";

export const commonModule = angular
  .module("app.common", [])
  .controller("MainCtrl", CommonController)
  .name;