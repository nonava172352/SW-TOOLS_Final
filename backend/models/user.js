const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
prefix: String,
  name: String,
  sername: String,
  sex: String,
  birthdate: String,
  idcard: String,
  lineid: String,
  email: String,
  Hnumber: String,
  swine: String,
  village: String,
  building: String,
  road: String,
  alley: String,
  province: String,
  day: String,
  time: String,
  tags: [String]
},{ collection: 'user' })

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel
