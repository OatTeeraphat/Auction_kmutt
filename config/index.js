// Get the packages
var development = require('./env/development')
var production = require('./env/production')



module.exports = {
  development	: Object.assign(development),
  production	: Object.assign(production)
}

[process.env.NODE_ENV|| 'development']//config envoronment