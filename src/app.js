import express from 'express'

//executing express
const app = express()
app.use(express.json())//middleware

const books = [
    {
        id: 1,
        título: "Ilíada"
    },
    {
        id: 2,
        título: "Odisseia"
    }
]
function searchBook(id){
    return books.findIndex(book => {
        return book.id === Number(id)
    })
}

//calling the routes
//get routes
app.get('/', (req,res)=>{
    res.status(200).send('Node.js and Express curse')
})
app.get('/books',(req,res)=>{
    res.status(200).json(books)
})
app.get('/books/:id',(req,res)=>{
    const index = searchBook(req.params.id)
    res.status(200).json(books[index])
})
//post routes
app.post('/books',(req,res)=>{
    books.push(req.body)
    res.status(201).send("The book has been registered successfully.")
})
//put routes
app.put('/books/:id',(req,res)=>{
    const index = searchBook(req.params.id)
    books[index].título = req.body.título
    res.status(200).json(books)
})
//delete routes
app.delete('/books/:id',(req,res)=>{
    const index = searchBook(req.params.id)
    books.splice(index,1)
    res.status(200).send('The book has been removed!')
})

export default app