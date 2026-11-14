import express from "express";

const app = express();

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