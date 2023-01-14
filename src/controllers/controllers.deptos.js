import { pool } from "../appdb.js"

export const getDeptos = async (req,res)=>{
  try{
  const [rows] = await pool.query('SELECT * FROM deptos')
  res.json(rows)
  

  } catch(error){
    return res.status(500).json({
      messege:'hubo un error'
    })

  }

}

export const getDepto = async (req,res)=>{

  try{
   
 const [rows] = await pool.query('SELECT * FROM deptos WHERE id=?',[req.params.id])
  if (rows.length <= 0) return res.status(404).json({
    messege: 'Depto not found'
  })
 
 res.json(rows[0])
  }catch(error){
    return res.status(500).json({
      messege:'hubo un error'
    })
  }

  


}

export const createDeptos = async (req,res)=>{
    const {dire}=req.body
  try{
  
  const [rows] = await pool.query('INSERT INTO deptos (direccion) VALUES (?)',[dire])
    console.log(req.body)
  res.send({rows})
  }catch{
    return res.status(500).json({
      messege:'hubo un error'
    })
  }

}

export const updateDeptos = async (req,res)=>{
  const {id}=  req.params
  const {dire}=  req.body
  try{

  
  const [result] = await pool.query('UPDATE deptos SET direccion = IFNULL(?,direccion) WHERE id=?',[dire,id]) 

  //console.log(result)

  if(result.affectedRows === 0)return res.result(404).json({messege:'depto not found'})

       res.json('recived')
  }catch{
    return res.status(500).json({
      messege:'hubo un error'
    })
  }


}



export const deleteDeptos = async(req,res)=>{

  try{
      
  const [result] = await pool.query('DELETE FROM deptos WHERE id=?',[req.params.id])

  if(result<=0) return res.status(404).json({messege: 'depto not foud'})
  res.send(res.sendStatus(204))
  }catch{
    return res.status(500).json({
      messege:'hubo un error'
    })
  }

}