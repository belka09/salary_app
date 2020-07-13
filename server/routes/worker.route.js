const express = require('express');
const app = express();
const workersRoute = express.Router();

let Worker = require('../models/Worker');

// Add worker
workersRoute.route('/add-worker').post((req, res, next) => {
  Worker.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all
workersRoute.route('/workers').get((req, res) => {
  Worker.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single worker
workersRoute.route('/workers/:id').get((req, res) => {
  Worker.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update worker
workersRoute.route('/update-worker/:id').put((req, res, next) => {
  Worker.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Worker successfully updated!')
    }
  })
})

// Delete worker
workersRoute.route('/delete-worker/:id').delete((req, res, next) => {
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

module.exports = workersRoute;