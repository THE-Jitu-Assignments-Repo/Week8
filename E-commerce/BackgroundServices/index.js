const express = require('express');
const dotenv = require('dotenv');
const sqlConfig = require('./config/config')

dotenv.config()


const app = express();

app.use(express.json());


app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT}`);
})