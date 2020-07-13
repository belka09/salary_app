const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Worker = require('./models/Worker');


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
    type: Schema.Types.ObjectId,
    ref: 'Worker'
  }]
}, {
  collection: 'projects'
})

module.exports = mongoose.model('Project', Project)
