import { Router } from "express";
import { getBook } from "../controllers/book.controllers.js";



const router = Router()


router.get("/", getBook)

export default router