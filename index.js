const http = require("http");

const server = http.createServer((req,res) => {
    if(req.url === "/about"){
         res.end("<h1>About Page</h1>")
        } if(req.url === "/"){
            res.end("<h1>Home Page</h1>")
           } if(req.url === "/contact"){
            res.end("<h1>Contact Page</h1>")
           }
           else{
            res.end("<h1>Page Not Found</h1>")
           }
});

server.listen(5000,()=>{
    console.log("Server is Working");
})