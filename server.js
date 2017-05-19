// Get Dir
var config 		 = require('./config')

// Get the packages
var express 	 = require('express')
var bodyParser   = require('body-parser')
var session      = require('express-session')

// Connect Mongo DB
require('./core/auct_db')


// Create our application
var app = express()


// Use environment defined port or 3000
var port = process.env.PORT || config.host.PORT
app.listen(port)
console.log( config.host.env + '@ http://localhost:' + port + '/api')

// Create our Express router
var router = express.Router()

// route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'helppp!' })
})

// Register all our routes with /api
app.use('/api', router)
