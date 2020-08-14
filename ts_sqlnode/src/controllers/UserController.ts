import User from '../models/User'

export default {

  async index (req, res) {
    const users = await User.findAll()

    return res.json(users)
  },

  async store (req, res) {
    const { name, email } = req.body

    const user = await User.create({ name, email })

    return res.json(user)
  },

  async delete (req, res) {
    const { user_id } = req.params

    const user = await User.findByPk(user_id)

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    await User.destroy({
      where: {
        id: user_id
      },
      limit: 1
    })

    return res.json()
  }
}
