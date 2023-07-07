import http from "http";
import { generateLovePercent } from "./features.js";
// import fs from "fs";
import path from 'path';

console.log(path.dirname("/home/random/index.html"));

// const home = fs.readFileSync("./index.html");
// console.log(home);
// console.log(generateLovePercent());
const server = http.createServer((req,res) => {
    if(req.url === "/about"){
         res.end(`<h1>LOve is ${generateLovePercent()}</h1>`)
        }else if(req.url === "/"){
            res.end(home)
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