const { addtocart, getAllCart, removeSingleItem, incQuantity, decQuantity, clearCart } = require('../../controllers/cart/cartControllers')

const router = require('express').Router()



// cart routes
router.get('/', getAllCart)
router.put('/addtocart/:id', addtocart)
router.post('/removeSingleItem/:id', removeSingleItem)
router.post('/addquantity/:id', incQuantity)
router.post('/reducequantity/:id', decQuantity) 
router.get('/clearCart', clearCart)

module.exports = router