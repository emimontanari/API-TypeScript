import {Request, Response} from 'express'
import { handleHttp } from '../utils/error.handle';


const getBlog = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "Error getting Blog")
    }
};
const getBlogs = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "Error getting Blogs")
    }
};
const postBlogs = ({body}:Request, res:Response) => {
    try {
        res.json(body)
    } catch (error) {
        handleHttp(res, "Error posting Blogs")
    }
};
const deleteBlogs = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "Error deleting Blogs")
    }
};
const updateBlogs = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, "Error updating Blogs")
    }
};



export{
    getBlog,
    getBlogs,
    postBlogs,
    deleteBlogs,
    updateBlogs
}

