import http from "http";
import gfName from "./features.js";
import {gfName2} from "./features.js";

console.log(gfName2);
const server = http.createServer((req,res) => {
    if(req.url === "/about"){
         res.end("<h1>About Page</h1>")
        }else if(req.url === "/"){
            res.end("<h1>Home Page</h1>")
           }else if(req.url === "/contact"){
            res.end("<h1>Contact Page</h1>")
           }
           else{
            res.end("<h1>Page Not Found</h1>")
           }
});

server.listen(5000,()=>{
    console.log("Server is Working");
})