const express = require('express');
const app = express();
const port = 3001;

const students = require('./DB/Studentdb')

app.get('/',(req,res)=>{
    res.send('Hello Express JS');
});


app.get('/msg',(req,res)=>{
    res.send('Hello IT Students');
});


app.get('/stu',(req,res)=>{
    res.send(students);
});

// Find a student based on the reg number
app.get('/stu/:id',(req,res)=>{
    const id = req.params.id
    const result = students.find(student => student.regno === id); 
    //Check student is available or not, if not return an error message
    if(result){
        res.send(result);
    }
    else{
        res.status(404).send("Student not found"); 
    }
    
});

//Filter students by Gender
app.get('/stu/gender/:gen',(req,res)=>{
    const gen = req.params.gen
    const result = students.filter(student => student.gender === gen); 
    res.send(result);
});

//Filter by name
app.get('/stu/name/:name',(req,res)=>{
    const name = req.params.name
    const result = students.filter(student => student.name === name);
    res.send(result);
});

//Start the server
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});