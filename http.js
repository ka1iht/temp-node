const http = require("http")
const server = http.createServer((req, res) =>{
    if(req.url === `/`)
        res.end(`Welcome to the homepage of Thilak's Mac`)
    else if(req.url === `/about`)
        res.end(`Graduate student learning node.js`)
    else
        res.end(`<h1>Wow so empty</h1><p>Sorry, could find the page you requested!</p><a href="/">Home</a>`)    
})
server.listen(2021)