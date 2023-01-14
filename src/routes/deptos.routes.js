import { Router } from "express";
import { createDeptos, deleteDeptos, getDeptos,getDepto, updateDeptos } from "../controllers/controllers.deptos.js";

const router  = Router()


router.get('/deptos',getDeptos)
router.get('/deptos/:id',getDepto)
router.post('/deptos',createDeptos)
//router.put('/deptos',updateDeptos)
router.patch('/deptos/:id',updateDeptos)
router.delete('/deptos/:id',deleteDeptos)

export default router