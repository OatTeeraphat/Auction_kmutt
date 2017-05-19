var util = require('util')

var config = {

  host: {
  	PORT : '3000',
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
  config.host.backendInternal,
  config.db.port,
  config.db.name
)

module.exports = config