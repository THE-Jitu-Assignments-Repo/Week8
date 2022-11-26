const sqlConfig = require('../config/config')
const mssql = require('mssql')
const dotenv = require('dotenv');

module.exports={

    addtocart: async(req,res) => {
        try {
            const pool = await mssql.connect(sqlConfig)
            const {id} = req.params
            // console.log(id)
            await pool.request().input('id', id).execute('addOrRemoveToCart')

            res.status(200).json("Added to cart successfully")
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
    getAllCart: async (req, res) => {
        try {
            const pool = await mssql.connect(sqlConfig)

            const cart = await (await pool.request().execute('getAllCart')).recordset
            res.status(200).json({cartItems:cart})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
    removeSingleItem: async(req,res) => {
        try {
            const {id} = req.params
            const pool = await mssql.connect(sqlConfig)
            await pool.request().input('id', id).execute('addOrRemoveToCart')

            res.status(200).json("Removed from cart successfully")
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
    incQuantity: async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
    decQuantity: async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
    clearCart: async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    }

}
