import oMysqlDb from './db'

class Article{
    id:string|undefined;
    title:string|undefined;
    desc:string|undefined;
    subtitle?:string|undefined
}

var ArticleModule = new oMysqlDb<Article>();

export {Article,ArticleModule};