import http from 'http'

//server's port
const PORT = 3000

//server's route
const routes = {
    '/': 'Node.js and Express curse',
    '/books':'You have entered in books route',
    '/authors':'You have entered in authors route'
}

//create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/plan'})
    res.end(routes[req.url])
})

server.listen(PORT, () => {
    console.log('Server activated!')
})