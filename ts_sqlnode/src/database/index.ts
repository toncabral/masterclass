import { Sequelize } from 'sequelize'

const options = require('../config/database')

class Database {
    public connection: Sequelize

    constructor () {
      this.init()
    }

    private init () {
      this.connection = new Sequelize(options)
    }
}

export default new Database().connection
