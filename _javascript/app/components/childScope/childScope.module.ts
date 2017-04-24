const childScopeDirective = (): ng.IDirective => ({
  restrict: "A",
  scope: true
});

export const childScope = angular
  .module("child-scope", [])
  .directive("childScope", childScopeDirective)
  .name;
