import {sign, verify} from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET || "sorken.01010101"

const generateToken = (id:string) => {
    const jwt = sign({id}, JWT_SECRET, {expiresIn: "1h"})
    return jwt
    
}


const verifyToken = (jwt:string) => {
    const data = verify(jwt, JWT_SECRET)
    return data
}


export {
    generateToken,
    verifyToken
}
