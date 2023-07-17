// import http from "http";
// import { generateLovePercent } from "./features.js";
// // import fs from "fs";
// // import path from 'path';

// // console.log(path.dirname("/home/random/index.html"));

// // const home = fs.readFileSync("./index.html");
// // console.log(home);
// // console.log(generateLovePercent());

// const server = http.createServer((req,res) => {
//     console.log(req.method);
//     if(req.url === "/about"){
//          res.end(`<h1>LOve is ${generateLovePercent()}</h1>`)
//         }else if(req.url === "/"){
//             res.end("home");
//            }else if(req.url === "/contact"){
//             res.end("<h1>Contact Page</h1>")
//            }
//            else{
//             res.end("<h1>Page Not Found</h1>")
//            }
// });

// server.listen(5000,()=>{
//     console.log("Server is Working");
// })

import { log } from "console";
import express from "express";
import path from "path";


const app = express();

app.use(express.static(path.join(path.resolve(),"public")));

//setting up view engine
app.set("view engine","index")

app.get("/",(req,res) => {

    // res.sendFile("index.html")

    res.render("index.ejs",{name :"Adnan"});
// res.json({
//     success: true,
//     products:[

//     ]

// });
// res.status(400).send("Meri Marzi");
// const pathlocation=path.resolve();
// res.sendFile(path.join(pathlocation,"./index.html"))
// res.render("index.ejs");
})

app.listen(5000,()=>{
    console.log("Server is Working");
})