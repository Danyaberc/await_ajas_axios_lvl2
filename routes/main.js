const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
   res.render('index')
})

const product = [
   { name: 'red', id: 'red', img: '/img/01.jpg' },
   { name: 'blue', id: 'blue', img: '/img/02.jpg' },
   { name: 'green', id: 'green', img: '/img/03.jpg' },
   { name: 'black', id: 'black', img: '/img/04.jpg' }
]

router.get('/product', (req, res) => {
   res.json(product)
})

router.get('/product/selprod',(req,res)=>{
   const selprod = product.filter(item => item.id === req.query.q)
   res.json(selprod)
})

module.exports = router