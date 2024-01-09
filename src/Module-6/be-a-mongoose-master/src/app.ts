import express, { Application,NextFunction,Request,Response } from 'express';
import cors from "cors";
import { Schema,model } from "mongoose";
const app: Application = express();

//using cors
app.use(cors());
// parse data
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    //inserting a test data into mongodb
    /*
    step1: Interface
    step2: Schema
    step3: Model
    step4: Database Query
    */
    // creating an interface
   
    // creating schema using interface
   
    const createUserToDB = async () => {
        const user = new User({
            id: '777',
            role: "student",
            password: "Jhakanaka",
            name: {
                firstName: "Mukta",
                middleName: "Thakur",
                lastName: "Meghla",
            },
            // dateOfBirth?: "07.04.1998",
            gender: "male",
            email: "mukta.meghla123@gmail.com",
            contactNo: "01302564259",
            emergencyContactNo: "018000000",
            presentAddress: "Dhaka",
            permanentAddress: "Kuti",

        });
        await user.save();
        console.log(user);
    } 
    createUserToDB()
})
export default app;


// pattern MVC , Modular

/*
Interface  -> interface.ts
Schema , Model -> medel.ts
route
route function -> controler.ts
Database Query Function --> service

*/