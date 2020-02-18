export class ArticleListModel{
    constructor(
  public  id:string,
  public  title:string,
  public imageUrl:string,
  public content:string,
  public  authorName?:string){}
}