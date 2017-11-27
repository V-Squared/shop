interface ISlickDirectiveScope extends ng.IScope {
  slidesToShow: number;
  centerMode: boolean;
  centerPadding: string;
  mobileCenterPadding: string;
}

export const slickSlideDirective = (): ng.IDirective => ({
  restrict: "EA",
  link(scope: ISlickDirectiveScope, element: any, attrs: ng.IAttributes) {
    scope.slidesToShow = parseInt(attrs["slidesToShow"]) || 1;
    scope.centerMode = (attrs["centerMode"] == "true") || true;
    scope.centerPadding = attrs["centerPadding"] || "200px";
    scope.mobileCenterPadding = attrs["centerPadding"] || "25px";

    element.slick({
      slidesToShow: scope.slidesToShow,
      centerMode: scope.centerMode,
      centerPadding: scope.centerPadding,
      responsive: [{
        breakpoint: 768,
        setting: {
          centerMode: scope.centerMode,
          centerPadding: scope.mobileCenterPadding,
          slidesToShow: scope.slidesToShow
        }
      }]
    });
  }
});
