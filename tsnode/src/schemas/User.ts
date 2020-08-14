import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
    email?: string
    firtsName?: string
    lastName?: string
    fullName(): string
}

const UserSchema = new Schema({
  email: String,
  firstname: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return `${this.firstName} ${this.lastName}`
}

export default model<UserInterface>('User', UserSchema)
