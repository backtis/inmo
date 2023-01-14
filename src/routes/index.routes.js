import { Router } from "express";
import { pool } from "../appdb.js";
import { ping } from "../controllers/index.controllers.js";




const router = Router()



router.get('/ping', ping)

  export default router