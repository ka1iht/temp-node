const {createReadStream} = require('fs')
const http = require("http")

const server = http.createServer(function(req, res){
    const readStream = createReadStream("./pathtesting/bigFile.txt")
    readStream.on("open", function(){
        readStream.pipe(res)
    })
    readStream.on("error", function(err){
        res.end(err)
    })
})
server.listen(2021)