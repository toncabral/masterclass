import Tech from '../models/Tech'
import User from '../models/User'

export default {
  async store (req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    console.log(user)

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    const [tech, created] = await Tech.findOrCreate({
      where: { name }
    })

    console.log(created)

    await user.addTech(tech)

    return res.json(tech)
  },
  async index (req, res) {
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      include: [{
        association: 'techs',
        attributes: ['name'],
        through: {
          attributes: ['user_id']
        }
      }]
    })

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    return res.json(user)
  },
  async delete (req, res) {
    const { user_id } = req.params
    const { name } = req.body

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    const tech = await Tech.findOne({
      where: { name }
    })

    await user.removeTech(tech)

    return res.json()
  }
}
