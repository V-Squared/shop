interface IVideogular {
  theme: String;
  plugins: Object;
}

interface ICommonController extends ng.IController {
  videogular: IVideogular;
}

export class CommonController implements ICommonController {
  videogular: IVideogular;

  constructor() {
    this.videogular = {
      theme: "css/videogular.css",
      plugins: {}
    };
  }
}