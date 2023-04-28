const express = require('express')

const server = express()
const indexRouter = require('./routes/main')

server.set('view engine', 'ejs')
server.set('views', __dirname + '/views/pages')

server.use(express.static(__dirname + '/public'))

server.use('/', indexRouter)
server.listen(3000)
console.log('WORK!!!')