import express from 'express'
import AuthorController from '../controllers/authorController.js'

const routes = express.Router()

//get routes
routes.get('/authors',AuthorController.listAuthors)
routes.get('/authors/:id',AuthorController.findAuthorById)
//post routes
routes.post('/authors',AuthorController.registerAuthor)
//put routes
routes.put('/authors/:id',AuthorController.updateAuthorById)
//delete routes
routes.delete('/authors/:id',AuthorController.deleteAuthorById)

export default routes