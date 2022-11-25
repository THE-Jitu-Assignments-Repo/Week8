const express = require('express');
const dotenv = require('dotenv');
const sqlconfig = require('./config/config');
const  router  = require('./routes/productRoutes');

dotenv.config()

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => { res.send('hellp')})


app.use('/', router)


app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
})