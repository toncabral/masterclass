const { Op } = require('sequelize')

const User = require('../models/User')

module.exports = {
    async show(req, res) {
        // Encontrar todos os usuário que tem email que termina com @gmail.com
        // Desses usuários eu quero buscar todos que moram na "Rua Antônio Serra Silveira"
        // Desses usuário eu quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [
                {
                    association: 'addresses',
                    where: {
                        street: 'Antônio Serra Silveira'
                    }
                },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }
            ]
        })

        return res.json(users)
    }
}