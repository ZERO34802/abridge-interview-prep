import express from "express";
import connectDB from "./config/database.js";
import { userModel } from "./models/user.js"
import HttpError from "./utils/HttpError.js";
import { UserSignUpDataValid, validateUserLoginData } from "./utils/validation.js";
import validator from "validator";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { userAuth } from "./middlewares/auth.js"

const app = express();
app.use(express.json());
app.use(cookieParser());

app.post("/login",async (req,res)=> {
    try {
        //validate user login info - emailid and password
        if(validateUserLoginData(req.body)) {
            const query = {
                email : req.body.email.trim()
            }
            const password = req.body.password;
            const user = await userModel.findOne(query);
            
            if(!user) {
                throw new HttpError(401, "Invalid Credentials");
            }

            if("password" in user && user.password !== null && user.password !== undefined) {
                const passWordCheck = await bcrypt.compare(password, user?.password);
                if(passWordCheck) {
                    const token = await jwt.sign({_id : user._id},"testingjwt");
                    res.cookie("token",token);
                    res.status(200).send("Login Successful!");
                }else {
                    throw new HttpError(401, "Invalid Credentials");
                }
            }else {
                throw new HttpError(401, "Invalid Credentials");
            }
        }else {
            throw new HttpError(401, "Invalid Credentials");
        }
    }catch (err){
        if(err instanceof HttpError) {
            res.status(err.status).send(err.message);
        }else if(err instanceof Error) {
            console.log(err);
            res.status(500).send("Unknown Error, Contact Support");
        }else {
            console.log(err);
            res.status(500).send("Unknown Error, Contact Support");
        }
    }
});

app.post("/signup",async (req,res) => {
    const userData : unknown = req.body;
    console.log(userData);
    if(UserSignUpDataValid(userData)) {
        try {
            const { password } = userData;
            if(/\s/.test(password)) {
                throw new HttpError(400, "Password cannot have spaces");
            }
            const userObj = {
                "firstName" : userData?.firstName.trim(),
                "lastName" : userData?.lastName.trim(),
                "email" : userData?.email.trim(),
                "age" : userData?.age,
                "userId" : userData?.userId.trim(),
                "password" : await bcrypt.hash(userData?.password, 10)
            }
            const user = new userModel(userObj);
            await user.save();
            res.send("User saved successfully");
        } catch(err) {
            res.status(400).send("Error in adding user...");
        }
    }else {
        res.status(400).send("Invalid Request Data..");
    }
});

//get user by email id
app.get("/user/email",async (req,res)=>{
    const userEmail = req.body.email;
    if(typeof userEmail === "string" && userEmail !== undefined) {
        try {
            const userData = await userModel.find({ email : `${userEmail}` });
            console.log(userData);
            res.status(200).json(userData);
        } catch (err) {
            res.status(404).send("User not found!");
        }
    }else {
        res.status(400).send("Please send valid email!");
    }
});

app.get("/profile",userAuth, async (req, res)=> {
    try {
        const userProfile = req.user
        if(!userProfile) {
            throw new HttpError(401,"User Logged Out, Please login again");
        }
        res.status(200).send(userProfile);
    }catch(err) {
        if(err instanceof HttpError) {
            res.status(err.status).send(err.message);
        }else {
            res.status(500).send("Unknown Error");
        }
    }
});

//Feed api
app.get("/feed",async (req,res) => {
    try {
        const allUsers = await userModel.find({});
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(404).send("No Users Found!");
    }
});


app.patch("/user/updateGender",async (req,res) => {
    let userEmail = req.body.email;
    let newGender = req.body.gender;

    try {
        
        if(typeof userEmail !== "string") {
            throw new HttpError(400,"Please send a valid email ID" );
        }else userEmail = userEmail.trim();

        if(typeof newGender !== "string") {
            throw new HttpError(400, "Gender must be of type String")
        }else newGender = newGender.trim();

        if(userEmail === "") {
            throw new HttpError(400, "User Email cannot be empty!");
        }
        if(newGender === "") {
            throw new HttpError(400, "User Gender is not allowed to be empty!");
        }

        const query = {
            email: userEmail
        }
        const user = await userModel.findOneAndUpdate(query, {gender : newGender },
            {
                runValidators : true,
                returnDocument : "after"
            }
        )
        if(user) {
            res.status(200).json({ status : 200, message : "User updated successfully"});
            return;
        }else {
            throw new HttpError(404,"Error in fetching User, invalid email");
        }

    }catch(err) {
         if (err instanceof HttpError) {
            res.status(err.status).json({ status: err.status, message: err.message });
        } else if (err instanceof Error) {
            if(err.name === "ValidationError")res.status(400).json({ status: 400, message: err.message });
            else {
                res.status(500).send({status : 500, message : "Unknown Error Please Contact Support!"});
                console.log(err.message);
                return;
            }
        }
    }
});


//right way of connecting is to first connect to the database, then make your server start listening on the port
async function initApp() {
    try {
        await connectDB();
        app.listen(3000, () => {
            console.log("Server is listening on 3000...");
        });
    }catch(err) {
        console.log("Error in initializing app...", err);
    }
}
initApp();

