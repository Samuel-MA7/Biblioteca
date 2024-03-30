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

//calling the routes
app.get('/', (req,res) => {
    res.status(200).send('Node.js and Express curse')
})
app.get('/books', (req,res) => {
    res.status(200).json(books)
})
app.post('/books', (req,res) => {
    books.push(req.body)
    res.status(201).send("The book has been registered successfully.")
})

export default app