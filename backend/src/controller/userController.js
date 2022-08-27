const users = require('../database/repository/users');

module.exports = {

    async runExampleQueryNeo4j( req , res ) {
        const users = await users.run();
        return res.json(users)
    }
    
}