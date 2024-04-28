import { book } from '../models/index.js'
import { author } from '../models/index.js'
import NotFound from '../errors/NotFound.js'

class BookController {
    //use the method without having to instantiating the class
    //get routes
    static async listBooks(req,res,next){
        try{
            const booksList = await book.find()
            res.status(200).json(booksList)
        }catch(error){
            next(error)
        }
    }
    static async findBookById(req,res,next){
        try{
            const id = req.params.id
            const bookById = await book.findById(id)
            if(bookById !== null){
                res.status(200).json(bookById)
            }else{
                next(new NotFound("The book's id was not found!"))
            }
        }catch(error){
            next(error)
        }
    }
    static async listBooksByFilter(req,res,next){
        try{
            const { editora,título } = req.query
            const search = {}
            if(título) search.título = título
            if(editora) search.editora = editora
            const booksByPublisher = await book.find(search)
            res.status(200).json(booksByPublisher)
        }catch(error){
            next(error)
        }
    }
    //post routes
    static async registerBook(req,res,next){
        const newBook = req.body
        try{
            const foundAuthor = await author.findById(newBook.autor)
            const allBook = { ...newBook,autor: { ...foundAuthor._doc } }
            const createdBook = await book.create(allBook)
            res.status(201).json({ message:"Registered successfully!",book:createdBook })
        }catch(error){
            next(error)
        }
    }
    //put routes
    static async updateBookById(req,res,next){
        try{
            const id = req.params.id
            const bookResult = await book.findByIdAndUpdate(id,req.body)
            if(bookResult !== null){
                res.status(200).json({ message:"The book has been updated." })
            }else{
                next(new NotFound("The book's id was not found!"))
            }
        }catch(error){
            next(error)
        }
    }
    //delete routes
    static async deleteBookById(req,res,next){
        try{
            const id = req.params.id
            const bookResult = await book.findByIdAndDelete(id)
            if(bookResult !== null){
                res.status(200).json({ message:"The book has been deleted." })
            }else{
                next(new NotFound("The book's id was not found!"))
            }
        }catch(error){
            next(error)
        }
    }
}

export default BookController