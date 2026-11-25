import { Request, Response, NextFunction, RequestHandler } from "express";
import HttpError from "../utils/HttpError.js";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user.js";

export const adminAuth = (req:Request,res:Response,next : NextFunction) => {
    console.log("Admin auth actions are being performed...");
    const password = req.body?.password;
    console.log(password);
    if (typeof password === "string" && password === "xyz") {
        next();
    }else {
        res.status(401).send("Unauthorized access");
    }
}

export const userAuth: RequestHandler = async (req,res,next) => {
    try {
        //validate if the cookie and token sent to this api is valid
        //only then allows the user to access
        const cookie = req.cookies;
        if(!cookie) {
            throw new HttpError(401, "Please Login again");
        }
        const { token } = cookie;
        if(!token) {
            throw new HttpError(401, "Please Login again");
        }
        // verify the token
        const jwtDecodedObj = await jwt.verify(token, "testingjwt") as {_id:string};
        const { _id  } = jwtDecodedObj;
        const userObj = await userModel.findById(_id);
        if(!userObj) {
            throw new HttpError(401, "Please Login again");
        }else {
            req.user = userObj;
            next();
        }
    }catch(err) {
        if(err instanceof HttpError) {
            res.status(err.status).send(err.message);
        }else {
            res.status(500).send("Unknown Error");
        }
    }
}