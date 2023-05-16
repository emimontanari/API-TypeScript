import { Router } from "express";
import { deleteBlogs, getBlog, getBlogs, postBlogs, updateBlogs } from "../controllers/blog";

const router = Router();

router.get('/', getBlogs)
router.get('/:id', getBlog)
router.post('/', postBlogs)
router.put('/:id', updateBlogs)
router.delete('/:id', deleteBlogs)

export { router };