module.exports = {

  async createUser(params) {
      console.log('params', params);
      const neo4j = require('neo4j-driver');
      const credentials = require('../config/index');
      
      const uri = credentials.uri;
      const user = credentials.username;
      const password = credentials.password;
      
      const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
      const session = driver.session({ database: 'neo4j' })
    
      const name = params.username
      const email = params.email
      const cpf = params.cpf
      const telefone = params.cellphone

    
      try {

        const writeQuery = `CREATE (p1:Person { name: $name, email: $email, cpf: $cpf, telefone: $telefone})
                            RETURN p1`
    
        // Write transactions allow the driver to handle retries and transient errors
        const writeResult = await session.writeTransaction(tx =>
          tx.run(writeQuery, { name, email, cpf, telefone })
        )
      } catch (error) {
        console.error('Something went wrong: ', error)
      } finally {
        console.log('user created')
        await session.close()
        return true
      }
    
      // Don't forget to close the driver connection when you're finished with it
      await driver.close()
  }

}
