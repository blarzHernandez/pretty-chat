/**
 * Global app configuration
 */
var config = {};

//Server Connections
  config = {
      port:process.env.port || 3000,
      ip:'127.0.0.1'

 }

module.exports=  config;