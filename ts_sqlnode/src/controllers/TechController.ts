import Tech from '../models/Tech'

export default {
  async store (req, res) {
    const { name } = req.body

    const [tech] = await Tech.findOrCreate({
      where: { name }
    })

    return res.json(tech)
  },
  async index (req, res) {
    const { tech_id } = req.params

    const tech = await Tech.findByPk(tech_id, {
      include: [{
        association: 'users',
        attributes: ['name'],
        through: {
          attributes: []
        }
      }]
    })

    return res.json(tech)
  }
}
