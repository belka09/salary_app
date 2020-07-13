const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Worker = new Schema({
  name: {
    type: String
  },
  position: {
    type: String
  },
  rate: {
    type: String
  },
  photo: {
    type: Array
  }
}, {
  collection: 'workers'
})

module.exports = mongoose.model('Worker', Worker)
