export class ArticleCreateModel{
    constructor(
   public title:string,
   public  imageUrl:string,
    public  content:string,
   public  authorName?:string
    ){}
}