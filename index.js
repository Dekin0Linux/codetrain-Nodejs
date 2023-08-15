const http = require('http')


const server = http.createServer((req,res)=>{
    const {url} = req
    switch(url){
        case '/':
            res.writeHead(200,{'Content-type':'text/html'})
            res.end("<h1>Welcome Page here")
            break;
        case '/about':
            res.writeHead(200,{'Content-type':'text/html'})
            res.end("<h1>About Page here")
            break;

        default:
            res.writeHead(200,{'Content-type':'text/html'})
            res.end("<h1>404 page not found")
    }
})

server.listen(4000,()=>{
    console.log("listening on port 4000")
})