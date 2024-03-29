import http from 'http'

//server's port
const PORT = 3000

//create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/plan'})
    res.end("Node.js curse.")
})

server.listen(PORT, () => {
    console.log('Server activated!')
})