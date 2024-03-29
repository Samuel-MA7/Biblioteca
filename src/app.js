import express from 'express'

//executing express
const app = express()

//calling the routes
app.get('/', (req,res) => {
    res.status(200).send('Node.js and Express curse')
})

export default app