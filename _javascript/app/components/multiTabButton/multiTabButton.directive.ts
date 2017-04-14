export const multiTabButtonDirective = (): ng.IDirective => ({
  restrict: "A",
  link(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {
    element.on("shown.bs.tab", (event) => {
      var target = ".super-secret-hidden-ul a[href=\"" + attrs["multiTabButton"] + "\"]";
      $(target).tab("show");
    });
  }
});