import express, { Application } from 'express';
import cors from "cors";
const app: Application = express();
// Application routes
import userRoutes from './app/modules/user/user.route'
//using cors
app.use(cors());
// parse data
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/user', userRoutes)
export default app;
// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//     //inserting a test data into mongodb
//     /*
//     step1: Interface
//     step2: Schema
//     step3: Model
//     step4: Database Query
//     */
//     // creating an interface  
//     // creating schema using interface
// })
// pattern MVC , Modular
/*
Interface  -> interface.ts
Schema , Model -> medel.ts
route
route function -> controler.ts
Database Query Function --> service
*/