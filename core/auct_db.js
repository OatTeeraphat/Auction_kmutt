var mongoose = require('mongoose')
var config = require('../config') //require config file.
// console.log(process.env.NODE_ENV, config)

function auct_conect_db() {
  function connect () {
    var options = { server: { socketOptions: { keepAlive: 1 } } }
    return mongoose.connect(config.db.host, options).connection
  }

//ensure mongodb connect.
  return connect()
    .on('error', console.log)
    .on('reconnected', function () { console.log('reconnecting db...') })
    .on('disconnected', connect )
    .on('open', function () { console.log('db connection opened!') })
}

