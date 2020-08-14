import { Model, DataTypes } from 'sequelize'

import connection from '../database'

class Address extends Model {
    public id!: number
    public user_id: number
    public zipcode!: string
    public street!: string
    public number!: number

    public readonly createdAt!: Date
    public readonly updatedAt!: Date
}

Address.init({
  zipcode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'addresses',
  sequelize: connection
})

export default Address
