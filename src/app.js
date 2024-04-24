import express from 'express'
import dotenv from 'dotenv'
import connectOnDB from './config/db_connect.js'
import routes from './routes/index.js'
import errorMiddleware from './middlewares/errorMiddleware.js'
import error404Middleware from './middlewares/error404Middleware.js'

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

//error404 middleware
app.use(error404Middleware)

//error middleware
app.use(errorMiddleware)

export default app