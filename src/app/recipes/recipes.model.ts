/**
 * Created by raju on 4/8/2017.
 */
export class Recipes{
  public name:string;
  public description:string;
  public imagePath:string;

  constructor(name:string,desc:string,image:string){
    this.name = name;
    this.description = desc;
    this.imagePath = image;
  }
}
