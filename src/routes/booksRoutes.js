import express from 'express'
import BookController from '../controllers/bookController.js'

const routes = express.Router()

//get routes
routes.get('/books',BookController.listBooks)
routes.get('/books/search',BookController.listBooksByPublisher)
routes.get('/books/:id',BookController.findBookById)
//post routes
routes.post('/books',BookController.registerBook)
//put routes
routes.put('/books/:id',BookController.updateBookById)
//delete routes
routes.delete('/books/:id',BookController.deleteBookById)

export default routes