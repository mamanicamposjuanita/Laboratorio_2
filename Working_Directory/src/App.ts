import dotevn from "dotenv";
import express, {Express, request} from "express";

dotevn.config();

class App{
    private app: Express;
    private port: number;
    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 8000;
        this.configure();
        this.startModule();
    }
    private configure() {
        this.app.use(express.json());
        this.app.use(express.urlencoded());
    }
    private startModule() {
        console.log("Load Modules!");
        //esta es la seccion de codigo para los diferentes modulos 
        this.app.use("/", (request, response) =>{
            response.send("HOLA SEMINARIO SOY JUANITA");
        })
    }
    public getApp() {
        return this.app;
    }
    public getPort() {
        return this.port;
    }
}
export default App;
