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
            values:["Helênica"],
            message:"The {VALUE} publisher is not an allowed value!" 
        }
    },
    preço: { type:Number },
    páginas: { 
        type:Number,
        min:[1,"The number of pages must be between 1 and 3000!"],
        max:[3000,"The number of pages must be between 1 and 3000!"] 
    },
    autor: authorSchema
}, { versionKey:false })

//makes the interface for api and db
const book = mongoose.model('books',bookSchema)

export default book