import {Request, Response} from 'express'
import { handleHttp } from '../utils/error.handle';
import { insertCar, getCars, getCar,updateCar, deleteCar } from '../services/items';


const getItem = async  ({ params }: Request, res:Response) => {
    try {
        const { id } = params
        const response = await  getCar(id)
        const data = response ? response : "Item not found"

        res.json(data)

    } catch (error) {
        handleHttp(res, "Error getting item")
    }
};
const getItems = async (req:Request, res:Response) => {
    try {
        const response =await  getCars()
        res.json(response)
    } catch (error) {
        handleHttp(res, "Error getting items")
    }
};
const postItems = async ({body}:Request, res:Response) => {
    try {
        const reponseItem = await insertCar(body)
        res.json(reponseItem)
    } catch (e) {
        handleHttp(res, "Error posting items", e)
    }
};
const deleteItems = ({params}:Request, res:Response) => {
    try {
        const { id } = params
        const response = deleteCar(id)
        res.json(response)
    } catch (error) {
        handleHttp(res, "Error deleting items")
    }
};
const updateItems = async ({params,body}:Request, res:Response) => {
    try {
        const { id } = params
        const response = await updateCar(id,body)
        res.json(response)
    } catch (error) {
        handleHttp(res, "Error updating items")
    }
};



export{
    getItem,
    getItems,
    postItems,
    deleteItems,
    updateItems
}

