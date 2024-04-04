import { author } from '../models/Authors.js'

class AuthorController {
    //use the method without having to instantiating the class
    //get routes
    static async listAuthors(req,res){
        try{
            const authorsList = await author.find()
            res.status(200).json(authorsList)
        }catch(error){
            res.status(500).json({ message:`${error.message} - the raquisition failed!` })
        }
    }
    static async findAuthorById(req,res){
        try{
            const id = req.params.id
            const authorById = await author.findById(id)
            res.status(200).json(authorById)
        }catch(error){
            res.status(500).json({ message:`${error.message} - the raquisition failed!` })
        }
    }
    //post routes
    static async registerAuthor(req,res){
        try{
            const newAuthor = await author.create(req.body)
            res.status(201).json({ message:"Registered successfully!",author:newAuthor })
        }catch(error){
            res.status(500).json({ message:`${error.message} - the register failed!` })
        }
    }
    //put routes
    static async updateAuthorById(req,res){
        try{
            const id = req.params.id
            await author.findByIdAndUpdate(id,req.body)
            res.status(200).json({ message:"The author has been updated." })
        }catch(error){
            res.status(500).json({ message:`${error.message} - the raquisition failed!` })
        }
    }
    //delete routes
    static async deleteAuthorById(req,res){
        try{
            const id = req.params.id
            await author.findByIdAndDelete(id)
            res.status(200).json({ message:"The author has been deleted." })
        }catch(error){
            res.status(500).json({ message:`${error.message} - the raquisition failed!` })
        }
    }
}

export default AuthorController