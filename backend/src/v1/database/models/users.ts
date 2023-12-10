const mongooseUsers =  require('mongoose');

const usersSchema = new mongooseUsers.Schema({
  password: {
    required: true,
    type: String
  },
  creationdate: {
    required: true,
    type: Date,
    default:Date.now
  },
  username: {
    required: true,
    type: String
  },
  
})
module.exports  =  mongooseUsers.model('Users', usersSchema)
