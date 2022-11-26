const { addtocart, getAllCart, removeSingleItem, incQuantity, decQuantity, clearCart } = require('../controllers/cartControllers')
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
router.post('/cart/removeSingleItem/:id', removeSingleItem)
router.post('/cart/addquantity/:id', incQuantity)
router.post('/cart/reducequantity/:id', decQuantity) 
router.get('/cart/clearCart', clearCart)

module.exports = router