const dotenv = require('dotenv');
const mssql = require('mssql')

 dotenv.config()

const sqlConfig = {
  user: 'sa',
  password: 'mikebrown284',
  database: 'E_Commerce',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const testconnection = async ()=>{
    try{
        const connection = await mssql.connect(sqlConfig)
        if(connection){
            console.log("connection established");

        }
        // connection.release()
} catch(err){
    console.log(err);
}
}

testconnection()

module.exports ={
    sqlConfig
}