import mongoose from "mongoose";
process.loadEnvFile();

//connecting to cluster in mongodb
async function connectDB() {
    try {
        console.log("Trying to connect to Cluster...");
        const mongoURI = process.env.MONGODB_URI;
        if(typeof mongoURI !== "string" || mongoURI === undefined) {
             throw new Error("MONGODB_URI is not set");
        }
        const conn = await mongoose.connect(mongoURI);
        console.log("Connected to Cluster successfully");
    }catch (err) {
        console.log("Unable to connect to Cluster!");
        if(err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

export default connectDB;