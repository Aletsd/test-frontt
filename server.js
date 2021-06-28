//dependencies
const express = require('express');
const path =  require('path');
const app = express();

//static web server
app.use(express.static(path.join(__dirname, 'dist')))

//route
app.get('/', (request, response) =>{
    response.sendFile(path.join(__dirname, 'dist/testGenerator.html'));
});

//port
app.listen(3000, ()=>{
    console.log('Server on');
});