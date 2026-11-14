import express from "express";

const app = express();

app.get("/getEndpoint",(req,res) => {
    res.send("I am the Get Endpoint");
});

app.post("/postEndpoint",(req,res) => {
    res.send("I am the post endpoint");
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