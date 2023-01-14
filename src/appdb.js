//const mysql = require('mysql')

import { createPool } from 'mysql2/promise';

import{DB_PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE} from './config.js'


export const pool =  createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,  
    database: DB_DATABASE,
});

// conexion.connect(function (err){
//     if(err){
//         throw err;

//     }else{
//         console.log("conexion exitosa")
//     }
// })

// conexion.end()

