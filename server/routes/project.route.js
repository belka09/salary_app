const express = require('express');
const app = express();
const projectRoute = express.Router();

let Project = require('../models/Project');

// Add Project
projectRoute.route('/add-project').post((req, res, next) => {
  Project.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all
projectRoute.route('/projects').get((req, res) => {
  Project.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Project
projectRoute.route('/project/:id').get((req, res) => {
  Project.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Project
projectRoute.route('/update-project/:id').put((req, res, next) => {
  Project.findByIdAndUpdate(req.params.id, {
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

// Delete Project
projectRoute.route('/delete-project/:id').delete((req, res, next) => {
  Project.findByIdAndRemove(req.params.id, (error, data) => {
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