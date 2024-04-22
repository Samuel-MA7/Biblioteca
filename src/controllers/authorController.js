import { author } from '../models/Authors.js'

class AuthorController {
    //use the method without having to instantiating the class
    //get routes
    static async listAuthors(req,res,next){
        try{
            const authorsList = await author.find()
            res.status(200).json(authorsList)
        }catch(error){
            next(error)
        }
    }
    static async findAuthorById(req,res,next){
        try{
            const id = req.params.id
            const authorById = await author.findById(id)
            if(authorById !== null){
                res.status(200).json(authorById)
            }else{
                res.status(404).send({ message:"The author's id was not found!" })
            }
        }catch(error){
            next(error)
        }
    }
    //post routes
    static async registerAuthor(req,res,next){
        try{
            const newAuthor = await author.create(req.body)
            res.status(201).json({ message:"Registered successfully!",author:newAuthor })
        }catch(error){
            next(error)
        }
    }
    //put routes
    static async updateAuthorById(req,res,next){
        try{
            const id = req.params.id
            await author.findByIdAndUpdate(id,req.body)
            res.status(200).json({ message:"The author has been updated." })
        }catch(error){
            next(error)
        }
    }
    //delete routes
    static async deleteAuthorById(req,res,next){
        try{
            const id = req.params.id
            await author.findByIdAndDelete(id)
            res.status(200).json({ message:"The author has been deleted." })
        }catch(error){
            next(error)
        }
    }
}

export default AuthorController