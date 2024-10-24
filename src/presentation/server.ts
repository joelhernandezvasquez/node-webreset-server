import express from 'express';

interface Options{
    port:number,
    public_path:string
}

export class Server{

    private app = express();
    private readonly port:number;
    private readonly path:string;

    constructor(options:Options){
        this.port = options.port;
        this.path = options.public_path;
    }

    async start (){

    this.app.use(express.static(this.path));
    
       this.app.listen(this.port,()=>{
        console.log(`Server running on port ${this.port}`);
       })
    }

}