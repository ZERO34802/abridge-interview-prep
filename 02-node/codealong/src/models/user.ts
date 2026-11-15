import mongoose from "mongoose";

const User = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    userId: String,
    password: String,
    email:String,
    age: Number,
});

export const userModel = mongoose.model('User',User);