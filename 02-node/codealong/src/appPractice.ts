import express from "express";
import type { ErrorRequestHandler } from "express";
import { adminAuth, userAuth  } from "./middlewares/auth.js";

const app = express();
app.use(express.json())


//2 routes to demonstrate error handling
//the one throwing error is here and the one catching it and sending appropriate response
// called wildcard error handling
// BEST PRACTICE IS TRY CATCH!

app.get("/tryErrorHandling",(req,res) => {
    console.log("Error is now being thrown");
    throw new Error("Error being thrown");
});

//using middlewares to create auth for admin api
//use app.use() for middleware
app.use("/admin", adminAuth);

app.post("/admin/getAllData",(req,res,next) => {
    res.send("Getting All Data");
});

app.post("/admin/deleteAllData",(req,res,next) => {
    res.send("Deleting All Data");
});

//using middleware for auth for all user apis except login

app.post("/user/login",(req,res)=> {
    console.log("User is requesting login page...");
    res.send("User is logged in");
})

// adding user auth middleware
app.use("/user",userAuth);

// playing with route handlers
app.get("/routeHandleJumping",
    (req,res,next) => {
        console.log("This is the first route handler");
        next();
    },
    (req,res,next) => {
        console.log("This is the second route handler");
        next();
    },
    (req,res) => {
        console.log("This is the third route handler");
        res.status(200).send("There were 3 route handlers in this sequence");
    }
);

app.get("/user/:userid",(req,res) => {
    console.log(req.query);
    console.log(req.params);
    if(typeof req.query.name === "string") {
        console.log(req.query.name);
        res.send(`This is the get user route and firstname : ${req.query.name}`);
    }else if(Array.isArray(req.query.name)) {
        res.send(`The first name is ${req.query.name[0]} && the second name is ${req.query.name[1]}`)
    }else {
        res.status(400).send("error : please fix the api request url")
    }
});

app.get("/getEndpoint",(req,res) => {
    res.send("I am the Get Endpoint");
});

app.post("/postEndpoint",(req,res,next) => {
    console.log("sending to the next post endpoint");
    next();
})

app.post("/postEndpoint",(req,res,next) => {
    res.send("I am the second post endpoint");
})

app.put("/putEndpoint",(req,res) => {
    res.send("I am the put endpoint");
})

app.use("/firstEndpoint",(req,res) => {
    res.send("Hello response from first endpoint");
});

app.listen(3000,() => {
    console.log("The server is running on 3000...");
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log("Error being caught");
    if(err) {
        res.status(500).send("Unknown error, contact support");
    }
}

app.use("/",errorHandler);