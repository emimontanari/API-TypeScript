import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.handle';
import { JwtPayload } from 'jsonwebtoken';

interface RequestExt extends Request {
    user?: string | JwtPayload
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization?.split(" ")[1] || null;

        const isUser = verifyToken(`${jwtByUser}`)
        if(!isUser){
            res.status(401)
            res.send("Unauthorized")
        }else{
            req.user = isUser
            next();
        }
    
    } catch (error) {
        res.status(401)
        res.send("Unauthorized")
    }
}

export {
    checkJwt
}