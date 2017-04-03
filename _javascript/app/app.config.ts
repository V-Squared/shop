export function appConfig($interpolateProvider: ng.IInterpolateProvider): void {
  // Change from {{}} to {[{}]} so it doesn't conflict with jekyll
  $interpolateProvider.startSymbol("{[{");
  $interpolateProvider.endSymbol("}]}");
}
appConfig.$inject = ["$interpolateProvider"];