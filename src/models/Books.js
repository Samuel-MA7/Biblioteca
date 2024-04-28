import mongoose from 'mongoose'
import { authorSchema } from './Authors.js'

//books schema
const bookSchema = new mongoose.Schema({
    id: { type:mongoose.Schema.Types.ObjectId },
    título: { 
        type:String, 
        required: [true,"Book's title is required!"] 
    },
    editora: { 
        type:String,
        required: [true,"Book's publisher is required!"],
        enum:{
            values:["Helênica","Lusitana"],
            message:"The {VALUE} publisher is not an allowed value!" 
        }
    },
    preço: { type:Number },
    páginas: { 
        type:Number,
        validate:{
            validator: (value)=>{
                return value >= 1 && value <= 3000
            },
            message:"Book's number of pages must be between 1 and 3000!"
        } 
    },
    autor: authorSchema
}, { versionKey:false })

//makes the interface for api and db
const book = mongoose.model('books',bookSchema)

export default book