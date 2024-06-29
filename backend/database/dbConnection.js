import mongoose from "mongoose";


export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "FoodApp"
    }).then(()=>{
        console.log("Connected to Database successfully");
    }).catch((err=>{
        console.log("Some Error Occured while connecting to database " )
    }))
}