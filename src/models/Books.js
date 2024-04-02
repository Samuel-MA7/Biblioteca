import mongoose from 'mongoose'

//books schema
const bookSchema = new mongoose.Schema({
    id: { type:mongoose.Schema.Types.ObjectId },
    título: { type:String, require:true },
    editora: { type:String },
    preço: { type:Number },
    páginas: { type:Number }
}, { versionKey:false })

//makes the interface for api and db
const book = mongoose.model('books',bookSchema)

export default book