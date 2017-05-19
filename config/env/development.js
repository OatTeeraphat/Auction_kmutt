// localhost value for test @global server
var util = require('util')

var config = {

  host: {
    env  : 'Development',
  	PORT :  3000,
    URL	 : 'localhost',
  },

  db: {
    user: '',
    pwd: '',
    port: 27017,
    name: 'test_auction'
  }

}

config.db.host = util.format('mongodb://%s:%s@%s:%s/%s', 
  config.db.user,
  config.db.pwd,
  config.host.URL,
  config.db.port,
  config.db.name
)

module.exports = config
