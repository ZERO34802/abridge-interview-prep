import express from "express";
import { Request, Response, NextFunction, RequestHandler } from "express";

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

export const userAuth: RequestHandler = (req,res,next) => {
    console.log("User Auth is being performed here");
    next();
}