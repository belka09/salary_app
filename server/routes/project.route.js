const express = require('express');
const app = express();
const projectRoute = express.Router();

let Project = require('../models/Project');

// Add worker
projectRoute.route('/add-project').post((req, res, next) => {
  Worker.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all
projectRoute.route('/project').get((req, res) => {
  Worker.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single worker
projectRoute.route('/project/:id').get((req, res) => {
  Worker.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update worker
projectRoute.route('/update-project/:id').put((req, res, next) => {
  Worker.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('project successfully updated!')
    }
  })
})

// Delete worker
projectRoute.route('/delete-project/:id').delete((req, res, next) => {
  Worker.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = projectRoute;