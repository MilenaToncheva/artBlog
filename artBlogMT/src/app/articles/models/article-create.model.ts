export class ArticleCreateModel{
    constructor(
   public title:string,
   public  imageUrl:string,
    public  content:string,
    public authorEmail:string,
   public  authorName:string
   
    ){}
}