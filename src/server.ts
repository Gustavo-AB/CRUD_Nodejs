import 'reflect-metadata'
import express, { Request, Response } from "express";
import { routes } from './routes';

const app = express();

try{
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match 

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
} catch(Error){
  console.log(Error)
}

app.use(express.json())
app.use(routes)

const port:number = 3000

app.listen(port, () => {
  console.log("Server is runing")
})
