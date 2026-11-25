import { timeStamp } from "console";
import mongoose from "mongoose";
import validator from "validator";

const User = new mongoose.Schema ({
    firstName: { 
        type: String,
        required : true,
        trim: true
    },
    lastName: { 
        type: String,
    },
    userId: { 
        type: String 
    },
    password: { 
        type: String,
        minLength: 10,
        match : [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, "Password must have upper, lower, number and special character"]
    },
    email: { 
        type: String,
        required: true,
        unique : true,
        lowercase: true,
        trim : true
    },
    age: { 
        type: Number,
        min: 18
    },
    about : {
        type: String,
        default : "Hi, I am a developer here looking to meet new people :)..."
    },
    gender : {
        type: String,
        validate(gender : string) {
            if(!["Male","Female","Other"].includes(gender)) {
                throw new Error("Gender type entered is not valid...")
            }
        }
    },
    skills : {
        type: [String]
    },
    photoUrl : {
        type: String,
        default : "https://imgs.search.brave.com/jHDp_R14w-tbRDiYsyiOCGDeCSPE4WqsVfFwiXVDyow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzY4LzUwLzU3/LzM2MF9GXzExNjg1/MDU3OTRfSUJDRWlh/ZnNJckhGSjA5ZTY1/UDJ2aDUxMTVDMVhJ/N2UuanBn"
    }
},
{
    timestamps : true
});

export const userModel = mongoose.model('User',User);
