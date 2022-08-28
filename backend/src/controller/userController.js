const usersRepo = require('../database/repository/users');

module.exports = {

    async createUser( req , res ) {
        const status = await usersRepo.createUser(req.body);
        if (status) {
            return res.json({message:'Usuário criado com sucesso'});
        }
        return res.status(400).json({message:'houve um problema na requisição, revise os dados enviados'})
    }
    
}