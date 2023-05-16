import { Router, Request, Response } from 'express';
import { get } from 'mongoose';
import { deleteItems, getItem, getItems, postItems, updateItems } from '../controllers/item';
import { logMiddleware } from '../middleware/log';

const router = Router();

router.post('/' , postItems);
router.get('/' , getItems);
router.get('/:id' , logMiddleware,  getItem);
router.put('/:id' , updateItems);
router.delete('/:id' , deleteItems);


export  { router };
