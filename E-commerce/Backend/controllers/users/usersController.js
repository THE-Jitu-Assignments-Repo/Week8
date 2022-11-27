const mssql = require('mssql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const sqlConfig = require('../../config/config')
const {
    v4: uuidv4
} = require('uuid')

dotenv.config()

module.exports = {
    registerUser: async (req, res) => {
        try {
            const {
                username,
                email,
                password
            } = req.body
            const id = uuidv4()
            const pool = await mssql.connect(sqlConfig)
            const saltRounds = 10
            const hash = await bcrypt.hash(password, saltRounds)
            // console.log(hash);
            const user = {
                username,
                email,
                password: hash
            }
            // console.log(user);

            await pool.request()
                .input('id', id)
                .input('name', user.username)
                .input('email', user.email)
                .input('password', user.password)
                .execute('registerUser')

            res.status(200).json('Registered successfully')

        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },
    loginUser: async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body
            const pool = await mssql.connect(sqlConfig)
            const user = await (await pool.request().input('email', email).execute('getUsers')).recordset[0];
            // console.log(user);

            if (user) {
                const comparePass = await bcrypt.compare(password, user.password);
                if (comparePass) {
                    const {password, id, ...others} = user;
                    const token = jwt.sign(others, 'secret',{expiresIn: '30mins'}) // my powers
                    // console.log(token);
                    res.status(200).json({token});
                } else {

                    res.status(403).json({
                        message: "password mismatch"
                    })
                }
            } else {
                res.status(404).json("user not found")
            }
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    },
    logoutUser: async (req, res) => {
        try {

        } catch (error) {

        }
    }
}