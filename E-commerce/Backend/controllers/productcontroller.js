const mssql = require('mssql')
const dotenv = require('dotenv')
const sqlConfig = require('../config/config')
const {v4: uuidv4} = require('uuid')

dotenv.config()

// const db = new mssql.Database(sqlConfig)
module.exports = {


    addproducts: async (req, res) => {
        try {
            const pool = await mssql.connect(sqlConfig)
            const {
                name,
                description,
                price,
                imageurl,
                discount,
            } = req.body

            await pool.request()
                .input('product_id', uuidv4())
                .input('name', name)
                .input('description', description)
                .input('price', price)
                .input('imageurl', imageurl)
                .input('discount', discount)
                .execute('addUpdateProduct')

            res.status(200).json({
                status: 'success'
            })


        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
    },

    getproducts: async (req, res) => {
        try {
            const pool = await mssql.connect(sqlConfig)
            const allproducts = await (await pool.request().execute('getproducts')).recordset;
            res.status(200).json(allproducts)

        } catch (error) {

            res.status(500).json({
                message: error.message
            })
        }
    },
    getSingleproduct: async (req, res) => {
        try {

        } catch (error) {

        }
    },
    updateproduct: async (req, res) => {
        try {

        } catch (error) {

        }
    },
    deleteproduct: async (req, res) => {
        try {

        } catch (error) {

        }
    }
}