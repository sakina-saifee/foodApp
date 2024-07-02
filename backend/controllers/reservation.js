import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";

export const sendReservation =async (req, res, next)=>{
    const{firstname, lastname, email, phone, date, time}= req.body;

    if(!firstname || !lastname || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill full reservation form", 400));
    }
    try{
        await Reservation.create(firstname, lastname, email, phone, date, time);
        res.status(200), json({
            success: true,
            message: "Reservation done successfully!"
        })
    }catch(error){
        if(error.name==="ValidationError"){
            const ValidationErrors=Object.values(error.errors).map(
                (err)=>err.message
            );

            return next(new ErrorHandler(ValidationErrors.join(","), 400));
        }

    }
}