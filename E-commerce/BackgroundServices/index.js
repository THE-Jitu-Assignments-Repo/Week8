const express = require('express');
const dotenv = require('dotenv');
const sqlConfig = require('./config/config')
const cronJob = require('node-cron')

dotenv.config()


const app = express();
app.use(express.json());

const start = () =>{
 cronJob.schedule('2 * * * * ', () => {
  console.log('running a task every 2 minute');
})}
start()


app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT}`);
})