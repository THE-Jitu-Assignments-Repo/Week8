const sqlConfig = require('../config/config')
const mssql = require('mssql')
const dotenv = require('dotenv');

module.exports={

    addtocart: async(req,res) => {
        try {
            const pool = await mssql.connect(sqlConfig)
            const {id} = req.params
            console.log(id)
            await pool.request().input('id', id).execute('addOrRemoveToCart')

            res.status(200).json("Added to cart successfully")
            
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
    getAllCart: async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
    removeSingleItem: async(req,res) => {
        try {
            
        } catch (error) {
            
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
