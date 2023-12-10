const mongooseMd =  require('mongoose');

const productsSchema = new mongooseMd.Schema({

  created: {
    required: true,
    type: Date,
    default:Date.now
  },
  name: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  imagePath: {
    required: true,
    type: String
  },
    price: {
      required: true,
      type: Number
    },
})
module.exports  =  mongooseMd.model('Products', productsSchema)
