import mongoose from 'mongoose'

//author schema
const authorSchema = new mongoose.Schema({
    id: { type:mongoose.Schema.Types.ObjectId },
    nome: { 
        type:String, 
        required: [true,"Author's name is required!"] 
    },
    nacionalidade: { type:String }
},{ versionKey: false })

const author = mongoose.model('authors', authorSchema)

export { author,authorSchema }