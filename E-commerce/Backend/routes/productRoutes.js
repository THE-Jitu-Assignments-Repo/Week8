const { addproducts, getproducts, updateproduct, getSingleproduct } = require('../controllers/productcontroller')

const router = require('express').Router()


router.post('/addproduct',addproducts)
router.post('/updateproduct:id',updateproduct)
router.get('/getSingleproduct:id',getSingleproduct)
router.get('/',getproducts)


module.exports = router