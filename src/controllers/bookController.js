import book from '../models/Books.js'

class BookController {
    //use the method without having to instantiating the class
    //get routes
    static async listBooks(req,res){
        try{
            const booksList = await book.find()
            res.status(200).json(booksList)
        }catch(error){
            res.status(500).json({ message:`${error.message} - the raquisition failed!` })
        }
    }
    static async findBookById(req,res){
        try{
            const id = req.params.id
            const bookById = await book.findById(id)
            res.status(200).json(bookById)
        }catch(error){
            res.status(500).json({ message:`${error.message} - the raquisition failed!` })
        }
    }
    //post routes
    static async registerBook(req,res){
        try{
            const newBook = await book.create(req.body)
            res.status(201).json({ message:"Registered successfully!",book:newBook })
        }catch(error){
            res.status(500).json({ message:`${error.message} - the register failed!` })
        }
    }
    //put routes
    static async updateBookById(req,res){
        try{
            const id = req.params.id
            await book.findByIdAndUpdate(id,req.body)
            res.status(200).json({ message:"The book has benn updated." })
        }catch(error){
            res.status(500).json({ message:`${error.message} - the raquisition failed!` })
        }
    }
    //delete routes
    static async deleteBookById(req,res){
        try{
            const id = req.params.id
            await book.findByIdAndDelete(id)
            res.status(200).json({ message:"The book has benn deleted." })
        }catch(error){
            res.status(500).json({ message:`${error.message} - the raquisition failed!` })
        }
    }
}

export default BookController