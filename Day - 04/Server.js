const{createServer}= require('node:http'); // Import the required module

//Define server configuration
const localhost='127.0.0.1'; //Set the hostname
const port=3000; //Set the port number

//Create the server
const server = createServer((req,res) =>{
    res.statusCode=200; // Set reponse type
    res.setHeader('Content-Type','text/plain');
    res.end("Hello Node JS");
});

//Start the server
server.listen(port,localhost,()=>{
    console.log(`Running on:  ${localhost}:${port}`);
});