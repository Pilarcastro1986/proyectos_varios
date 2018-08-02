

const express = require('express')
const bodyParser = require('body-parser')
const appPassport = require('./auth/appPassports.js')
const path = require('path');
const passport = require('passport')
const routes = require('./routes');
const User = require('./mongo/models/users')


const app = express()

.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())
// .use(passport.initialize())
// .use(passport.session())



.get('/auth/facebook', appPassport) // 1er ENDPOINT QUE SE VINCULA CON EL BTN DEL HTML y con la config de passport

.get('/auth/facebook/callback', function(req, res) {  // 2DO ENDPOINT QUE LE PEGO DESDE EL PRIMERO Y LO SETEO EN LA CONFIG   "callback_url": "http://localhost:3000/auth/facebook/callback",
   res.send('Te logeaste con exito!')
})

.get('/loginerror', function(req, res){ // 3ER ENDPOINT CUANDO HAY UN ERROR Y NO SE PUEDE LOGEAR, LO LLAMO YO DESDE EL 1ER failureRedirect: '/loginerror' 
    res.send('error')
}) 


.get('/', routes.index)
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'jade')
.use(express.static('./public'))



module.exports = app