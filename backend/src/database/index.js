const neo4j = require('neo4j-driver');
const credentials = require('./config/index');
 
 const uri = credentials.uri;
 const user = credentials.username;
 const password = credentials.password;
 
 const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
 const session = driver.session({ database: 'neo4j' })

 module.exports = session, driver;