const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Project = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  from: {
    type: String
  },
//   rate: {
//     type: String
//   },
  workers: [{
    name: {
      type: String
    },
    rate: {
      type: String
    }
  }]
}, {
  collection: 'projects'
})

module.exports = mongoose.model('Project', Project)
