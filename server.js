//dependencies
const express = require('express');
const path =  require('path');
const app = express();

//static web server
app.use(express.static(path.join(__dirname, 'dist')))

//route
app.get('/test', (request, response) =>{
    response.send('<h1>Test </h1>');
});

//port
app.listen(3000, ()=>{
    console.log('test ok');
});