const ejs= require('ejs')
const {sendEmail} = require('../Helper/emailNode')
const mssql = require('mssql')
const sqlConfig = require('../config/config')

const welcomeEmailService=async()=>{

    const pool = await mssql.connect(sqlConfig)

    const users = await (await pool.request().execute('getUsersToSentEmail')).recordset
    console.log(users);
    
    for(let user of users){
        // console.log("111", user);
        ejs.renderFile('./Templates/welcome.ejs', {name:user.userName}, async(error,data)=>{
            const messageOptions={
            from: {
                name: "E-market",
                address: process.env.GMAIL_USER},
            to: user.email, 
            subject: 'The E-Market',
            html: data
        }
        // console.log("my error",error);
        // console.log("data",data);

        try {
            await sendEmail(messageOptions)
            // console.log("anything");
           await pool.request().input('id', user.id ).execute('updateSent') 
            // console.log('Email sent');
        } catch (error) {
            console.log({message: error.message});
        }


        })
    }
}


module.exports={welcomeEmailService}