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
        required: [true,"Book's publisher is required!"] 
    },
    preço: { type:Number },
    páginas: { type:Number },
    autor: authorSchema
}, { versionKey:false })

//makes the interface for api and db
const book = mongoose.model('books',bookSchema)

export default book