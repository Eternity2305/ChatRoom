const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)
const path = require("path")
const unToId = {}

app.get('/', function(req,res) {
    res.sendFile("index.html",{root: path.join(__dirname)})
})

io.on("connection", function(socket) {
    console.log("A user connected ",socket.id)
    socket.on("msg",function(data) {
        
        console.log(data)
    })
    socket.on("disconnect", function() {
        console.log("A user disconnected ",socket.id)
    })
})

server.listen(1111, function() {
    console.log("server is listening on port 1111")
})

