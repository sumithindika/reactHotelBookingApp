
//setup 
const express = require('express');

const app = express();

// REQUEST  Api test
app.get('/',(req, res)=> res.send("API Running..."));


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`server start on port ${PORT}`));
