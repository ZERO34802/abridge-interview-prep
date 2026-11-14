import express from "express";

const app = express();

app.use("/firstEndpoint",(req,res) => {
    res.send("Hello response from first endpoint");
});

app.listen(3000,() => {
    console.log("The server is running on 3000...");
});