const fs = require('fs');
const readline = require('readline');
const url = require("url")
const http = require("http");

const inputfile = 'greetings.txt';
let greetings = [];

readline.createInterface({
    input: fs.createReadStream(inputfile),
    crlfDelay: Infinity
}).on("line",(line)=>{
    greetings.push(line);
});

const server = http.createServer((req,res)=>{
    const query = url.parse(req.url,true).query;
    const name = query.name;
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    res.write(`${greeting}, ${name}`);
    res.end();
})

server.listen(8080,()=>console.log("Server Listening to PORT 8080"));