export class LoginResponse{
constructor(
    public tokenString:string,
    public expire:number,
    public firstName:string,
    public lastName:string,
    public email:string,
    public userId:number
){}
}