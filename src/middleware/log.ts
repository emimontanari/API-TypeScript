import { NextFunction, Request, Response } from "express";
const logMiddleware = async (req:Request, res: Response, next: NextFunction) => {
    const header = req.headers['user-agent']
    console.log(header)
    next()
}


export {
    logMiddleware
}