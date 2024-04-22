import book from '../models/Books.js'
import { author } from '../models/Authors.js'

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
            res.status(200).json(bookById)
        }catch(error){
            next(error)
        }
    }
    static async listBooksByPublisher(req,res,next){
        const publisher = req.query.editora
        try{                                           //model property and param
            const booksByPublisher = await book.find({ editora:publisher })
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
            await book.findByIdAndUpdate(id,req.body)
            res.status(200).json({ message:"The book has been updated." })
        }catch(error){
            next(error)
        }
    }
    //delete routes
    static async deleteBookById(req,res,next){
        try{
            const id = req.params.id
            await book.findByIdAndDelete(id)
            res.status(200).json({ message:"The book has been deleted." })
        }catch(error){
            next(error)
        }
    }
}

export default BookController