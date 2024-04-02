import express from 'express'
import dotenv from 'dotenv'
import connectOnDB from './config/db_connect.js'
import book from './models/Books.js'

//calling dotenv
dotenv.config()

const connection = await connectOnDB();
connection.on('error',(error)=>{
    console.error('Connection error',error)
})
connection.once('open',()=>{
    console.log('Connention has been succeded.')
})

//executing express
const app = express()
app.use(express.json())//middleware

//calling the routes
//get routes
app.get('/',(req,res)=>{
    res.status(200).send('Node.js and Express curse')
})
app.get('/books',async(req,res)=>{
    const booksList = await book.find()
    res.status(200).json(booksList)
})
app.get('/books/:id',(req,res)=>{
    const index = searchBook(req.params.id)
    res.status(200).json(books[index])
})
//post routes
app.post('/books',(req,res)=>{
    books.push(req.body)
    res.status(201).send("The book has been registered successfully.")
})
//put routes
app.put('/books/:id',(req,res)=>{
    const index = searchBook(req.params.id)
    books[index].título = req.body.título
    res.status(200).json(books)
})
//delete routes
app.delete('/books/:id',(req,res)=>{
    const index = searchBook(req.params.id)
    books.splice(index,1)
    res.status(200).send('The book has been removed!')
})

export default app