import oMysqlDb from './db'

class User{
    id:number|undefined;
    name:string|undefined;
    password:string|undefined;
}

var UserModule = new oMysqlDb<User>();

export {User,UserModule};