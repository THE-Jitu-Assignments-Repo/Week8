const express = require('express');
const dotenv = require('dotenv');
const sqlConfig = require('./config/config')
const cronJob = require('node-cron');
const cors = require('cors')
const { welcomeEmailService } = require('./Service/welcomeUser');

dotenv.config()


const app = express();
app.use(express.json());

app.use(cors());

const start = () =>{
 cronJob.schedule('*/10 * * * * * ', async() => {
    await welcomeEmailService()
  console.log('starting email');
})}

start()


app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT}`);
})