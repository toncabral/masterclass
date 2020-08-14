import { Model, DataTypes, HasManyAddAssociationMixin, BelongsToManyAddAssociationMixin, BelongsToManyRemoveAssociationMixin, Association, BelongsToManyGetAssociationsMixin } from 'sequelize'

import connection from '../database'

import Address from './Address'
import Tech from './Tech'

class User extends Model {
    public id!: number
    public name!: string
    public email!: string

    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    public getTechs!: BelongsToManyGetAssociationsMixin<Tech>
    public addTech!: BelongsToManyAddAssociationMixin<Tech, number>
    public removeTech!: BelongsToManyRemoveAssociationMixin<Tech, number>

    public readonly techs?: Tech[]

    public static associations: {
      projects: Association<User, Tech>
    }
}

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  tableName: 'users',
  sequelize: connection
})

User.hasMany(Address, {
  foreignKey: 'user_id',
  as: 'addresses'
})

User.belongsToMany(Tech, {
  foreignKey: 'user_id',
  through: 'user_techs',
  as: 'techs'
})

Tech.belongsToMany(User, {
  foreignKey: 'tech_id',
  through: 'user_techs',
  as: 'users'
})

export default User
