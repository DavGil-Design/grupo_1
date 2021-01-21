const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(__dirname+'/public'));

app.listen(3080,()=>{
    console.log("servidor 3080 funcionando");
})

app.get("/",(req,res)=>{
    pathHtml=path.join(__dirname,"/views/home.html");
    res.sendFile(pathHtml);
})