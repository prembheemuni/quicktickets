const express = require('express');
const router = require('./routes');

const app = express();


app.use('/api', router)

app.listen(9000,()=>{
    console.log(9000)
})