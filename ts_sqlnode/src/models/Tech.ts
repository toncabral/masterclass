import { Model, DataTypes, Association, BelongsToManyGetAssociationsMixin, BelongsToManyAddAssociationMixin, BelongsToManyRemoveAssociationMixin } from 'sequelize'

import sequelize from '../database'

import User from './User'

class Tech extends Model {
    public id!: number
    public name!: string

    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    public getUsers!: BelongsToManyGetAssociationsMixin<User>

    public readonly users?: User[]

    public static associations: {
      users: Association<Tech, User>
    }
}

Tech.init({
  name: DataTypes.STRING
}, {
  sequelize,
  tableName: 'techs'
})

export default Tech
