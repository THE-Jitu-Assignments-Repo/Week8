const mssql = require('mssql')
const dotenv = require('dotenv')
const sqlConfig = require('../../config/config')
const {
    v4: uuidv4
} = require('uuid')

dotenv.config()

// const db = new mssql.Database(sqlConfig)
module.exports = {


    addproducts: async (req, res) => {
        const myId = uuidv4();
        console.log(myId);
        try {
            const pool = await mssql.connect(sqlConfig)
            const {
                name,
                description,
                price,
                imageurl,
                discount
            } = req.body

            await pool.request()
                .input('productID', myId)
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

    updateproduct: async (req, res) => {
        try {
            const {
                id
            } = req.params
            // console.log(id);
            const {
                name,
                description,
                price,
                imageurl,
                discount
            } = req.body
            const pool = await mssql.connect(sqlConfig)
            await pool.request()
                .input('productID', id)
                .input('name', name)
                .input('description', description)
                .input('price', price)
                .input('imageurl', imageurl)
                .input('discount', discount)
                .execute('addUpdateProduct')

            //  await  pool.request().execute('addUpdateProduct', {id, name, description, price, imageurl, discount})

            res.status(200).json({
                message: 'Product updated successfully'
            })

        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },
    getproducts: async (req, res) => {
        try {
            const pool = await mssql.connect(sqlConfig)
            const allproducts = await (await pool.request().execute('getproducts')).recordset;
            res.status(200).json({allproducts})

        } catch (error) {

            res.status(500).json({
                message: error.message
            })
        }
    },
    getSingleproduct: async (req, res) => {
        try {

            const {id} = req.params
            // console.log(id);

            const pool = await mssql.connect(sqlConfig)

            const singleProduct = await (await pool.request().input("id", id).execute('getSingleProduct')).recordset;
            res.status(200).json({Product: singleProduct})

        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
    deleteproduct: async (req, res) => {
        try {

        } catch (error) {

        }
    }
}