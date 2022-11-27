const { addproducts, getproducts, updateproduct, getSingleproduct } = require('../../controllers/product/productcontroller')

const router = require('express').Router()

// product routes
router.post('/addproduct', addproducts)
router.post('/updateproduct/:id',updateproduct)
router.put('/updateproduct/:id',updateproduct)
router.get('/getSingleproduct/:id',getSingleproduct)
router.get('/',getproducts)



module.exports = router