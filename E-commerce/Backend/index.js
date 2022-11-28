const express = require('express');
const dotenv = require('dotenv');
const sqlconfig = require('./config/config');
const  productRoutes  = require('./routes/product/productRoutes');
const cartRoutes = require('./routes/cart/cartRoutes'); 
const userRoutes = require('./routes/user/userRoutes');
const cors = require('cors')

dotenv.config()

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => { res.send('hellp')})


app.use('/', productRoutes)
app.use('/cart', cartRoutes)
app.use('/user', userRoutes)


app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
})