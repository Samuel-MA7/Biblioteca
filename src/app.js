import express from 'express'
import dotenv from 'dotenv'
import connectOnDB from './config/db_connect.js'
import routes from './routes/index.js'

//calling dotenv
dotenv.config()

//connection with mongodb
const connection = await connectOnDB()
connection.on('error',(error)=>{
    console.error('Connection error',error)
})
connection.once('open',()=>{
    console.log('Connention has been succeded.')
})

//executing express
const app = express()

//calling the routes
routes(app)

export default app