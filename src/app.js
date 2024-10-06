//app.js

require('dotenv').config()
const port=process.env.PORT
const host = process.env.HOST


const fs=require('fs')
const path=require('path')
const express = require('express');
const app = express();


// Middleware
app.use(express.json());

// Routes
// Example: app.use('/api/users', require('./routes/userRoutes'));

app.get('/',(req,res)=>{
    res.send('hello eveyrone')
})


const logFile=(message)=>{
    const logdir=path.join(__dirname,'logs')
    const logFileDir=path.join(logdir,'server.log')

    if(!fs.existsSync(logdir)){
        fs.mkdirSync(logdir,{recursive:true})
    }
    const logMessage=`${new Date()} - ${message} \n`
    fs.appendFile(logFileDir,logMessage,(err)=>{
        if (err){
            console.error('Error writing to log file:', err);
        }
    })
}

app.listen(port,host,()=>{
    const out= `listen on ${port}`
    console.log(out);
    logFile(out);
    
})