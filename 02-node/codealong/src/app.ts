import express from "express";
import connectDB from "./config/database.js";
import { userModel } from "./models/user.js"

const app = express();
app.use(express.json());

app.post("/signup",async (req,res) => {
    const userData = {
        firstName:"Karthik",
        lastName: "Panicker",
        email: "karthikdp9@gmail.com",
        userId: "karthikp23",
        password : "Kamoksh@01",
        age : 23
    }

    try {
        const user = new userModel(userData);
        await user.save();
        res.send("User saved successfully");
    } catch(err) {
        res.status(400).send("Error in adding user...");
    }
})


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

