import express, { json } from 'express'

import  deptosRouters  from './routes/deptos.routes.js'
import  indexRouters  from './routes/index.routes.js'
import './config.js'
console.log("hola miguel")

const app = express()

app.use(express.json())

app.use('/api',deptosRouters)
app.use(indexRouters)
app.use((req,res,next)=>{
    res.status(404).json({message:'endpoint not found'})
})



console.log("server se ejecuta en el puerto 3000 miguel")

export default app