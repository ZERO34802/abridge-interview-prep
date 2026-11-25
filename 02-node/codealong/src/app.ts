import express from "express";
import connectDB from "./config/database.js";
import { userModel } from "./models/user.js"
import HttpError from "./utils/HttpError.js";
import validator from "validator";

const app = express();
app.use(express.json());

interface UserSignUpData {
    firstName : string;
    lastName : string;
    userId : string;
    password : string;
    email : string;
    age: number;
}

const ALLOWED_USER_SIGN_UP_INFO = ["firstName","lastName","email","age","userId","password"];

function UserSignUpDataValid(userData:unknown): userData is UserSignUpData {
    if(typeof userData === "object" && userData !== undefined && userData !== null) {
        if("firstName" in userData && typeof userData.firstName === "string" && userData.firstName.trim() !== ""
            && "lastName" in userData && typeof userData.lastName === "string" && userData.lastName.trim() !== ""
            && "email" in userData && typeof userData.email === "string" && validator.isEmail(userData.email)
            && "age" in userData && typeof userData.age === "number" && userData.age >= 18 && Number.isInteger(userData.age)
            && "userId" in userData && typeof userData.userId === "string" && userData.userId.trim() !== ""
            && "password" in userData && typeof userData.password === "string" && validator.isStrongPassword(userData.password)
        ) {
            let isEligible = Object.keys(userData).every((key) => {
                return ALLOWED_USER_SIGN_UP_INFO.includes(key);
            });
            if(isEligible) {
                return true;
            }else return false;
        }
    }
    return false;
}

app.post("/signup",async (req,res) => {
    const userData : unknown = req.body;
    console.log(userData);
    if(UserSignUpDataValid(userData)) {
        try {
            const userObj = {
                "firstName" : userData?.firstName.trim(),
                "lastName" : userData?.lastName.trim(),
                "email" : userData?.email.trim(),
                "age" : userData?.age,
                "userId" : userData?.userId.trim(),
                "password" : userData?.password
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

