import { Request, Response } from "express";
import {registerNewUser, loginUser} from '../services/auth';
import { generateToken } from "../utils/jwt.handle";

const registerCtrl = async ({ body}: Request, res: Response) => {

    const responseUser = await registerNewUser(body)
    res.json(responseUser)
}

const loginCtrl = async ({body}: Request, res: Response) => {
    const {email, password} = body
    const responseUser = await loginUser({email, password})
    if(typeof responseUser === "string") return res.status(400).json({message: responseUser})
    
    res.json(responseUser)
}

export {registerCtrl, loginCtrl}