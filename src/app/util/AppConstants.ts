
export class AppConstants{
    public static ENDPOINT='http://localhost:8085/api';
    public static token: string|null=null;

    static getToken(){
        if(this.token===null){
            this.token=localStorage.getItem('token');
        }
        return this.token;
    }

    static setToken(token:string){
        localStorage.setItem('token',token);
    }

    
}