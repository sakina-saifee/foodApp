import mongoose, { mongo } from "mongoose";
import validator from "validator";

const reservationSchema =new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain atleast 3 characters"],
        maxLength: [30, "First name cannot exceed 30 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain atleast 3 characters"],
        maxLength: [30, "Last name cannot exceed 30 characters"],
    },
    email:{
        type: String,
        required: true,
       validate: [validator.isEmail, "Provide  a valid email address"],
    },
    phone:{
        type: String,
        required: true,
        minLength: [11, "Phone number must contain only 11 digits"],
        maxLength: [11, "Phone number must contain only 11 digits"],
    },
    time:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
});

export const Reservation= mongoose.model("Reservation", reservationSchema);