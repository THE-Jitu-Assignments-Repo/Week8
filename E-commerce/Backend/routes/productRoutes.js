const { addtocart, getAllCart } = require('../controllers/cartControllers')
const { addproducts, getproducts, updateproduct, getSingleproduct } = require('../controllers/productcontroller')

const router = require('express').Router()

// product routes
router.post('/addproduct',addproducts)
router.post('/updateproduct/:id',updateproduct)
router.put('/updateproduct/:id',updateproduct)
router.get('/getSingleproduct/:id',getSingleproduct)
router.get('/',getproducts)


// cart routes
router.post('/addtocart/:id', addtocart)
router.get('/cart/getallcart', getAllCart)




module.exports = router